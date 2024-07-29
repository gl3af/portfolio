import * as React from "react";

import { cn } from "../lib";

type TimelineProps = React.HTMLAttributes<HTMLOListElement> & {
  position?: "left" | "right" | "alternate" | "reverse-alternate";
};

const Timeline = React.forwardRef<HTMLOListElement, TimelineProps>(
  ({ className, position = "right", ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex grow flex-col",
        position === "left" && "[&>li]:flex-row-reverse [&>li]:text-right",
        position === "alternate" && "md:even:[&>li]:flex-row-reverse md:even:[&>li]:text-right",
        position === "reverse-alternate" &&
          "md:odd:[&>li]:flex-row-reverse md:odd:[&>li]:text-right",
        className
      )}
      {...props}
    />
  )
);
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(
        "flex min-h-24 before:hidden before:flex-[1] before:px-4 before:py-1.5 md:before:block",
        className
      )}
      {...props}
    />
  )
);
TimelineItem.displayName = "TimelineItemWrapper";

const TimelineContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-[1] px-4 py-1.5", className)} {...props} />
  )
);
TimelineContent.displayName = "TimelineItem";

const TimelineSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-[0] flex-col items-center", className)} {...props} />
  )
);
TimelineSeparator.displayName = "TimelineSeparator";

const TimelinePoint = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("bg-primary my-3 flex self-baseline rounded-full p-1.5 shadow-md", className)}
      {...props}
    />
  )
);
TimelinePoint.displayName = "TimelineSeparatorPoint";

const TimelineConnector = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn("bg-muted w-0.5 grow", className)} {...props} />
  )
);
TimelineConnector.displayName = "TimelineConnector";

export {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelinePoint,
  TimelineConnector,
};
