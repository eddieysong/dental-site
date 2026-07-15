import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", base).toString();

  return {
    metadataBase: base,
    title: {
      default: "HomeSmile | Mobile Dental Hygiene",
      template: "%s | HomeSmile Mobile Dental Hygiene",
    },
    description:
      "Professional at-home dental cleanings and teeth whitening. Canadian Dental Care Plan (CDCP) and major private insurance accepted.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "A fresh, healthy smile—without leaving home.",
      description:
        "At-home dental cleanings and teeth whitening from Kathy Liu. Canadian Dental Care Plan (CDCP) and major private insurance accepted.",
      type: "website",
      locale: "en_CA",
      alternateLocale: "zh_CA",
      siteName: "HomeSmile Mobile Dental Hygiene",
      images: [{ url: socialImage, width: 900, height: 473, alt: "HomeSmile Mobile Dental Hygiene" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "HomeSmile Mobile Dental Hygiene",
      description: "Professional cleaning and whitening, right at home.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
