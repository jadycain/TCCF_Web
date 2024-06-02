import { Fragment } from "react";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicyPage");

  return (
    <div className="pageWrapper">
      <div className="pageWrapper__container">
        <div className="pageWrapper__container_contentWrapper">
          <h1 className="pageWrapper__container_contentWrapper__title">
            {t("title")}
          </h1>
          <div className="pageWrapper__container_contentWrapper__content">
            <p>{t("paragraph")}</p>

            <ol className="pageWrapper__container_contentWrapper__content_orderedList">
              {/* list 1 */}
              <li className="pageWrapper__container_contentWrapper__content_orderedList__title">
                <h3 style={{ display: "inline-block" }}>
                  {t(`list.list_1.title`)}
                </h3>
              </li>
              <div>{t(`list.list_1.content`)}</div>
              {/* list 2 */}
              <li className="pageWrapper__container_contentWrapper__content_orderedList__title">
                <h3 style={{ display: "inline-block" }}>
                  {t(`list.list_2.title`)}
                </h3>
                <ol>
                  <li>{t(`list.list_2.content.content_1`)}</li>
                  <li>{t(`list.list_2.content.content_2`)}</li>
                  <li>
                    {t(`list.list_2.content.content_3`)}
                    <ol>
                      <li> {t(`list.list_2.content.subcontent_3.sub_1`)}</li>
                      <li> {t(`list.list_2.content.subcontent_3.sub_2`)}</li>
                    </ol>
                  </li>
                  <li>{t(`list.list_2.content.content_4`)}</li>
                  <li>
                    {t(`list.list_2.content.content_5`)}
                    <ol>
                      <li> {t(`list.list_2.content.subcontent_5.sub_1`)}</li>
                      <li> {t(`list.list_2.content.subcontent_5.sub_2`)}</li>
                      <li> {t(`list.list_2.content.subcontent_5.sub_3`)}</li>
                    </ol>
                  </li>
                  <li>
                    {t(`list.list_2.content.content_6`)}
                    <ol>
                      <li> {t(`list.list_2.content.subcontent_6.sub_1`)}</li>
                      <li> {t(`list.list_2.content.subcontent_6.sub_2`)}</li>
                      <li> {t(`list.list_2.content.subcontent_6.sub_3`)}</li>
                    </ol>
                  </li>
                  <li>{t(`list.list_2.content.content_7`)}</li>
                  <li>{t(`list.list_2.content.content_8`)}</li>
                  <li>{t(`list.list_2.content.content_9`)}</li>
                </ol>
              </li>
              {/* list 3 */}
              <li className="pageWrapper__container_contentWrapper__content_orderedList__title">
                <h3 style={{ display: "inline-block" }}>
                  {t(`list.list_3.title`)}
                </h3>
              </li>
              <div>{t(`list.list_3.content`)}</div>
              {/* list 4 */}

              <li className="pageWrapper__container_contentWrapper__content_orderedList__title">
                <h3 style={{ display: "inline-block" }}>
                  {t(`list.list_4.title`)}
                </h3>
              </li>
              <div>
                {t(`list.list_4.content.content_1`)}
                <ol>
                  <li> {t(`list.list_4.content.subcontent_1.sub_1`)}</li>
                  <li> {t(`list.list_4.content.subcontent_1.sub_2`)}</li>
                  <li> {t(`list.list_4.content.subcontent_1.sub_3`)}</li>
                  <li> {t(`list.list_4.content.subcontent_1.sub_4`)}</li>
                  <li> {t(`list.list_4.content.subcontent_1.sub_5`)}</li>
                </ol>
              </div>
              {/* list 5 */}
              <li className="pageWrapper__container_contentWrapper__content_orderedList__title">
                <h3 style={{ display: "inline-block" }}>
                  {t(`list.list_5.title`)}
                </h3>
              </li>
              <div>{t(`list.list_5.content`)}</div>

              {/* list 6 */}
              <li className="pageWrapper__container_contentWrapper__content_orderedList__title">
                <h3 style={{ display: "inline-block" }}>
                  {t(`list.list_6.title`)}
                </h3>
                <ol>
                  <li>{t(`list.list_6.content.content_1`)}</li>
                  <li>{t(`list.list_6.content.content_2`)}</li>
                </ol>
              </li>

              {/* list 7 */}
              <li className="pageWrapper__container_contentWrapper__content_orderedList__title">
                <h3 style={{ display: "inline-block" }}>
                  {t(`list.list_7.title`)}
                </h3>
              </li>
              <div>{t(`list.list_7.content`)}</div>

              {/* list 8 */}

              <li className="pageWrapper__container_contentWrapper__content_orderedList__title">
                <h3 style={{ display: "inline-block" }}>
                  {t(`list.list_8.title`)}
                </h3>
                <ol>
                  <li>{t(`list.list_8.content.content_1`)}</li>
                  <li>{t(`list.list_8.content.content_2`)}</li>
                  <li>{t(`list.list_8.content.content_3`)}</li>

                  <li>
                    {t(`list.list_8.content.content_4`)}
                    <ol>
                      <li> {t(`list.list_8.content.subcontent_4.sub_1`)}</li>
                      <li> {t(`list.list_8.content.subcontent_4.sub_2`)}</li>
                      <li> {t(`list.list_8.content.subcontent_4.sub_3`)}</li>
                      <li> {t(`list.list_8.content.subcontent_4.sub_4`)}</li>
                    </ol>
                  </li>
                  <li>{t(`list.list_8.content.content_5`)}</li>
                </ol>
              </li>

              {/* list 9 */}
              <li className="pageWrapper__container_contentWrapper__content_orderedList__title">
                <h3 style={{ display: "inline-block" }}>
                  {t(`list.list_9.title`)}
                </h3>
                <ol>
                  <li>{t(`list.list_9.content.content_1`)}</li>
                  <li>{t(`list.list_9.content.content_2`)}</li>
                  <li>{t(`list.list_9.content.content_3`)}</li>
                  <li>{t(`list.list_9.content.content_4`)}</li>
                  <li>{t(`list.list_9.content.content_5`)}</li>
                  <li>{t(`list.list_9.content.content_6`)}</li>
                </ol>
              </li>
            </ol>

            {/* {data[0].article.map((item, index) => (
              <Fragment key={index}>
                {(() => {
                  switch (item.type) {
                    case "paragraph":
                      return <p>{item.text.ch}</p>;
                    case "paragraphTitle":
                      return (
                        <h3 className="pageWrapper__container_contentWrapper__content_paragraphWrapper__title">
                          {item.text.ch}
                        </h3>
                      );
                    case "list":
                      return (
                        <ul className="pageWrapper__container_contentWrapper__content_list">
                          {item.text.map((el, index) => (
                            <Fragment key={index}>
                              <li className="pageWrapper__container_contentWrapper__content_list__item">
                                {el.ch}
                              </li>
                              {el.sublist && (
                                <ul className="pageWrapper__container_contentWrapper__content_list__sublist">
                                  {el.sublist.map((sub, index) => (
                                    <li
                                      key={index}
                                      className="pageWrapper__container_contentWrapper__content_list__sublist_sublistItem"
                                    >
                                      {sub.ch}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </Fragment>
                          ))}
                        </ul>
                      );
                    default:
                      break;
                  }
                })()}
              </Fragment>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
