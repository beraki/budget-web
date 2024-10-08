import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../../styles/globals.css";
import { cn } from "../../lib/utils";
import { SidebarContainer } from "../../components/sidebar.component";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
      <body
        className={cn(
          "min-h-screen bg-gray-50 font-sans antialiased",
          fontSans.variable,
        )}
      >
        <main className="flex h-screen w-full">
          <SidebarContainer />
          {children}
        </main>
      </body>
    </html>
  );
}
