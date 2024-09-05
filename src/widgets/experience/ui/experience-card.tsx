import { Experience } from "@prisma/client";

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

type ExperienceCardProps = Experience;

export function ExperienceCard({
  companyDescription,
  companyName,
  start,
  end,
}: ExperienceCardProps) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelinePoint />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Box className="main-transition hover:main-border space-y-1 rounded-lg border-2 p-3">
          <SmallTitle>{companyName}</SmallTitle>
          <Text>{companyDescription}</Text>
          <Text className="text-muted-foreground">
            {formatDate(start)} &#8212; {formatDate(end ?? undefined) ?? "по\xa0настоящее\xa0время"}{" "}
            ({getWorkTime(start, end ?? undefined)})
          </Text>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
}
