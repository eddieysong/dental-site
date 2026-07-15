import type { Metadata } from "next";
import { Site } from "./site";

export const metadata: Metadata = {
  title: "HomeSmile Mobile Dental Hygiene",
  description:
    "At-home dental cleanings and teeth whitening from Kathy Liu. Canadian Dental Care Plan (CDCP) and major private insurance accepted.",
};

export default function HomePage() {
  return <Site page="home" />;
}
