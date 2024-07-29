import { ModeToggle } from "@/features/mode-toggle";
import { Box, Logo } from "@/shared/ui";

import { Navigation } from "./navigation";

export function Header() {
  return (
    <Box
      as="header"
      className="sticky top-4 z-10 flex items-center justify-center rounded-full border bg-background/10 px-4 py-2 backdrop-blur-xl md:px-6 md:py-4"
    >
      <Box className="flex w-full items-center justify-between">
        <Logo />
        <Box className="flex items-center gap-3">
          <ModeToggle />
          <Navigation />
        </Box>
      </Box>
    </Box>
  );
}
