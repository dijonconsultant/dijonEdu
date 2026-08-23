import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Dijon Consultants | Study Abroad", template: "%s | Dijon Consultants" },
  description: "Personal guidance for your student visa and study abroad journey."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main><ScrollReveal />{children}</main>
        <Footer />
      </body>
    </html>
  );
}
