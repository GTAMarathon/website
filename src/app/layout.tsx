import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GTAM2025",
  description: "Watch GTAM",
};

export const viewport = 'width=device-width, initial-scale=1';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}