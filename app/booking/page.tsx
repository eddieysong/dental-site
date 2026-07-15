import type { Metadata } from "next";
import { Site } from "../site";

export const metadata: Metadata = {
  title: "Book an At-Home Visit",
  description: "Request an at-home dental cleaning or teeth whitening appointment with Kathy Liu at HomeSmile.",
};

export default function BookingPage() {
  return <Site page="booking" />;
}
