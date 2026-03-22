import type React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1a1f3d",
};

export const metadata: Metadata = {
  title: "تأمين السيارات | حماية شاملة بأفضل الأسعار",
  description:
    "خدمات تأمين السيارات الشاملة بأفضل الأسعار. تأمين ضد الغير، تأمين شامل، ومساعدة على الطريق على مدار الساعة",
  keywords:
    "تأمين السيارات, تأمين شامل, تأمين ضد الغير, تأمين المركبات, تأمين السيارة",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cn("bg-background", "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
