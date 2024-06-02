import styles from "./page.module.scss";
import { useTranslations } from "next-intl";

export default function ExhibitorsPage() {
  const t = useTranslations("ExhibitorsPage");

  return (
    <div className="pageWrapper">
      <div className="pageWrapper__container">
        <div className="pageWrapper__container_contentWrapper">
          <h1 className="pageWrapper__container_contentWrapper__title">
            {t("title")}
          </h1>
          <div className="pageWrapper__container_contentWrapper__content">
            <p>
              {t.rich("paragraph_1", {
                br: () => <br />,
              })}
            </p>
            <h3 className="pageWrapper__container_contentWrapper__content_listMainTitle">
              {t("paragraph_title_1")}
            </h3>
            <ul className="pageWrapper__container_contentWrapper__content_list">
              <li>{t("list_1.list_item_1")}</li>
              <li>{t("list_1.list_item_2")}</li>
            </ul>
            <ul className="pageWrapper__container_contentWrapper__content_list">
              <div className="pageWrapper__container_contentWrapper__content_list__title">
                {t("list_2.title")}
              </div>
              <li>{t("list_2.list_item_1")}</li>
              <li>{t("list_2.list_item_2")}</li>
            </ul>
            <ul className="pageWrapper__container_contentWrapper__content_list">
              <div className="pageWrapper__container_contentWrapper__content_list__title">
                {t("list_3.title")}
              </div>
              <li>{t("list_3.list_item_1")}</li>
              <li>{t("list_3.list_item_2")}</li>
              <li>{t("list_3.list_item_3")}</li>
              <li>{t("list_3.list_item_4")}</li>
              <li>{t("list_3.list_item_5")}</li>
              <li>{t("list_3.list_item_6")}</li>
            </ul>
            <ul className="pageWrapper__container_contentWrapper__content_list">
              <div className="pageWrapper__container_contentWrapper__content_list__title">
                {t("list_4.title")}
              </div>
              <li>{t("list_4.list_item_1")}</li>
              <li>{t("list_4.list_item_2")}</li>
              <li>{t("list_4.list_item_3")}</li>
            </ul>
            <p>
              {t.rich("paragraph_2", {
                br: () => <br />,
              })}
            </p>
            <ul className="pageWrapper__container_contentWrapper__content_noneList ">
              <li>{t("list_5.list_item_1")}</li>
              <li>{t("list_5.list_item_2")}</li>
              <li>{t("list_5.list_item_3")}</li>
              <li>{t("list_5.list_item_4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
