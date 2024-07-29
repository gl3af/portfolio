import { cn } from "../lib";

import type { HTMLAttributes } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement>;
type SubtitleProps = TitleProps;
type SmallTitleProps = TitleProps;
type TextProps = HTMLAttributes<HTMLParagraphElement>;

export function Title({ className, children, ...props }: TitleProps) {
  return (
    <h1 className={cn("font-title text-2xl font-medium md:text-3xl", className)} {...props}>
      {children}
    </h1>
  );
}

export function Subtitle({ className, children, ...props }: SubtitleProps) {
  return (
    <h2 className={cn("font-title text-xl font-medium md:text-2xl", className)} {...props}>
      {children}
    </h2>
  );
}

export function SmallTitle({ className, children, ...props }: SmallTitleProps) {
  return (
    <h3 className={cn("font-title text-lg font-medium md:text-xl", className)} {...props}>
      {children}
    </h3>
  );
}

export function Text({ className, ...props }: TextProps) {
  return (
    <p
      className={cn(
        "hyphens-auto break-words text-sm font-normal sm:text-base md:text-lg",
        className
      )}
      {...props}
    />
  );
}
