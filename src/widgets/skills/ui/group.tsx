import { Badge, SmallTitle } from "@/shared/ui";

import type { SkillGroup } from "../lib";

type GroupProps = SkillGroup;

export function Group({ name, skills, variant }: GroupProps) {
  return (
    <div className="space-y-2">
      <SmallTitle>{name}</SmallTitle>
      <ul className="flex flex-wrap gap-2 md:gap-3">
        {skills.map((skill) => (
          <li>
            <Badge variant={variant}>{skill}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
