import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "./page";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  // metadataBase: new URL("https://itzmylink.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - ProfileHub`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: "Murtaxa Baig",
      url: "https://github.com/Murtaxa-Baig",
    },
  ],
  creator: "Murtaxa Biag",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@murtaxa",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <main className="min-h-screen w-screen overflow-hidden ">
            <Providers>{children}</Providers>
          </main>
        </body>
      </html>
  );
}
