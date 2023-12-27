import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE } from "~/config";
import "~/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = SITE.name;
const description = SITE.description;
const url = SITE.url;
const author = SITE.author;

export const metadata: Metadata = {
  title,
  description,
  applicationName: title,
  generator: "Next.js",
  authors: [{ name: author.name, url: author.site }],
  creator: author.name,
  publisher: author.name,
  metadataBase: new URL(url),
  keywords: [
    "Studen Management System",
    "Studen Information System",
    "SMS",
    "SIS",
    "Open Source",
    "Typescript",
    "Next.js",
  ],
  icons: [
    {
      rel: "icon",
      url: "/icons/favicon.ico",
    },
    {
      rel: "icon",
      url: "/icons/favicon.svg",
      type: "image/svg+xml",
    },
    {
      rel: "apple-touch-icon",
      url: "/icons/apple-touch-icon.png",
    },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    creator: author.twitterUserName,
    site: author.twitterUserName,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: `${url}/site.webmanifest`,
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
