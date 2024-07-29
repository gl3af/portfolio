import { Unbounded, Montserrat } from "next/font/google";

import { ThemeProvider } from "@/providers";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { Box } from "@/shared/ui";

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
    <Box
      as="html"
      lang="ru"
      className={`${unbounded.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <Box as="body">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Box className="container grid min-h-screen grid-rows-[auto_1fr_auto] pt-4">
            <Header />
            {children}
            <Footer />
          </Box>
        </ThemeProvider>
      </Box>
    </Box>
  );
}
