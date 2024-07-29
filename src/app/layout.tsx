import { Unbounded, Montserrat } from "next/font/google";

import { ThemeProvider } from "@/providers";

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
    <html lang="ru" className={`${unbounded.variable} ${montserrat.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
