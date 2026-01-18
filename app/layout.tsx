import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import { DeveloperModeProvider } from "@/context/DeveloperModeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Ayaz | Full-Stack & Mobile Developer",
  description: "Full-stack and mobile app developer skilled in Next.js, Tailwind CSS, Strapi, and Flutter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        <DeveloperModeProvider>
          <CustomCursor />
          {children}
        </DeveloperModeProvider>
      </body>
    </html>
  );
}
