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
      default: "Kathy Liu | Mobile Dental Hygiene",
      template: "%s | Kathy Liu Mobile Dental Hygiene",
    },
    description:
      "Professional dental hygiene care in the comfort of your home. 10+ years of experience and CDCP-eligible services.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "A fresh, healthy smile—without leaving home.",
      description:
        "Mobile dental hygiene care from Kathy Liu. 10+ years of experience, CDCP-eligible, and delivered at home.",
      type: "website",
      locale: "en_CA",
      alternateLocale: "zh_CA",
      siteName: "Kathy Liu Mobile Dental Hygiene",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Kathy Liu Mobile Dental Hygiene" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Kathy Liu Mobile Dental Hygiene",
      description: "Professional dental hygiene care, right at home.",
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
