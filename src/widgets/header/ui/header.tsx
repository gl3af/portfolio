import { ModeToggle } from "@/features/mode-toggle";
import { Logo } from "@/shared/ui";

import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="bg-background/10 sticky top-4 z-10 flex items-center justify-center rounded-full border px-3 py-2 backdrop-blur-xl md:px-6 md:py-4">
      <div className="flex w-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Navigation />
        </div>
      </div>
    </header>
  );
}
