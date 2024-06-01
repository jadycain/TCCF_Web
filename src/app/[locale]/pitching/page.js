import styles from "./page.module.scss";
import ImageLoader from "../components/ui/image-loader";
import Button from "../components/ui/button";

export default function PitchingPage() {
  return (
    <div className="pageWrapper">
      <div className="pageWrapper__container">
        <div className={styles.pitching}>
          <ImageLoader
            src={"/images/pitching/background.png"}
            sizes={"100%"}
            style={{ width: "auto", height: "100%" }}
          />
        </div>

        <div className="pageWrapper__container_contentWrapper">
          <h1 className="pageWrapper__container_contentWrapper__title">
            PITCHING
          </h1>
          <div className="pageWrapper__container_contentWrapper__content">
            <p>
              「TCCF PITCHING
              提案大會」匯集國內外市場潛力內容提案，囊括長片、影集、動畫、紀錄片，乃至出版、漫畫、原創故事概念，吸引來自全球的內容產業人士參與，媒合提案與國際資源及資金，催生全球熱門作品。入選團隊將有機會競逐由文化內容策進院與其它單位所提供的冠名獎項和獎金。
            </p>

            <p>
              2024 年提案大會將於 11 月 5 日至 8 日於南港展覽館二館 7
              樓舉行，分為「 企畫專場」及「 故事專場」兩大專場，
              展示深具潛力的影視企畫與故事提案，成為國際產業人士尋找亞洲原創內容的最佳選擇！
            </p>
            <p>
              所有入選提案，將以工作坊的形式提供專業提案培訓，協助入選團隊掌握提案技巧，並經由公開提案演練，快速累積實戰經驗，大幅提升獲得買家與投資方青睞的機會。
            </p>

            <p></p>
          </div>

          <div className="pageWrapper__container_contentWrapper__buttonWrapper">
            <Button link={"/"} linkText={"徵展辦法"} />
            <Button link={"/"} linkText={"我要報名"} />
          </div>
        </div>
      </div>
    </div>
  );
}
