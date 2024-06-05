import { Inter } from "next/font/google";
import "./globals.scss";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Noto_Sans_TC, Montserrat, Poppins } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "TCCF | YOUR BEST PARTNER IN ASIA",
  description:
    "「2024 TCCF 創意內容大會」是亞洲重要內容產業盛會，每年吸引全球多國買賣家齊聚交流洽商，共分成「PITCHING 提案大會」、「MARKET 市場展」與「FORUM 國際論壇」三大單元，將於 11 月 5 日 至 8 日於南港展覽館二館 7 樓舉行。",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  console.log(messages);
  return (
    <html lang={locale}>
      <body
        className={`${notoSansTc.variable} ${montserrat.variable} ${poppins.variable} font-sans,`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
