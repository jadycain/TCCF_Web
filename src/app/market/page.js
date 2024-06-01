import styles from "./page.module.scss";
import ImageLoader from "../components/ui/image-loader";
import Button from "../components/ui/button";

export default function MarketPage() {
  const articleData = [
    {
      main: "「TCCF MARKET 市場展」聚焦國際影視內容與潛力 IP 的版權交易，擴大結合影視產業鏈，涵蓋內容開發、拍攝資源、影像技術等各領域業者與專業人士，探索商業合作與交流，拓展全球市場。",
      features: [
        {
          id: 1,
          title: "版權交易區",
          content:
            "「版權交易區」集結電影、電視、動畫、特效等多向領域的製作、發行、投資等專業人士，提供交流、版權交易平台。",
        },
        {
          id: 2,
          title: "協拍資源區",
          content:
            "「協拍資源區」集結國內各地影委會、影視基金會、協拍中心專區，提供國內外業者一站式洽詢協拍服務與資金、資源。",
        },
        {
          id: 3,
          title: "IP 轉影視",
          content:
            "「IP 轉影視」致力於催生更多優秀的臺灣出版影視化作品，提升內容轉譯力，協助出版業者聚焦觀眾市場與影視製作需求、掌握影視改編重點，更有效地推薦潛力改編文本給影視業者。",
        },
        {
          id: 4,
          title: "影像技術區",
          content:
            "「影像技術區」結合後製、特效、技術廠商，提供產業技術服務與交流。",
        },
        {
          id: 5,
          title: "國家館",
          content:
            "「國家館」邀請國家級機構來臺設館，促進與國際影視專業人士交流，增加跨國合作機會。",
        },
        {
          id: 6,
          title: "產業發佈會",
          content:
            "「產業發布會」分享產業年度最新動態與發展，展現內容產業競爭優勢，增加媒體曝光，創造話題與討論度。",
        },
      ],
    },
  ];

  return (
    <div className="pageWrapper">
      <div className="pageWrapper__container">
        <div className={styles.market}>
          <ImageLoader
            src={"/images/market/background.png"}
            sizes={"100%"}
            style={{ width: "auto", height: "100%" }}
          />
        </div>

        <div className="pageWrapper__container_contentWrapper">
          <h1 className="pageWrapper__container_contentWrapper__title">
            MARKET
          </h1>
          <div className="pageWrapper__container_contentWrapper__content">
            <p>
              「TCCF MARKET 市場展」聚焦國際影視內容與潛力 IP
              的版權交易，擴大結合影視產業鏈，涵蓋內容開發、拍攝資源、影像技術等各領域業者與專業人士，探索商業合作與交流，拓展全球市場。
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
          </div>

          <div className="pageWrapper__container_contentWrapper__buttonWrapper">
            <Button
              link={
                "https://docs.google.com/document/d/1XgJOLqvE8zO-CatRcO9Bg56sD9XKgzwtAKzphq6CBv4/edit?usp=sharing"
              }
              target="_blank"
              linkText={"徵展辦法"}
            />
            <Button
              link={"https://dash.taicca.tw/brd/tccf-me-2024/apply"}
              target="_blank"
              linkText={"我要報名"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
