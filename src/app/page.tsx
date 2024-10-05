import { Box } from "@/shared/ui";
import { About } from "@/widgets/about";
import { Experience } from "@/widgets/experience";
import { Hero } from "@/widgets/hero";
import { Skills } from "@/widgets/skills";

export const revalidate = 0;

export default function Home() {
  return (
    <Box as="main" className="flex flex-col gap-4 py-5 md:gap-8 lg:gap-10">
      <Hero />
      <About />
      <Experience />
      <Skills />
    </Box>
  );
}
