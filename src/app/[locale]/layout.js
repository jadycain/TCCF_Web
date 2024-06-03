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
    "2023年TCCF將於11月7日至11月12日於松山文創園區舉辦，共分「Market」、「Pitching」與「Innovations」三大單元。「Market」提供線上線下作品展示空間與交易洽商服務，持續推動臺灣影視作品與潛力IP進入國際通路，今年更首度邀請影視與未來內容產業相關業者，提供國內外與會者更多的產製鏈技術選擇。",
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
