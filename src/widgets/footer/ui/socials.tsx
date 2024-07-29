import Link from "next/link";

import { Box } from "@/shared/ui";

import { socials, type Social } from "../lib";

function SocialItem({ title, href, icon }: Social) {
  return (
    <Link
      href={href}
      className="main-transition hover:bg-muted hover:text-foreground/80 flex rounded-full p-2.5"
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      {icon}
      <Box as="span" className="sr-only">
        {title}
      </Box>
    </Link>
  );
}

export function Socials() {
  return (
    <Box className="flex space-x-1 sm:space-x-2">
      {socials.map(({ title, href, icon }) => (
        <SocialItem key={title} title={title} href={href} icon={icon} />
      ))}
    </Box>
  );
}
