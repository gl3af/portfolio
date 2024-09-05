import { BriefcaseBusiness } from "lucide-react";

import { Box, Section, Text, Timeline } from "@/shared/ui";
import { db } from "@/db";

import { getTotalWorkTime } from "../model";
import { ExperienceCard } from "./experience-card";

export async function Experience() {
  const experiences = await db.experience.findMany();
  const totalWorkTime = getTotalWorkTime(experiences);

  return (
    <Section
      title="Опыт работы"
      id="work-experience"
      icon={<BriefcaseBusiness strokeWidth={2.5} />}
    >
      <Box className="space-y-2 md:space-y-3">
        <Text className="text-muted-foreground">{totalWorkTime}</Text>
        <Timeline position="alternate">
          {experiences.map((experience) => (
            <ExperienceCard {...experience} />
          ))}
        </Timeline>
      </Box>
    </Section>
  );
}
