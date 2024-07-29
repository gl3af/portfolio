import { Rocket } from "lucide-react";

import { Box, Section } from "@/shared/ui";

import { skillGroups } from "../lib";
import { Group } from "./group";

export function Skills() {
  return (
    <Section title="Навыки" id="skills" icon={<Rocket strokeWidth={2.5} />}>
      <Box className="space-y-2 md:space-y-4">
        {skillGroups.map(({ name, skills, variant }) => (
          <Group name={name} skills={skills} variant={variant} key={name} />
        ))}
      </Box>
    </Section>
  );
}
