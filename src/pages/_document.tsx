import { Html, Head, Main, NextScript } from "next/document";
import { cn } from "~/lib/utils";

import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
