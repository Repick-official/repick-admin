"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
//const inter = Inter({ subsets: ["latin"] });
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <title>Repick Admin</title>
      </head>
      <body className="flex flex-row">
        <RecoilRoot>
          <Navigation />
          <div>{children}</div>
        </RecoilRoot>
      </body>
    </html>
  );
}
