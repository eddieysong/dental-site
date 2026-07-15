import type { Metadata } from "next";
import { Site } from "../site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about mobile dental hygiene visits, at-home setup, safety, and CDCP eligibility.",
};

export default function FaqPage() {
  return <Site page="faq" />;
}
