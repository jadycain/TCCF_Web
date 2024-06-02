import styles from "./page.module.scss";
import ImageLoader from "../components/ui/image-loader";
import Button from "../components/ui/button";
import { useTranslations } from "next-intl";
import parse from "html-react-parser";
import { FormattedMessage } from "react-intl";

export default function PitchingPage() {
  const t = useTranslations("PitichingPage");

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
            {t("title")}
          </h1>
          <div className="pageWrapper__container_contentWrapper__content">
            <p>
              {t.rich("paragraph", {
                br: () => <br />,
              })}
            </p>
            <ul className="pageWrapper__container_contentWrapper__content_list">
              <li className="pageWrapper__container_contentWrapper__content_list__title">
                {t("list_title")}
              </li>
              {[1, 2, 3, 4].map((key) => (
                <li
                  className="pageWrapper__container_contentWrapper__content_list__item"
                  key={key}
                >
                  {t(`list.list_item_${key}`)}
                </li>
              ))}
            </ul>

            <div className="pageWrapper__container_contentWrapper__content_notice">
              {[1, 2].map((key) => (
                <span
                  className="pageWrapper__container_contentWrapper__content_notice__item"
                  key={key}
                >
                  {t(`notice.notice_item_${key}`)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
