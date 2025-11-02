import type { Metadata, Viewport } from "next";

import StyledComponentsRegistry from "@/lib/styles-registry";

import { ClientProvider } from "@/providers";
import { Toaster } from "sonner";

const siteUrl = "https://svgjsx.dev";
const siteName = "SVGJSX";
const appTitle = "SVGJSX | Foundation UI";
const appDescription =
  "Powerful CLI built for modern product teams to convert and bundle SVG files into component libraries";

export const metadata: Metadata = {
  title: {
    default: appTitle,
    template: "%s | SVGJSX",
  },

  description: appDescription,
  applicationName: siteName,

  keywords: [
    "Foundation UI",
    "CLI",
    "Headless Design System",
    "Icons generator",
    "Icons library",
    "UI components",
    "React icon library",
    "Nextjs icon library",
  ],

  authors: [{ name: "Nicolas Nunes", url: "https://github.com/nnsncl" }],
  creator: "Foundation UI",
  publisher: "Foundation UI",
  generator: "Next.js",

  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },

  category: "technology",
  classification: "Software",
  referrer: "strict-origin-when-cross-origin",

  // Open Graph
  openGraph: {
    title: appTitle,
    description: appDescription,
    url: siteUrl,
    siteName,
    images: [],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: appTitle,
    description: appDescription,
    images: [],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <html lang="en">
        <ClientProvider>
          <body>
            <div id="portal-container" />
            <Toaster
              toastOptions={{
                style: {
                  borderRadius: "var(--measurement-medium-30)",
                  borderColor: "var(--font-color-alpha-10)",
                  background: "var(--body-color)",
                  color: "var(--font-color)",
                  fontSize: "var(--fontsize-medium-10)",
                },
              }}
            />
            {children}
          </body>
        </ClientProvider>
      </html>
    </StyledComponentsRegistry>
  );
}
