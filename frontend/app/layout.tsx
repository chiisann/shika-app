import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHIKA-FINDER",
  description: "Find your perfect shika",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${robotoMono.className}`}>
        {children}
      </body>
    </html>
  );
}
