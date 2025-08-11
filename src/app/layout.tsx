import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WishWell - AI-Powered Birthday Reminders",
  description: "Never miss a birthday again with personalized AI voice reminders and smart gift suggestions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
