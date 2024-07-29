import { Unbounded, Montserrat } from "next/font/google";

import { ThemeProvider } from "@/providers";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

import type { Metadata } from "next";

import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-unbounded",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Никита Баранов - Frontend-разработчик",
  description:
    "Никита Баранов - Frontend-разработчик, специализирующийся на React и Next.js с коммерческим опытом более двух лет",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container grid min-h-screen grid-rows-[auto_1fr_auto] pt-4">
            <Header />
            <main className="flex flex-col gap-4 py-5 md:gap-8 lg:gap-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
