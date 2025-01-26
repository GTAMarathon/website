import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GTAM2025",
  description: "Join the fun and watch gtam!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
