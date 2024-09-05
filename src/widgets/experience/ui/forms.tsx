import { Experience } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { format } from "date-fns";

import { Input, Textarea } from "@/shared/ui";
import { db } from "@/db";

import { SubmitButton } from "./submit-button";

export function UpdateExperienceForm({ experience }: { experience: Experience }) {
  async function updateExperience(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const start = formData.get("start") as string;
    const end = formData.get("end") as string | undefined;

    await db.experience.update({
      where: {
        id: experience.id,
      },
      data: {
        companyName: name,
        companyDescription: description,
        start: new Date(start),
        end: end ? new Date(end) : undefined,
      },
    });

    revalidatePath("/admin/[slug]", "page");
  }

  return (
    <form
      action={updateExperience}
      className="flex flex-col gap-4 border-b-2 border-primary pb-4 last:border-b-0"
    >
      <Input
        type="text"
        name="name"
        defaultValue={experience.companyName}
        placeholder="Название компании"
      />
      <Textarea name="description" value={experience.companyDescription} placeholder="Описание" />
      <Input
        type="date"
        name="start"
        defaultValue={format(experience.start, "yyyy-MM-dd")}
        placeholder="Дата начала"
      />
      <Input
        type="date"
        name="end"
        defaultValue={experience.end ? format(experience.end, "yyyy-MM-dd") : undefined}
        placeholder="Дата окончания"
      />
      <SubmitButton />
    </form>
  );
}

export function AddExperienceForm() {
  async function addExperience(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const start = formData.get("start") as string;
    const end = formData.get("end") as string | undefined;

    await db.experience.create({
      data: {
        companyName: name,
        companyDescription: description,
        start: new Date(start),
        end: end ? new Date(end) : undefined,
      },
    });

    revalidatePath("/admin/[slug]", "page");
  }

  return (
    <form action={addExperience} className="flex flex-col gap-4">
      <Input type="text" name="name" placeholder="Название компании" />
      <Textarea name="description" placeholder="Описание" />
      <Input type="date" name="start" placeholder="Дата начала" />
      <Input type="date" name="end" placeholder="Дата окончания" />
      <SubmitButton />
    </form>
  );
}
