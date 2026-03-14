import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guglex Technologies - Innovating Tomorrow's Technology Today",
  description: "Transform your business with cutting-edge technology solutions. Web development, mobile apps, cloud solutions, AI/ML, and more. 7 years of experience, 22 projects completed.",
  keywords: "technology solutions, web development, mobile apps, cloud services, AI, machine learning, software development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
