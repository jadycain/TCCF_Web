import { Inter } from "next/font/google";
import "./globals.scss";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Noto_Sans_TC, Montserrat } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const notoSansTc = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-tc",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSansTc.variable} ${montserrat.variable} font-sans,`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
