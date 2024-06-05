import styles from "./page.module.scss";
import ImageLoader from "../components/ui/image-loader";
import { useTranslations } from "next-intl";

export default function ForumPage() {
  const t = useTranslations("ForumPage");
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
            {t("title")}
          </h1>
          <div className="pageWrapper__container_contentWrapper__content">
            <p>{t("paragraph")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
