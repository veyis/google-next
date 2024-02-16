import { Inter } from "next/font/google";
import "./globals.css";
import HomeHeader from "@/components/HomeHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone",
  description: "A clone of Google's homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeHeader />
        {children}
      </body>
    </html>
  );
}
