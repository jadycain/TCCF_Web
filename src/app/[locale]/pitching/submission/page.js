import styles from "./page.module.scss";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/navigation";

export default function SubmissionPage() {
  const t = useTranslations("SubmissionPage");

  return (
    <div className="pageWrapper">
      {console.log("2222")}
      <div className="pageWrapper__container">
        <div className="pageWrapper__container_contentWrapper">
          <h1 className="pageWrapper__container_contentWrapper__title">
            {t("title")}
          </h1>
          <div className="pageWrapper__container_contentWrapper__content">
            <h3 className="pageWrapper__container_contentWrapper__content_listMainTitle">
              {t("paragraph_title_1")}
            </h3>
            <p>
              {t.rich("paragraph_1", {
                br: () => <br />,
              })}
            </p>
            <h3 className="pageWrapper__container_contentWrapper__content_listMainTitle">
              {t("paragraph_title_2")}
            </h3>
            {useLocale() === "zh-hant" ? (
              <ol className="pageWrapper__container_contentWrapper__content_numberList">
                <div className="pageWrapper__container_contentWrapper__content_numberList__title">
                  {t("list_1.title")}
                </div>
                <li>
                  {t("list_1.list_item_1")}
                  <ul>
                    <li>{t("list_1.sublist_1.sublist_item_1")}</li>
                    <li>{t("list_1.sublist_1.sublist_item_2")}</li>
                    <li>{t("list_1.sublist_1.sublist_item_3")}</li>
                    <li>{t("list_1.sublist_1.sublist_item_4")}</li>
                  </ul>
                </li>
                <li>
                  {t("list_1.list_item_2")}
                  <ul>
                    <li>{t("list_1.sublist_2.sublist_item_1")}</li>
                    <li>{t("list_1.sublist_2.sublist_item_2")}</li>
                    <li>{t("list_1.sublist_2.sublist_item_3")}</li>
                  </ul>
                </li>
              </ol>
            ) : (
              <ol className="pageWrapper__container_contentWrapper__content_numberList">
                <div className="pageWrapper__container_contentWrapper__content_numberList__title">
                  {t("list_1.title")}
                </div>
                <li>
                  {t("list_1.list_item_1")}
                  <ul>
                    <li>{t("list_1.sublist_1.sublist_item_1")}</li>
                  </ul>
                </li>
                <li>
                  {t("list_1.list_item_2")}
                  <ul>
                    <li>{t("list_1.sublist_2.sublist_item_1")}</li>
                  </ul>
                </li>
              </ol>
            )}
            <ul className="pageWrapper__container_contentWrapper__content_noneList">
              <div className="pageWrapper__container_contentWrapper__content_noneList__title">
                {t("list_2.title")}
              </div>
              <li>{t("list_2.list_item_1")}</li>
            </ul>
            <ol className="pageWrapper__container_contentWrapper__content_numberList">
              <div className="pageWrapper__container_contentWrapper__content_numberList__title">
                {t("list_3.title")}
              </div>
              <li>{t("list_3.list_item_1")}</li>
              <li>
                {t("list_3.list_item_2")}
                <ul>
                  <li>{t("list_3.sublist_2.sublist_item_1")}</li>
                  <li>{t("list_3.sublist_2.sublist_item_2")}</li>
                </ul>
              </li>
            </ol>
            <ol className="pageWrapper__container_contentWrapper__content_numberList">
              <div className="pageWrapper__container_contentWrapper__content_numberList__title">
                {t("list_4.title")}
              </div>
              <li>
                {t("list_4.list_item_1")}
                <ul>
                  <li>{t("list_4.sublist_1.sublist_item_1")}</li>
                </ul>
              </li>
              <li>
                {t("list_4.list_item_2")}
                <ul>
                  <li>{t("list_4.sublist_2.sublist_item_1")}</li>
                  <li>{t("list_4.sublist_2.sublist_item_2")}</li>
                  <li>{t("list_4.sublist_2.sublist_item_3")}</li>
                </ul>
              </li>
              <li>
                {t("list_4.list_item_3")}
                <ul>
                  <li>{t("list_4.sublist_3.sublist_item_1")}</li>
                  <li>{t("list_4.sublist_3.sublist_item_2")}</li>
                  <li>{t("list_4.sublist_3.sublist_item_3")}</li>
                  <li>{t("list_4.sublist_3.sublist_item_4")}</li>
                </ul>
              </li>
            </ol>
            <ol className="pageWrapper__container_contentWrapper__content_numberList">
              <div className="pageWrapper__container_contentWrapper__content_numberList__title">
                {t("list_5.title")}
              </div>
              <li>{t("list_5.list_item_1")}</li>
              <li>{t("list_5.list_item_2")}</li>
              <li>{t("list_5.list_item_3")}</li>
            </ol>
            <h3 className="pageWrapper__container_contentWrapper__content_listMainTitle">
              {t("paragraph_title_3")}
            </h3>
            <ol className="pageWrapper__container_contentWrapper__content_numberList">
              <li>{t("list_6.list_item_1")}</li>
              <li>
                {t("list_6.list_item_2")}
                <ul>
                  <li>{t("list_6.sublist_2.sublist_item_1")}</li>
                  <li>{t("list_6.sublist_2.sublist_item_2")}</li>
                </ul>
              </li>
              <li>
                {t("list_6.list_item_3")}
                <ul>
                  <li>{t("list_6.sublist_3.sublist_item_1")}</li>
                  <li>{t("list_6.sublist_3.sublist_item_2")}</li>
                </ul>
              </li>
              <li>
                {t("list_6.list_item_4")}
                <ul>
                  <li>{t("list_6.sublist_4.sublist_item_1")}</li>
                  <li>{t("list_6.sublist_4.sublist_item_2")}</li>
                  <li>{t("list_6.sublist_4.sublist_item_3")}</li>
                  <li>{t("list_6.sublist_4.sublist_item_4")}</li>
                  <li>{t("list_6.sublist_4.sublist_item_5")}</li>
                  <li>{t("list_6.sublist_4.sublist_item_6")}</li>
                  <li>{t("list_6.sublist_4.sublist_item_7")}</li>
                </ul>
              </li>
            </ol>
            <h3 className="pageWrapper__container_contentWrapper__content_listMainTitle">
              {t("paragraph_title_4")}
            </h3>
            <ul className="pageWrapper__container_contentWrapper__content_noneList">
              <div className="pageWrapper__container_contentWrapper__content_noneList__title">
                {t("list_7.title")}
              </div>
              <li>
                <ol>
                  <li> {t("list_7.list_item_1")}</li>
                  <li> {t("list_7.list_item_2")}</li>
                </ol>
              </li>
              <li>{t("list_7.list_item_3")}</li>
            </ul>
            <h3 className="pageWrapper__container_contentWrapper__content_listMainTitle">
              {t("paragraph_title_5")}
            </h3>
            <ol className="pageWrapper__container_contentWrapper__content_numberList">
              <div className="pageWrapper__container_contentWrapper__content_numberList__title">
                {t("list_8.title")}
              </div>
              <li>
                {t("list_8.list_item_1")}
                <ul>
                  <li>{t("list_8.sublist_1.sublist_item_1")}</li>
                  <li>{t("list_8.sublist_1.sublist_item_2")}</li>
                </ul>
              </li>
            </ol>
            <ul className="pageWrapper__container_contentWrapper__content_noneList">
              <div className="pageWrapper__container_contentWrapper__content_noneList__title">
                {t("list_9.title")}
              </div>
              <li>{t("list_9.list_item_1")}</li>
            </ul>
            <h3 className="pageWrapper__container_contentWrapper__content_listMainTitle">
              {t("paragraph_title_6")}
            </h3>
            <ol className="pageWrapper__container_contentWrapper__content_numberList">
              <li>{t("list_10.list_item_1")}</li>
              <li>{t("list_10.list_item_2")}</li>
              <li>{t("list_10.list_item_3")}</li>
              <li>{t("list_10.list_item_4")}</li>
              <li>{t("list_10.list_item_5")}</li>
              <li>{t("list_10.list_item_6")}</li>
            </ol>
            <h3 className="pageWrapper__container_contentWrapper__content_listMainTitle">
              {t("paragraph_title_7")}
            </h3>
            <ul className="pageWrapper__container_contentWrapper__content_noneList ">
              <li>{t("list_11.list_item_1")}</li>
              <li>
                {t.rich("list_11.list_item_2", {
                  link: (chunks) => (
                    <Link
                      href="https://drive.google.com/uc?export=download&id=1Oy6QXn3rlB2iS0hWEotCjeHBzERpgM_d"
                      style={{ color: "#2B5F75" }}
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </li>
              <li>
                {t.rich("list_11.list_item_3", {
                  link: (chunks) => (
                    <Link
                      href="https://drive.google.com/uc?export=download&id=1VAef8pG0kpXjaAkpWFeSiN7CkHPH0WST"
                      download
                      style={{ color: "#2B5F75" }}
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
