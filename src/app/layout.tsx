import { Footer, Header } from "@/components";
import "./globals.css";
import styles from "./layout.module.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SearchProvider } from "@/contexts/SearchContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Test - Agile Content",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.container}`}>
        <SearchProvider>
          <Header />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
