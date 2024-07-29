import React from "react";
import { Github, Mail, Phone } from "lucide-react";

import { Telegram } from "@/shared/ui";

export type Social = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

export const socials: Social[] = [
  {
    title: "Telegram",
    href: "https://t.me/gl3af",
    icon: <Telegram />,
  },
  {
    title: "GitHub",
    href: "https://github.com/gl3af",
    icon: <Github />,
  },
  {
    title: "Телефон",
    href: "tel:+79196276893",
    icon: <Phone />,
  },
  {
    title: "Почта",
    href: "mailto:ybaranovnikita2002@gmail.com",
    icon: <Mail />,
  },
];

export const stackData = [
  {
    name: "Next.js",
    href: "https://nextjs.org",
  },
  {
    name: "Tailwind",
    href: "https://tailwindcss.com",
  },
  {
    name: "React",
    href: "https://react.dev",
  },
];
