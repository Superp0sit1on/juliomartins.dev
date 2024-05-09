import type { Metadata } from "next";
import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/vars.css";
import "@/styles/typography.css";

import { Footer, Header, ThemeProvider } from "@/components";
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Júlio Martins",
  description: "Fullstack Developer, based in Brazil.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;
