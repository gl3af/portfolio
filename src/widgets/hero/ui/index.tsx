import Image from "next/image";

import { Text, Title } from "@/shared/ui";

export function Hero() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid place-items-center gap-4 md:grid-cols-[1fr_3fr] md:gap-8">
        <div className="border-primary relative aspect-square w-full max-w-xs overflow-hidden rounded-lg border-2 md:max-w-md md:-rotate-2">
          <Image src="/me.webp" alt="Никита Баранов" fill priority />
        </div>
        <div className="border-primary bg-background space-y-3 rounded-lg border p-4">
          <Title className="text-center md:text-left">Никита Баранов</Title>
          <Text>
            Меня зовут Никита, и я фронтенд-разработчик,
            <span className="font-semibold">специализирующийся на React и Next.js.</span> Я создаю
            качественные, красивые и эффективные веб-приложения с использованием современных
            подходов и технологий веб-разработки
          </Text>
        </div>
      </div>
    </div>
  );
}
