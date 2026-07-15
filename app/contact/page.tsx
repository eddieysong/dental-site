import type { Metadata } from "next";
import { Site } from "../site";

export const metadata: Metadata = {
  title: "Contact Kathy",
  description: "Ask about the service area or get help choosing a mobile dental hygiene appointment.",
};

export default function ContactPage() {
  return <Site page="contact" />;
}
