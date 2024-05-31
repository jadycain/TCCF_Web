"use client";

import styles from "./news.module.scss";
import Card from "@/app/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import Button from "@/app/components/ui/button";

export default function News() {
  const newsCardData = [
    {
      id: 1,
      title:
        "「TCCF PITCHING 提案大會」總投資金額上看新台幣一億 全球徵件六月起跑催生影視佳作",
      time: "2024/05/10",
      linkText: "大會公告",
      link: "about/news/20240510",
      image: "/images/news/news_1.jpg",
      tag: "大會新聞",
    },
    {
      id: 2,
      title: "2024 TCCF 創意內容大會日期與活動單元公佈",
      time: "2024/05/02",
      linkText: "大會公告",
      link: "about/news/20240502",
      image: "/images/news/news_2.png",
      tag: "大會公告",
    },
    {
      id: 3,
      title:
        "「2023 TCCF 創意內容大會」圓滿成功！ 法日韓美星等 29 國專業人士齊聚臺北預估延伸交易金額超越去年成績",
      time: "2023/11/15",
      linkText: "大會公告",
      link: "about/news/20231115",
      image: "/images/news/news_3.png",
      tag: "大會新聞",
    },
    {
      id: 4,
      title:
        "2023 TCCF 提案大會《雪水消融的季節》、《Mother Maybe》勇奪 3 萬美金雙首獎",
      time: "2023/11/10",
      linkText: "大會公告",
      link: "about/news/20231110",
      image: "/images/news/news_4.jpeg",
      tag: "大會新聞",
    },
  ];

  return (
    <section className={styles.newsSection}>
      <div className={styles.newsSection__container}>
        <h2 className={styles.newsSection__container_title}>最新消息</h2>
        <Swiper spaceBetween={30} slidesPerView={3} modules={[Pagination]}>
          {newsCardData.map((news) => (
            <SwiperSlide>
              <Card {...news} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.newsSection__container_buttonWrapper}>
          <Button link={"/about/news"} linkText={"查看更多"} />
        </div>
      </div>
    </section>
  );
}
