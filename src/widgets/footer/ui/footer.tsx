import Link from "next/link";

import { Box, Logo, Text } from "@/shared/ui";

import { Socials } from "./socials";
import { stackData } from "../lib";

export function Footer() {
  return (
    <Box
      as="footer"
      className="flex flex-col gap-2 rounded-t-lg border border-b-0 bg-background p-4"
    >
      <Box className="flex items-center justify-between">
        <Logo />
        <Socials />
      </Box>
      <Box className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
        <Text>© 2024 Никита Баранов</Text>
        <Box className="flex flex-col min-[375px]:flex-row min-[375px]:gap-1.5">
          <Text>Создано с помощью</Text>
          <Box className="flex flex-wrap gap-1">
            {stackData.map(({ name, href }) => (
              <Link
                href={href}
                className="text-sm font-semibold text-primary hover:underline sm:text-base md:text-lg"
                target="_blank"
                rel="noopener noreferrer"
                key={href}
              >
                {name}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
