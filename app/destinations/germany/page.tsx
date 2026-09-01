import { DestinationPage } from "@/components/destination-page";

export default function GermanyPage() {
  return <DestinationPage country="Germany" overview="Germany offers a research-led higher-education environment, internationally minded cities and a wide choice of study pathways for students planning their future in Europe." reasons={["Well-regarded universities with a strong focus on research and innovation.", "A broad academic offering across engineering, science, business and the arts.", "International student communities in cities throughout the country.", "A central European location with excellent connections across the region."]} fields={["Engineering & Technology", "Computer Science & Data", "Business & Economics", "Natural Sciences", "Design & Architecture"]} />;
}