"use client";
import styles from "./page.module.scss";
import Button from "@/app/[locale]/components/ui/button";
import { FiFileText } from "react-icons/fi";
import { useTranslations } from "next-intl";

export default function MediaPage() {
  const navT = useTranslations("Nav");
  const btnT = useTranslations("ActionButton");
  const downloadData = [
    {
      id: 1,
      title: "PRESS KIT 2023",
      link: "https://drive.google.com/file/d/1L7VPxF0GSOz6Tee8acqBgdWY3FHVFUaf/view",
    },
    {
      id: 2,
      title: "PRESS KIT 2022",
      link: "https://drive.google.com/file/d/1gtZzUqF5HC8KhHsXJoOeuhP2_I-zMQEl/view",
    },
  ];

  return (
    <div className="pageWrapper">
      <div className="pageWrapper__container">
        <div className="pageWrapper__container_contentWrapper">
          <h1 className="pageWrapper__container_contentWrapper__title">
            {navT("press")}
          </h1>

          <div className="pageWrapper__container_contentWrapper__content">
            <div className={styles.media}>
              {downloadData.map((data) => (
                <div className={styles.media__downloadBox} key={data.id}>
                  <div className={styles.media__downloadBox_number}>
                    {`${data.id}`.padStart(2, 0)}
                  </div>
                  <div className={styles.media__downloadBox_container}>
                    <div
                      className={styles.media__downloadBox_container__content}
                    >
                      <div
                        className={
                          styles.media__downloadBox_container__content_icon
                        }
                      >
                        <FiFileText />
                      </div>

                      <div
                        className={
                          styles.media__downloadBox_container__content_title
                        }
                      >
                        {data.title}
                      </div>

                      <div
                        className={
                          styles.media__downloadBox_container__content_button
                        }
                      >
                        <Button
                          link={data.link}
                          linkText={btnT("download")}
                          target="_blank"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
