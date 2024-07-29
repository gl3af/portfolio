import { About } from "@/widgets/about";
import { Experience } from "@/widgets/experience";
import { Hero } from "@/widgets/hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 py-5 md:gap-8 lg:gap-10">
      <Hero />
      <About />
      <Experience />
    </main>
  );
}
