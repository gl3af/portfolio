import { UserPen } from "lucide-react";
import React from "react";

import { Box, Section, Text } from "@/shared/ui";

import { paragraphs } from "../lib";

export function About() {
  return (
    <Section title="Обо мне" id="about" icon={<UserPen strokeWidth={2.5} />}>
      <Box className="space-y-2 md:space-y-3">
        {paragraphs.map((paragraph) => (
          <Text key={paragraph}>{paragraph}</Text>
        ))}
      </Box>
    </Section>
  );
}
