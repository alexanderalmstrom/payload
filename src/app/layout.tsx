import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payload",
  description: "Payload CMS with Next.js 14 App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
