import ImageLoader from "@/app/[locale]/components/ui/image-loader";
import { Fragment } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/navigation";

const NewsDetailPage = () => {
  const t = useTranslations("ArticlePage_20231110");

  return (
    <div className="articleWrapper">
      <div className="articleWrapper__container">
        <h1 className="articleWrapper__container_title">{t("title")}</h1>
        <p className="articleWrapper__container_date">2023.11.10</p>
        <div className="articleWrapper__container_banner">
          <ImageLoader
            src={"/images/about/news/20240510/banner.jpg"}
            sizes={"100%"}
            style={{ width: "100%", height: "auto" }}
            alt={"hero"}
          />
        </div>

        {useLocale() === "zh-hant" ? (
          <div className="articleWrapper__container_content">
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_1", {
                br: () => <br />,
              })}
            </p>
            <h4 className="articleWrapper__container_content__innertitle">
              {t("paragraph_inner_tittle_1")}
            </h4>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_2", {
                br: () => <br />,
              })}
            </p>
            <h4 className="articleWrapper__container_content__innertitle">
              {t("paragraph_inner_tittle_2")}
            </h4>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_3", {
                br: () => <br />,
              })}
            </p>

            <ul className="articleWrapper__container_content__nonelistWrapper">
              <li>
                {t.rich("list_1.list_item_1", {
                  link: (chunks) => (
                    <Link
                      href="www.tccf.tw/pitching-awards"
                      target="_blank"
                      style={{ color: "#2B5F75" }}
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </li>
              <li>
                {t.rich("list_2.list_item_2", {
                  link: (chunks) => (
                    <Link
                      href="www.tccf.tw/pitching-selected-entries"
                      target="_blank"
                      style={{ color: "#2B5F75" }}
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </li>
              <li>
                {t.rich("list_2.list_item_3", {
                  link: (chunks) => (
                    <Link
                      href="https://www.tccf.tw/post/2023pitchingawards"
                      target="_blank"
                      style={{ color: "#2B5F75" }}
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </li>
            </ul>

            <ul className="articleWrapper__container_content__nonelistWrapper">
              <li>
                {t.rich("list_2.list_item_1", {
                  link: (chunks) => (
                    <Link
                      href="https://www.tccf.tw/"
                      target="_blank"
                      style={{ color: "#2B5F75" }}
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </li>
              <li>
                {t.rich("list_2.list_item_2", {
                  link: (chunks) => (
                    <Link
                      href="www.linkedin.com/company/taiwan-creative-content-fest-tccf"
                      target="_blank"
                      style={{ color: "#2B5F75" }}
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </li>
              <li>
                {t.rich("list_2.list_item_3", {
                  link: (chunks) => (
                    <Link
                      href="www.facebook.com/TCCFTaiwanCreativeContentFest"
                      target="_blank"
                      style={{ color: "#2B5F75" }}
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </li>
              <li>
                {t.rich("list_2.list_item_4", {
                  link: (chunks) => (
                    <Link
                      href="www.tccf.tw/press"
                      target="_blank"
                      style={{ color: "#2B5F75" }}
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </li>
            </ul>
            <ul className="articleWrapper__container_content__nonelistWrapper">
              <div className="articleWrapper__container_content__nonelistWrapper_listTitle">
                {t("list_3.title")}
              </div>
              <li>{t("list_3.list_item_1")}</li>
              <li>{t("list_3.list_item_2")}</li>
            </ul>
            <ul className="articleWrapper__container_content__nonelistWrapper">
              <div className="articleWrapper__container_content__nonelistWrapper_listTitle">
                {t("list_4.title")}
              </div>
              <li>
                {t.rich("list_4.list_item_1", {
                  link: (chunks) => (
                    <Link
                      href="mailto:steven2961511@taicca.tw"
                      style={{ color: "#2B5F75" }}
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </li>
            </ul>
          </div>
        ) : (
          <div className="articleWrapper__container_content">
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_1", {
                br: () => <br />,
              })}
              {t.rich("paragraph_1_1", {
                link: (chunks) => (
                  <Link
                    href="https://deadline.com/tag/cnc/"
                    style={{ color: "#2B5F75" }}
                  >
                    {chunks}
                  </Link>
                ),
              })}
              {t.rich("paragraph_1_2", {
                br: () => <br />,
              })}
            </p>
            <ul className="articleWrapper__container_content__nonelistWrapper">
              <div className="articleWrapper__container_content__nonelistWrapper_listTitle">
                {t("list_1.title")}
              </div>
              <li>{t("list_1.list_item_1")}</li>
              <li>{t("list_1.list_item_2")}</li>
              <li>{t("list_1.list_item_3")}</li>
              <li>{t("list_1.list_item_4")}</li>
            </ul>
            <ul className="articleWrapper__container_content__nonelistWrapper">
              <div className="articleWrapper__container_content__nonelistWrapper_listTitle">
                {t("list_2.title")}
              </div>
              <li>{t("list_2.list_item_1")}</li>
              <li>
                {t.rich("list_2.list_item_2", {
                  link: (chunks) => (
                    <Link
                      href="mailto:wengin.hsu@taicca.tw"
                      style={{ color: "#2B5F75" }}
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </li>
              <li>
                {t.rich("list_2.list_item_3", {
                  link: (chunks) => (
                    <Link href="tel:+886227458186" style={{ color: "#2B5F75" }}>
                      {chunks}
                    </Link>
                  ),
                })}
              </li>
            </ul>
          </div>
        )}

        {/* <div className="articleWrapper__container_content">
          {data.article.map((item) => (
            <Fragment key={item.id}>
              {(() => {
                switch (item.type) {
                  case "paragraph":
                    return (
                      <p className="articleWrapper__container_content__paragraph">
                        {item.text}
                      </p>
                    );

                  case "paragraphTitle":
                    return (
                      <p className="articleWrapper__container_content__paragraphTitle">
                        {item.text}
                      </p>
                    );
                  case "subtitle":
                    return (
                      <h3 className="articleWrapper__container_content__subtitle">
                        {item.text}
                      </h3>
                    );
                  case "innertitle":
                    return (
                      <h4 className="articleWrapper__container_content__innertitle">
                        {item.text}
                      </h4>
                    );
                  case "image":
                    return (
                      <div className="articleWrapper__container_content__images">
                        <ImageLoader
                          src={item.link}
                          sizes={"100%"}
                          style={{ width: "100%", height: "auto" }}
                          alt={"hero"}
                        />
                      </div>
                    );
                  case "noneStyleList": {
                    return (
                      <Fragment>
                        {item.content.map((el, index) => (
                          <div
                            className="articleWrapper__container_content__nonelistWrapper"
                            key={index}
                          >
                            <div className="articleWrapper__container_content__nonelistWrapper_listTitle">
                              {el.title}
                            </div>
                            <ul className="articleWrapper__container_content__nonelistWrapper_list">
                              {el.item.map((value, index) => (
                                <li key={index}>{value}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Fragment>
                    );
                  }
                  case "styleList": {
                    return (
                      <Fragment>
                        {item.content.map((el, index) => (
                          <div
                            className="articleWrapper__container_content__nonelistWrapper"
                            key={index}
                          >
                            <div className="articleWrapper__container_content__nonelistWrapper_listTitle">
                              {el.title}
                            </div>
                            <ul className="articleWrapper__container_content__nonelistWrapper_list">
                              {el.item.map((value, index) => (
                                <li key={index}> {value}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Fragment>
                    );
                  }
                }
              })()}
            </Fragment>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default NewsDetailPage;
