import type { Metadata } from "next";
import { Site } from "../site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about mobile dental hygiene visits, teeth whitening, safety, the Canadian Dental Care Plan, and private insurance.",
};

export default function FaqPage() {
  return <Site page="faq" />;
}
