import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/context/Providers";
import Providers from "@/context/Providers";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className={inter.className}>
          <Header />
          {children}
          {/* <Footer /> */}
        </body>
      </Providers>
    </html>
  );
}
