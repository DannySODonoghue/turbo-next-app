import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turbo360",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          href="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/css/vendors/aos.css"
          rel="stylesheet"
        />
        <link
          href="https://d7k77ml4yhjyt.cloudfront.net/sites/marketing/public/www/style.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
