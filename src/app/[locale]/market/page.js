import styles from "./page.module.scss";
import ImageLoader from "../components/ui/image-loader";
import Button from "../components/ui/button";
import { useTranslations } from "next-intl";

export default function MarketPage() {
  const t = useTranslations("MarketPage");
  const btnT = useTranslations("ActionButton");
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
            {t("title")}
          </h1>
          <div className="pageWrapper__container_contentWrapper__content">
            <p>{t("paragraph")}</p>

            {[1, 2, 3, 4, 5, 6].map((key) => (
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
          </div>

          <div className="pageWrapper__container_contentWrapper__buttonWrapper">
            <Button
              link={
                "https://docs.google.com/document/d/1XgJOLqvE8zO-CatRcO9Bg56sD9XKgzwtAKzphq6CBv4/edit?usp=sharing"
              }
              target="_blank"
              linkText={btnT("call_for_exhibitors")}
            />
            <Button
              link={"https://dash.taicca.tw/brd/tccf-me-2024/apply"}
              target="_blank"
              linkText={btnT("submission_website")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
