import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit as requested/planned for modern look
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TD Cake & Bake | Premium Cakes in Pallebedda",
  description: "Delicious cakes delivered to Godakawela, Balawinna, Madampe, Kahawatta & more. Order Wedding, Birthday, and Custom cakes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
