import type { Metadata } from "next";
import { Inter, Questrial, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Questrial({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trishane Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </body>
    </html>
  );
}
