import styles from "./page.module.scss";
import ImageLoader from "@/app/components/ui/image-loader";
import Button from "@/app/components/ui/button";

export default function MarketPage() {
  const articleData = [
    {
      main: "「TCCF MARKET 市場展」聚焦國際影視內容與潛力 IP 的版權交易，擴大結合影視產業鏈，涵蓋內容開發、拍攝資源、影像技術等各領域業者與專業人士，探索商業合作與交流，拓展全球市場。",
      features: [
        {
          id: 1,
          title: "長片專場 Feature Films",
          content:
            "長片專場開放全球團隊報名參加。入選企畫案之團隊，將可參與提案培訓工作坊，增加募資和促成國際合資合製的機會。",
        },
        {
          id: 2,
          title: "影集專場 Series",
          content:
            "影集專場開放全球團隊報名參加。入選企畫案之團隊，將可參與提案培訓工作坊，增加募資和促成國際合資合製的機會。",
        },

        {
          id: 3,
          title: "動畫長片及影集專場 Animation Films and Series",
          content:
            "動畫長片及影集專場開放全球團隊報名參加。入選企畫案之團隊，將可參與提案培訓工作坊，增加募資和促成國際合資合製的機會。",
        },
        {
          id: 4,
          title: "紀錄片及系列專場 Documentary Films and Series",
          content: "參與提案培訓工作坊，增加募資和促成國際合資合製的機會。",
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
          content: "報名費：每件新台幣 1,200 元整",
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
            Project to Screen 企畫專場
          </h1>
          <div className="pageWrapper__container_contentWrapper__content">
            <p>
              「Project to Screen
              企畫專場」囊括長片、劇集、動畫及紀錄片等類別，將由國際評審選出吸睛提案，「文策學院
              TAICCA School」
              與國際單位合作的提案項目也將在此首次曝光。入選團隊將有機會競逐「TAICCA
              AWARD：Best Project」獎項及獎金美金三萬元，更多獎項將陸續公布。
            </p>

            {articleData[0].features.map((data, index) => (
              <div
                className="pageWrapper__container_contentWrapper__content_paragraphWrapper"
                key={index}
              >
                <h2 className="pageWrapper__container_contentWrapper__content_paragraphWrapper__title">
                  {data.title}
                </h2>
                <div className="pageWrapper__container_contentWrapper__content_paragraphWrapper__paragraph">
                  {data.content}
                </div>
              </div>
            ))}

            <ul className="pageWrapper__container_contentWrapper__content_list">
              {articleData[0].list.map((data, index) => (
                <li
                  className="pageWrapper__container_contentWrapper__content_list__item"
                  key={index}
                >
                  {data.content}
                </li>
              ))}
            </ul>

            <div className="pageWrapper__container_contentWrapper__buttonWrapper">
              <Button link={"/"} target="_blank" linkText={"徵件辦法"} />
              <Button
                link={"https://dash.taicca.tw/brd/tccf-sm-2024/apply"}
                target="_blank"
                linkText={"我要報名"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
