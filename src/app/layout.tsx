import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main
          style={{ marginTop: "15vh", textAlign: "center", fontSize: "2rem" }}
        >
          <AppRouterCacheProvider>{children} </AppRouterCacheProvider>
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
