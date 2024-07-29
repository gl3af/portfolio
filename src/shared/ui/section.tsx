import React, { PropsWithChildren } from "react";

import { Subtitle } from "./typography";

type SectionProps = PropsWithChildren<{
  title: string;
  id: string;
  icon: React.ReactNode;
}>;

export function Section({ id, title, icon, children }: SectionProps) {
  return (
    <section
      id={id}
      className="bg-background shadow-primary flex flex-col gap-4 rounded-lg border p-4 shadow-inner md:p-6"
    >
      <div className="flex items-center gap-3">
        {icon}
        <Subtitle>{title}</Subtitle>
      </div>
      {children}
    </section>
  );
}
