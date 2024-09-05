import { redirect } from "next/navigation";

import { db } from "@/db";
import { Box, Subtitle, Title } from "@/shared/ui";
import { AddExperienceForm, UpdateExperienceForm } from "@/widgets/experience";

export default async function AdminPage({ params }: { params: { slug: string } }) {
  if (process.env.ADMIN_PASSWORD !== params.slug) redirect("/");

  const experiences = await db.experience.findMany();

  return (
    <Box as="main" className="space-y-4 py-5">
      <Title>Админка - Опыт</Title>
      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <UpdateExperienceForm experience={experience} key={experience.id} />
        ))}
      </div>

      <div className="space-y-4">
        <Subtitle>Новый опыт</Subtitle>
        <AddExperienceForm />
      </div>
    </Box>
  );
}
