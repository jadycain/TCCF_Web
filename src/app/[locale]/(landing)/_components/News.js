"use client";

import styles from "./news.module.scss";
import Card from "@/app/[locale]/components/ui/card";
import useWindowSize from "@/app/[locale]/(tool)/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import Button from "@/app/[locale]/components/ui/button";
import { useEffect, useState } from "react";

export default function News() {
  const windowSize = useWindowSize();
  const [slideSize, setSlideSize] = useState(3);
  const refreshViewHeight = () => {
    const vh = windowSize.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    refreshViewHeight();

    if (windowSize.width <= 430) {
      setSlideSize(1);
    } else if (windowSize.width <= 1024) {
      setSlideSize(2);
    } else {
      setSlideSize(3);
    }
  }, [windowSize.width]);

  const newsCardData = [
    {
      id: 1,
      title:
        "「TCCF PITCHING 提案大會」總投資金額上看新台幣一億 全球徵件六月起跑催生影視佳作",
      time: "2024/05/10",
      linkText: "大會公告",
      link: "about/news/20240510",
      image: "/images/about/news/20240510/banner.jpg",
      tag: "大會新聞",
    },
    {
      id: 2,
      title: "2024 TCCF 創意內容大會日期與活動單元公佈",
      time: "2024/05/02",
      linkText: "大會公告",
      link: "about/news/20240502",
      image: "/images/about/announcement/20240502/banner.jpeg",
      tag: "大會公告",
    },
    {
      id: 3,
      title:
        "「2023 TCCF 創意內容大會」圓滿成功！ 法日韓美星等 29 國專業人士齊聚臺北預估延伸交易金額超越去年成績",
      time: "2023/11/15",
      linkText: "大會公告",
      link: "about/news/20231115",
      image: "/images/about/news/20231115/banner.jpg",
      tag: "大會新聞",
    },
    {
      id: 4,
      title:
        "2023 TCCF 提案大會《雪水消融的季節》、《Mother Maybe》勇奪 3 萬美金雙首獎",
      time: "2023/11/10",
      linkText: "大會公告",
      link: "about/news/20231110",
      image: "/images/about/news/20231110/banner.jpeg",
      tag: "大會新聞",
    },
  ];

  return (
    <section className={styles.newsSection}>
      <div className={styles.newsSection__container}>
        <h2 className={styles.newsSection__container_title}>最新消息</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={slideSize}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {newsCardData.map((news) => (
            <SwiperSlide key={news.id}>
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
