"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import Card from "@/app/components/ui/card";

export default function LatestPage() {
  const tabList = [
    {
      id: 1,
      name: "ALL",
      type: "all",
    },
    {
      id: 2,
      name: "# 大會新聞",
      type: "news",
    },
    {
      id: 3,
      name: "# 大會公告",
      type: "announcement",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const newsCardData = [
    {
      id: 1,
      title:
        "「TCCF PITCHING 提案大會」總投資金額上看新台幣一億 全球徵件六月起跑催生影視佳作",
      time: "2024/05/10",
      linkText: "大會公告",
      link: "news/20240510",
      image: "/images/about/news/20240510/banner.jpg",
      tag: "大會新聞",
      type: "news",
    },
    {
      id: 2,
      title: "2024 TCCF 創意內容大會日期與活動單元公佈",
      time: "2024/05/02",
      linkText: "大會公告",
      link: "news/20240502",
      image: "/images/about/announcement/20240502/banner.jpg",
      tag: "大會公告",
      type: "announcement",
    },
    {
      id: 3,
      title:
        "「2023 TCCF 創意內容大會」圓滿成功！ 法日韓美星等 29 國專業人士齊聚臺北預估延伸交易金額超越去年成績",
      time: "2023/11/15",
      linkText: "大會公告",
      link: "news/20231115",
      image: "/images/about/news/20231115/banner.jpg",
      tag: "大會新聞",
      type: "news",
    },
    {
      id: 4,
      title:
        "2023 TCCF 提案大會《雪水消融的季節》、《Mother Maybe》勇奪 3 萬美金雙首獎",
      time: "2023/11/10",
      linkText: "大會公告",
      link: "news/20231110",
      image: "/images/about/news/20231110/banner.jpeg",
      tag: "大會新聞",
      type: "news",
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="pageWrapper">
      <div className="pageWrapper__container">
        <div className="pageWrapper__container_contentWrapper">
          <h1 className="pageWrapper__container_contentWrapper__title">
            最新消息
          </h1>

          <ul className={styles.latest__tabList}>
            {tabList.map((tab) => (
              <li
                key={tab.id}
                className={styles.latest__tabList_tabItem}
                onClick={() => handleTabClick(tab.type)}
                style={{
                  background: activeTab === tab.type ? "#171717" : "white",
                  color: activeTab === tab.type ? "white" : "#171717",
                }}
              >
                {tab.name}
              </li>
            ))}
          </ul>

          <div className="pageWrapper__container_contentWrapper__content">
            <div className={styles.latest__cardWrapper}>
              {activeTab === "all"
                ? newsCardData.map((news) => <Card {...news} key={news.id} />)
                : newsCardData
                    .filter((news) => news.type === activeTab)
                    .map((news) => <Card {...news} key={news.id} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
