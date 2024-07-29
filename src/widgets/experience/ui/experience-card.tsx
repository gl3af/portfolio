import {
  SmallTitle,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineSeparator,
  Text,
  Box,
} from "@/shared/ui";

import { formatDate, getWorkTime } from "../model";
import { Experience } from "../lib";

type ExperienceCardProps = Experience;

export function ExperienceCard({ company, description, start, end }: ExperienceCardProps) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelinePoint />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Box className="main-transition hover:main-border space-y-1 rounded-lg border-2 p-3">
          <SmallTitle>{company}</SmallTitle>
          <Text>{description}</Text>
          <Text className="text-muted-foreground">
            {formatDate(start)} &#8212; {formatDate(end) ?? "по\xa0настоящее\xa0время"} (
            {getWorkTime(start, end)})
          </Text>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
}
