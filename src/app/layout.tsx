import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adrian Espinoza",
  description: "Personal website of Adrian Espinoza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased root-background text-white`}>
        {children}
      </body>
    </html>
  );
}
