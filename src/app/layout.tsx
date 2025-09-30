import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Neal Anderson – Space Portfolio",
  description: "Creative Technologist | Full-Stack Builder | Floating Card Interface",
  keywords: ["portfolio", "developer", "full-stack", "creative technologist", "space", "3D", "floating cards"],
  authors: [{ name: "Neal Anderson" }],
  openGraph: {
    title: "Neal Anderson – Space Portfolio",
    description: "Creative Technologist | Full-Stack Builder | Floating Card Interface",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
