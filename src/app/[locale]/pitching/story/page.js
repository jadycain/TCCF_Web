import styles from "./page.module.scss";
import ImageLoader from "@/app/[locale]/components/ui/image-loader";
import Button from "@/app/[locale]/components/ui/button";
import { useTranslations } from "next-intl";

export default function MarketPage() {
  const t = useTranslations("StoryPage");
  const btnT = useTranslations("ActionButton");

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
