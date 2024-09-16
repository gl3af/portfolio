import Image from "next/image";

import { Box, Button, Text, Title } from "@/shared/ui";

export function Hero() {
  return (
    <Box className="flex items-center justify-center">
      <Box className="grid place-items-center gap-4 md:grid-cols-[1fr_2fr] md:gap-8 lg:grid-cols-[1fr_3fr]">
        <Box className="main-border relative aspect-square w-full max-w-xs overflow-hidden rounded-lg md:max-w-md md:-rotate-2">
          <Image src="/me.webp" alt="Никита Баранов" fill priority />
        </Box>
        <Box className="main-border space-y-3 rounded-lg bg-background p-4">
          <Title className="text-center md:text-left">Никита Баранов</Title>
          <Text>
            Меня зовут Никита, и я фронтенд-разработчик,
            <span className="font-semibold"> специализирующийся на React и Next.js.</span> Я создаю
            качественные, красивые и эффективные веб-приложения с использованием современных
            подходов и технологий веб-разработки
          </Text>
          <Button
            asChild
            className="rounded-full text-base transition-all active:-translate-y-1 has-hover:hover:-translate-y-1 has-hover:hover:-rotate-2"
          >
            <a
              href="https://drive.google.com/file/d/1zhpk8mv5NTSnO8ttroQINfDLu45HJCnC/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Резюме
            </a>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
