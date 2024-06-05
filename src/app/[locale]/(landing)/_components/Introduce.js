"use client";

import styles from "./introduce.module.scss";
import { RxCube } from "react-icons/rx";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoStorefrontOutline } from "react-icons/io5";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Cube from "./Cube";
import Button from "../../components/ui/button";

export default function Introduce() {
  const [activeTab, setActiveTab] = useState(1);

  const t = useTranslations("IndexPage");
  const btnTag = useTranslations("ActionButton");

  const tablist = [
    {
      id: 1,
      name: t("about"),
      color: "#33A6B8",
      icon: <RxCube />,
      description: t("about_description"),
      link: "/about",
    },
    {
      id: 2,
      name: t("pitching"),
      color: "#14b68c",
      icon: <LiaChalkboardTeacherSolid />,
      description: t.rich("pitching_description", {
        br: () => <br />,
      }),
      link: "/pitching",
    },
    {
      id: 3,
      name: t("market"),
      color: "#f3794c",
      icon: <IoStorefrontOutline />,
      description: t("market_description"),
      link: "/market",
    },
    {
      id: 4,
      color: "#f290bb",
      name: t("forum"),
      icon: <HiOutlineChatAlt2 />,
      description: t("forum_description"),
      link: "/forum",
    },
  ];

  return (
    <section className={styles.introduceSection}>
      <div className={styles.introduceSection__container}>
        <div className={styles.introduceSection__container_image}>
          <Cube />
        </div>

        {tablist
          .filter((tab) => tab?.id === activeTab)
          .map((data) => (
            <div
              className={styles.introduceSection__container_intro}
              key={data.id}
            >
              <div className={styles.introduceSection__container_intro__title}>
                {data.name}
              </div>
              <p className={styles.introduceSection__container_intro__content}>
                {data.description}
              </p>
              <div
                className={
                  styles.introduceSection__container_intro__buttonWrapper
                }
              >
                <Button link={data.link} linkText={btnTag("read_more")} />
              </div>
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
                background: activeTab === tab?.id ? tab.color : "#fcfcfc",
                color: activeTab === tab?.id ? "white" : tab.color,
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
