// _document.tsx
import { Html, Head, Main, NextScript } from "next/document";
import { cn } from "~/lib/utils";
import { loadFonts } from "~/pages/FontLoader";

export default function Document() {
  const { fontSans, fontHeading } = loadFonts();

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
