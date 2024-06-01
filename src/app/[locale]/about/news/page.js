"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import Card from "@/app/[locale]/components/ui/card";
import { useTranslations } from "next-intl";

export default function LatestPage() {
  const tagT = useTranslations("NewsTag");
  const t = useTranslations("NewsCard");
  const navT = useTranslations("Nav");
  const tabList = [
    {
      id: 1,
      name: "ALL",
      type: "all",
    },
    {
      id: 2,
      name: `# ${tagT("tag_news")}`,
      type: "news",
    },
    {
      id: 3,
      name: `# ${tagT("tag_announcement")}`,
      type: "announcement",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const newsCardData = [
    {
      id: 1,
      title: t("20240510_title"),
      time: "2024/05/10",
      linkText: "大會公告",
      link: "news/20240510",
      image: "/images/about/news/20240510/banner.jpg",
      tag: tagT("tag_news"),
      type: "news",
    },
    {
      id: 2,
      title: t("20240502_title"),
      time: "2024/05/02",
      linkText: "大會公告",
      link: "news/20240502",
      image: "/images/about/announcement/20240502/banner.jpeg",
      tag: tagT("tag_announcement"),
      type: "announcement",
    },
    {
      id: 3,
      title: t("20231110_title"),
      time: "2023/11/15",
      linkText: "大會公告",
      link: "news/20231115",
      image: "/images/about/news/20231115/banner.jpg",
      tag: tagT("tag_news"),
      type: "news",
    },
    {
      id: 4,
      title: t("20231110_title"),
      time: "2023/11/10",
      linkText: "大會公告",
      link: "news/20231110",
      image: "/images/about/news/20231110/banner.jpeg",
      tag: tagT("tag_news"),
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
            {navT("news")}
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
