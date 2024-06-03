"use client";

import styles from "./introduce.module.scss";
import ImageLoader from "@/app/[locale]/components/ui/image-loader";

import { RiApps2Line } from "react-icons/ri"; // 創意內容大會
import { GrCube } from "react-icons/gr"; // 提案大會
import { AiOutlineInbox } from "react-icons/ai"; // 市場展

import { RxCube } from "react-icons/rx"; // 提案大會
import { HiOutlineChatAlt2 } from "react-icons/hi"; // 國際論壇
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoStorefrontOutline } from "react-icons/io5";

import { useRef } from "react";
import { motion, useScroll, useAnimationFrame } from "framer-motion";
import { useState } from "react";

import { useTranslations } from "next-intl";

import Cube from "./Cube";

export default function Introduce() {
  const [activeTab, setActiveTab] = useState(1);

  console.log("test");

  const tablist = [
    {
      id: 1,
      name: "創意內容大會",
      color: "#33A6B8",
      icon: <RxCube />,
      description:
        "「TCCF 創意內容大會」是亞洲重要內容產業盛會，每年吸引全球多國買賣家齊聚交流洽商，共分成「PITCHING 提案大會」、「MARKET 市場展」與「FORUM 國際論壇」三大單元。TCCF持續提供文化內容產業商務服務，媒合潛力 IP提案與國際資金，帶動全球專業人士商務交易與開發，交流實務經驗及產業未來趨勢，為內容產製與專業人才對接資源。",
    },
    {
      id: 2,
      name: "提案大會",
      color: "#14b68c",
      icon: <LiaChalkboardTeacherSolid />,
      description:
        "TCCF PITCHING 提案大會」匯集國內外市場潛力內容提案，囊括長片、影集、動畫、紀錄片，乃至出版、漫畫、原創故事概念，吸引來自全球的內容產業人士參與，媒合提案與國際資源及資金，催生全球熱門作品。入選團隊將有機會競逐由文化內容策進院與其它單位所提供的冠名獎項和獎金。 <br></br><br></br>2024 年提案大會將分為「 企畫專場」及「 故事專場」兩大專場， 展示深具潛力的影視企畫與故事提案，成為國際產業人士尋找亞洲原創內容的最佳選擇！",
    },
    {
      id: 3,
      name: "市場展",
      color: "#f3794c",
      icon: <IoStorefrontOutline />,
      description:
        "「TCCF MARKET 市場展」聚焦國際影視內容與潛力 IP 的版權交易，擴大結合影視產業鏈，涵蓋內容開發、拍攝資源、影像技術等各領域業者與專業人士，探索商業合作與交流，拓展全球市場。",
    },
    {
      id: 4,
      color: "#f290bb",
      name: "國際論壇",
      icon: <HiOutlineChatAlt2 />,
      description:
        "「TCCF FORUM 國際論壇」將從國際合作面向切入，探討國際策略思維、產業跨國合作經驗、IP 內容跨域與如何當地化，以及關注國際市場新興趨勢。綜觀內容產業，規劃國際合製、IP 力量及重點趨勢觀察，藉此洞悉前線最完整的國際多元合作及產業脈動，提供產業人士關鍵思維。",
    },
  ];

  return (
    <section className={styles.introduceSection}>
      <div className={styles.introduceSection__container}>
        <div className={styles.introduceSection__container_image}>
          {/* <ImageLoader
            src={"/images/introduce/progress.png"}
            sizes={"100%"}
            style={{ width: "100%", height: "auto" }}
            alt={"logo"}
          /> */}
          <Cube />
        </div>

        {tablist
          .filter((tab) => tab.id === activeTab)
          .map((data) => (
            <div
              className={styles.introduceSection__container_intro}
              key={tab.id}
            >
              <div className={styles.introduceSection__container_intro__title}>
                {data.name}
              </div>
              <div
                className={styles.introduceSection__container_intro__content}
              >
                {data.description}
              </div>
              <div>查看更多</div>
            </div>
          ))}
      </div>

      <div className={styles.introduceSection__progressBarWrapper}>
        <ul
          className={
            styles.introduceSection__progressBarWrapper_progressBarList
          }
        >
          {tablist.map((tab) => (
            <li
              className={
                styles.introduceSection__progressBarWrapper_progressBarList__progressBarItem
              }
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? tab.color : "#fcfcfc",
                color: activeTab === tab.id ? "white" : tab.color,
              }}
            >
              <div
                className={
                  styles.introduceSection__progressBarWrapper_progressBarList__progressBarItem_icon
                }
              >
                {tab.icon}
              </div>
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
