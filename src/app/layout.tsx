import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talinspelningar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="layoutContainer">
          <div className="backgroundOverlay" />
          <Navbar />
          <main
            className="pageContent"
            style={{
              marginTop: "15vh",
              textAlign: "center",
              fontSize: "2rem",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
