import { BriefcaseBusiness } from "lucide-react";

import { Box, Section, Text, Timeline } from "@/shared/ui";

import { getTotalWorkTime } from "../model";
import { experience } from "../lib";
import { ExperienceCard } from "./experience-card";

export function Experience() {
  const totalWorkTime = getTotalWorkTime();

  return (
    <Section
      title="Опыт работы"
      id="work-experience"
      icon={<BriefcaseBusiness strokeWidth={2.5} />}
    >
      <Box className="space-y-2 md:space-y-3">
        <Text className="text-muted-foreground">{totalWorkTime}</Text>
        <Text>
          Моя коммерческая разработка началась в начале 2022 года. За это время я успел поработать в
          различных компаниях, занимающихся как заказной, так и продуктовой разработкой
        </Text>
        <Timeline position="alternate">
          {experience.map(({ company, description, start, end }) => (
            <ExperienceCard
              company={company}
              description={description}
              start={start}
              end={end}
              key={company}
            />
          ))}
        </Timeline>
      </Box>
    </Section>
  );
}
