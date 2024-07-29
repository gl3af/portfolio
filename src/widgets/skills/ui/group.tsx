import { Badge, Box, SmallTitle } from "@/shared/ui";

import type { SkillGroup } from "../lib";

type GroupProps = SkillGroup;

export function Group({ name, skills, variant }: GroupProps) {
  return (
    <Box className="space-y-2">
      <SmallTitle>{name}</SmallTitle>
      <Box as="ul" className="flex flex-wrap gap-2 md:gap-3">
        {skills.map((skill) => (
          <Box as="li" key={skill}>
            <Badge variant={variant}>{skill}</Badge>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
