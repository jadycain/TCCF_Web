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

import { useTranslations } from "next-intl";

export default function News() {
  const titleT = useTranslations("Nav");
  const t = useTranslations("NewsCard");
  const tagT = useTranslations("NewsTag");
  const btnTag = useTranslations("actionButton");
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
      title: t("20240510_title"),
      time: "2024/05/10",
      link: "/about/news/20240510",
      image: "/images/about/news/20240510/banner.jpg",
      tag: tagT("tag_news"),
    },
    {
      id: 2,
      title: t("20240502_title"),
      time: "2024/05/02",
      link: "/about/news/20240502",
      image: "/images/about/announcement/20240502/banner.jpeg",
      tag: tagT("tag_announcement"),
    },
    {
      id: 3,
      title: t("20231115_title"),
      time: "2023/11/15",
      link: "/about/news/20231115",
      image: "/images/about/news/20231115/banner.jpg",
      tag: tagT("tag_news"),
    },
    {
      id: 4,
      title: t("20231110_title"),
      time: "2023/11/10",
      link: "/about/news/20231110",
      image: "/images/about/news/20231110/banner.jpeg",
      tag: tagT("tag_news"),
    },
  ];

  return (
    <section className={styles.newsSection}>
      <div className={styles.newsSection__container}>
        <h2 className={styles.newsSection__container_title}>
          {titleT("news")}
        </h2>
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
          <Button link={"/about/news"} linkText={btnTag("read_more")} />
        </div>
      </div>
    </section>
  );
}
