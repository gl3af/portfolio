import Link from "next/link";

import { Logo, Text } from "@/shared/ui";

import { Socials } from "./socials";
import { stackData } from "../lib";

export function Footer() {
  return (
    <footer className="bg-background flex flex-col gap-2 rounded-t-lg border border-b-0 p-4">
      <div className="flex items-center justify-between">
        <Logo />
        <Socials />
      </div>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
        <Text>© 2024 Никита Баранов</Text>
        <div className="flex flex-col min-[375px]:flex-row min-[375px]:gap-1.5">
          <Text>Создано с помощью</Text>
          <div className="flex flex-wrap gap-1">
            {stackData.map(({ name, href }) => (
              <Link
                href={href}
                className="text-primary text-sm hover:underline sm:text-base md:text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
