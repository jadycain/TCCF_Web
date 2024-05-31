"use client";
import { useState } from "react";
import styles from "./page.module.scss";

export default function MediaPage() {
  const downloadData = [
    {
      id: 1,
      title: "PRESS KIT 2023",
      link: "/",
    },
    {
      id: 2,
      title: "PRESS KIT 2022",
      link: "/",
    },
  ];

  return (
    <div className="pageWrapper">
      <div className="pageWrapper__container">
        <div className="pageWrapper__container_contentWrapper">
          <h1 className="pageWrapper__container_contentWrapper__title">
            媒體專區
          </h1>

          <div className="pageWrapper__container_contentWrapper__content">
            <div className={styles.media}>
              {downloadData.map((data) => (
                <div className={styles.media__downloadBox}>
                  <div className={styles.media__downloadBox_container}>
                    <div
                      className={styles.media__downloadBox_container__content}
                    >
                      <div
                        className={
                          styles.media__downloadBox_container__content_number
                        }
                      >
                        {`${data.id}`.padStart(2, 0)}
                      </div>
                      <div
                        className={
                          styles.media__downloadBox_container__content_title
                        }
                      >
                        {data.title}
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
