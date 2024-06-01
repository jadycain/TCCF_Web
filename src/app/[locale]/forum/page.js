import styles from "./page.module.scss";
import ImageLoader from "../components/ui/image-loader";
import Button from "../components/ui/button";

export default function ForumPage() {
  return (
    <div className="pageWrapper">
      <div className="pageWrapper__container">
        <div className={styles.forum}>
          <ImageLoader
            src={"/images/forum/background.png"}
            sizes={"100%"}
            style={{ width: "auto", height: "100%" }}
          />
        </div>

        <div className="pageWrapper__container_contentWrapper">
          <h1 className="pageWrapper__container_contentWrapper__title">
            FORUM
          </h1>
          <div className="pageWrapper__container_contentWrapper__content">
            <p>
              「TCCF FORUM
              國際論壇」將從國際合作面向切入，探討國際策略思維、產業跨國合作經驗、IP
              內容跨域與如何當地化，以及關注國際市場新興趨勢。綜觀內容產業，規劃國際合製、IP
              力量及重點趨勢觀察，藉此洞悉前線最完整的國際多元合作及產業脈動，提供產業人士關鍵思維。
            </p>
          </div>

          <div className="pageWrapper__container_contentWrapper__buttonWrapper">
            <Button link={"/"} linkText={"徵展辦法"} />
          </div>
        </div>
      </div>
    </div>
  );
}
