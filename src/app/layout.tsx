import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Providers } from "./(Redux)/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Walk",
  description: "Modern Walk app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <div className="header">
            <h1 ><Link href={"/"}>Modern Walk</Link></h1>
          </div>
          <Providers>
            <div className="children">
            {children}
            </div>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
