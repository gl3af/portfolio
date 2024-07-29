import type { badgeVariants } from "@/shared/ui";
import type { VariantProps } from "class-variance-authority";

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>;

export type SkillGroup = {
  name: string;
  variant: BadgeVariant;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Фундамент",
    variant: "default",
    skills: ["JavaScript", "React", "Next.js", "TypeScript", "Git", "Vite", "Webpack", "REST API"],
  },
  {
    name: "Стилизация и UI-библиотеки",
    variant: "border",
    skills: ["Tailwind CSS", "CSS Modules", "SASS", "CSS-in-JS", "MUI", "shadcn/ui", "Mantine UI"],
  },
  {
    name: "Stage-менеджмент",
    variant: "secondary",
    skills: ["Redux", "Redux-Toolkit", "@tanstack/react-query", "Zustand", "MobX"],
  },
  {
    name: "Остальное",
    variant: "outline",
    skills: [
      "Jest",
      "Vitest",
      "Playwright",
      "Figma",
      "Node.js",
      "SEO",
      "SSR/SSG",
      "tRPC",
      "GraphQL",
    ],
  },
];
