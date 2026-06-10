import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

const ralewayHeading = Raleway({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "HoodieGo | Premium Hoodies",
  description:
    "Discover our premium hoodie collection. Comfort, style and quality for your wardrobe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        ralewayHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Suspense>
          <NuqsAdapter
            defaultOptions={{
              clearOnDefault: false,
            }}
          >
            {children}
          </NuqsAdapter>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
