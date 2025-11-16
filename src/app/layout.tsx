import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import FontLoader from "@/components/FontLoader";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Guglex Technologies - Innovating Tomorrow's Technology Today",
  description: "Transform your business with cutting-edge technology solutions. Web development, mobile apps, cloud solutions, AI/ML, and more. 7 years of experience, 22 projects completed.",
  keywords: "technology solutions, web development, mobile apps, cloud services, AI, machine learning, software development",
  other: {
    'google-fonts': 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased">
        <FontLoader />
        {children}
      </body>
    </html>
  );
}
