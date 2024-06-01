import styles from "./page.module.scss";
import ImageLoader from "../components/ui/image-loader";
import Button from "../components/ui/button";

export default function AboutPage() {
  return (
    <div className="pageWrapper">
      <div className="pageWrapper__container">
        <div className={styles.about}>
          <ImageLoader
            src={"/images/about/background.png"}
            sizes={"100%"}
            style={{ width: "auto", height: "100%" }}
          />
        </div>
        <div className="pageWrapper__container_contentWrapper">
          <h1 className="pageWrapper__container_contentWrapper__title">
            ABOUT TCCF
          </h1>
          <div className="pageWrapper__container_contentWrapper__content">
            <p>
              「TCCF
              創意內容大會」是亞洲重要內容產業盛會，每年吸引全球多國買賣家齊聚交流洽商，共分成「PITCHING
              提案大會」、「MARKET 市場展」與「FORUM 國際論壇」三大單元。TCCF
              持續提供文化內容產業商務服務，媒合潛力 IP
              提案與國際資金，帶動全球專業人士商務交易與開發，交流實務經驗及產業未來趨勢，為內容產製與專業人才對接資源。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
