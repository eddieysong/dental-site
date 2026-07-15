import type { Metadata } from "next";
import { Site } from "./site";

export const metadata: Metadata = {
  title: "At-Home Dental Hygiene",
  description:
    "Gentle, professional mobile dental hygiene care from Kathy Liu, with 10+ years of experience and CDCP-eligible services.",
};

export default function HomePage() {
  return <Site page="home" />;
}
