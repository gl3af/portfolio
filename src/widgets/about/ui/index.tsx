import { UserPen } from "lucide-react";
import React from "react";

import { Section, Text } from "@/shared/ui";

import { paragraphs } from "../lib";

export function About() {
  return (
    <Section title="Обо мне" id="about" icon={<UserPen strokeWidth={2.5} />}>
      <div className="space-y-2 md:space-y-3">
        {paragraphs.map((paragraph) => (
          <Text>{paragraph}</Text>
        ))}
      </div>
    </Section>
  );
}
