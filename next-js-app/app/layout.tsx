import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Simple E-Commerce App",
  description: "A simple e-commerce application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
