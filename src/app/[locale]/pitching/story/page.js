import styles from "./page.module.scss";
import ImageLoader from "@/app/[locale]/components/ui/image-loader";
import Button from "@/app/[locale]/components/ui/button";
import { useTranslations } from "next-intl";

export default function MarketPage() {
  const t = useTranslations("StoryPage");
  const btnT = useTranslations("ActionButton");
  const articleData = [
    {
      main: "「TCCF MARKET 市場展」聚焦國際影視內容與潛力 IP 的版權交易，擴大結合影視產業鏈，涵蓋內容開發、拍攝資源、影像技術等各領域業者與專業人士，探索商業合作與交流，拓展全球市場。",
      features: [
        {
          id: 1,
          title: "出版文本專場 Fiction & Non-Fiction",
          content:
            "出版文本專場聚焦深具影視改編潛力的臺灣文本作品，邀請國內小說、散文、非文學等各式出版文本參與，在全球出版改編影視熱潮之中，透過 TCCF PITCHING 提案大會的平台，向國內外影視製作人、投資方，展示臺灣出版文本自由、豐富的故事魅力，以及深具市場潛力的創意能量，期待推動更多臺灣出版文本改編成影視作品。",
        },
        {
          id: 2,
          title: "漫畫專場 Comics",
          content:
            "今年擴增舉辦的漫畫專場，精確瞄準正找尋漫畫 IP 的影視製作人與投資方，邀請頁漫、條漫等臺灣原創漫畫共襄盛舉，展示該類型多元獨特的樣貌，以及影像化的高度潛力與延展性，期盼能讓更多臺灣漫畫跨域發展，改編成影視作品。",
        },
        {
          id: 3,
          title: "原創故事概念專場 Original Story Concept",
          content:
            "與首屆原創故事概念大賽串聯，原創故事概念專場提供大賽前五名作品絕佳的展示平台。匯集全華語地區的潛力創作者，帶來從未公開發表過的嶄新故事，為 TCCF PITCHING 提案大會注入更精采豐沛的創意能量。",
        },
        {
          id: 4,
          title: "Shoot the Book! TCCF 專場 Shoot the Book! TCCF",
          content:
            "與法國 SCELF 法語人出版協會攜手合作，國際知名的出版轉影視品牌 Shoot the Book! 將首次登陸臺灣！ 瞄準兼具影視改編與國際市場潛力的出版作品，Shoot the Book! TCCF 專場將同時展示臺灣與法國的出版轉影視提案，提供影視製作人與投資方更多元、國際化的故事內容，期盼能促成更多跨國合作的機會。",
        },
      ],
      list: [
        {
          id: 1,
          content:
            "報名提案：請先詳閱「2024 TCCF PITCHING 提案大會徵件報名須知」",
        },
        {
          id: 2,
          content:
            "徵件期間：2024 年 6 月 3 日（10:00）至 7 月 31 日（17:00）止（UTC/GMT +08:00）",
        },
        {
          id: 3,
          content: "報名費：今年度免收費",
        },
        {
          id: 4,
          content: "原創故事概念專場為特別活動專場，不提供報名",
        },
      ],
    },
  ];

  return (
    <div className="pageWrapper">
      <div className="pageWrapper__container">
        <div className={styles.market}>
          {/* <ImageLoader
            src={"/images/pitching/background.png"}
            sizes={"100%"}
            style={{ width: "450px", height: "auto" }}
          /> */}
        </div>
        <div className="pageWrapper__container_contentWrapper">
          <h1 className="pageWrapper__container_contentWrapper__title">
            {t("title")}
          </h1>
          <div className="pageWrapper__container_contentWrapper__content">
            <p>{t("paragraph")}</p>

            {[1, 2, 3, 4].map((key) => (
              <div
                className="pageWrapper__container_contentWrapper__content_paragraphWrapper"
                key={key}
              >
                <h2 className="pageWrapper__container_contentWrapper__content_paragraphWrapper__title">
                  {t(`features.feature_${key}.title`)}
                </h2>
                <div className="pageWrapper__container_contentWrapper__content_paragraphWrapper__paragraph">
                  {t(`features.feature_${key}.content`)}
                </div>
              </div>
            ))}

            <ul className="pageWrapper__container_contentWrapper__content_list">
              {[1, 2, 3, 4].map((key) => (
                <li
                  className="pageWrapper__container_contentWrapper__content_list__item"
                  key={key}
                >
                  {t(`list.list_item_${key}`)}
                </li>
              ))}
            </ul>

            <div className="pageWrapper__container_contentWrapper__buttonWrapper">
              <Button
                link={"/"}
                target="_blank"
                linkText={btnT("submission_requirements")}
              />
              <Button
                link={"https://dash.taicca.tw/brd/tccf-sm-2024/apply"}
                target="_blank"
                linkText={btnT("submission_website")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
