import type { Metadata, Viewport } from "next";
import { Lora, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "CareLog — Mobile Landing",
  description: "CareLog mobile landing page",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${outfit.variable} bg-cream text-ink antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
