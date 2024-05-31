import styles from "./page.module.scss";
import ImageLoader from "../components/ui/image-loader";
import Button from "../components/ui/button";

export default function AboutPage() {
  return (
    <div className="pageWrapper">
      <div className="pageWrapper__container">
        <div className={styles.about}>
          <ImageLoader
            src={"/images/pitching/background.png"}
            sizes={"100%"}
            style={{ width: "auto", height: "90%" }}
          />
        </div>
        <div className="pageWrapper__container_contentWrapper">
          <h1 className="pageWrapper__container_contentWrapper__title">
            PITCHING
          </h1>
          <div className="pageWrapper__container_contentWrapper__content">
            <p>
              「TCCF PITCHING
              提案大會」匯集國內外市場潛力內容提案，囊括長片、影集、動畫、紀錄片到出版、漫畫、原創故事概念，吸引來自全球內容產業專業人士參與，媒合提案與國際資源及資金，催生全球熱門作品。
            </p>

            <p>Project to Screen 企畫專場</p>

            <p>
              「Project to
              Screen企畫專場」囊括長片、劇集、動畫及紀錄片等類別，將由國際評審選出吸睛提案，同時「文策學院
              TAICCA School」
              與國際單位合作提案項目也將在此首次曝光。本專場將致力媒合潛力企畫與資金，促進內容對接國際市場，強化產業網絡連結，催生更多優秀影視作品。
            </p>

            <p>Story to Screen 故事專場</p>

            <p>
              「Project to
              Screen企畫專場」囊括長片、劇集、動畫及紀錄片等類別，將由國際評審選出吸睛提案，同時「文策學院
              TAICCA School」
              與國際單位合作提案項目也將在此首次曝光。本專場將致力媒合潛力企畫與資金，促進內容對接國際市場，強化產業網絡連結，催生更多優秀影視作品。
            </p>
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
