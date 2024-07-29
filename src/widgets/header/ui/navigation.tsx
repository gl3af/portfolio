import { Map } from "lucide-react";
import Link from "next/link";

import {
  Box,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui";

import { links } from "../lib";

export function Navigation() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Map className="h-[1.2rem] w-[1.2rem]" />
          <Box as="span" className="sr-only">
            Навигация по сайту
          </Box>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {links.map(({ title, href }) => (
          <Link key={title} href={href} className="main-transition">
            <DropdownMenuItem>{title}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
