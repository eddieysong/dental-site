import type { Metadata } from "next";
import { Site } from "../site";

export const metadata: Metadata = {
  title: "Book an At-Home Visit",
  description: "Request a convenient at-home dental hygiene appointment with Kathy Liu.",
};

export default function BookingPage() {
  return <Site page="booking" />;
}
