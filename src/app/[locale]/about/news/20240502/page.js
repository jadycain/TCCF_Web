import ImageLoader from "@/app/[locale]/components/ui/image-loader";
import { Fragment } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/navigation";

const NewsDetailPage = () => {
  const t = useTranslations("ArticlePage_20240502");

  return (
    <div className="articleWrapper">
      <div className="articleWrapper__container">
        <h1 className="articleWrapper__container_title">{t("title")}</h1>
        <p className="articleWrapper__container_date">2024.05.02</p>
        <div className="articleWrapper__container_banner">
          <ImageLoader
            src={"/images/about/announcement/20240502/banner.jpeg"}
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
            <div className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/announcement/20240502/1.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20240502_1"}
              />
            </div>
            <h3 className="articleWrapper__container_content__subtitle">
              {t("paragraph_main_title_1")}
            </h3>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_2", {
                br: () => <br />,
              })}
            </p>
            <p className="articleWrapper__container_content__paragraphTitle">
              {t("paragraph_title_1")}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_3", {
                br: () => <br />,
              })}
              {t.rich("paragraph_4", {
                link: (chunks) => (
                  <Link
                    href="https://ccdp.taicca.tw/"
                    target="_blank"
                    style={{ color: "#2B5F75" }}
                  >
                    {chunks}
                  </Link>
                ),
              })}
              {t.rich("paragraph_5", {
                link: (chunks) => (
                  <Link
                    href="https://en.taicca.tw/article/5fe86426"
                    target="_blank"
                    style={{ color: "#2B5F75" }}
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </p>
            <p className="articleWrapper__container_content__paragraphTitle">
              {t("paragraph_title_2")}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_6", {
                br: () => <br />,
              })}
            </p>
            <ul className="articleWrapper__container_content__listWrapper">
              <div className="articleWrapper__container_content__listWrapper_listTitle">
                {t("list_1.title")}
              </div>
              <li>{t("list_1.list_item_1")}</li>
              <li>{t("list_1.list_item_2")}</li>
              <li>{t("list_1.list_item_3")}</li>
              <li>{t("list_1.list_item_4")}</li>
              <li>{t("list_1.list_item_5")}</li>
            </ul>

            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_7", {
                br: () => <br />,
              })}
            </p>

            <div className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/announcement/20240502/2.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20240502_2"}
              />
            </div>

            <h3 className="articleWrapper__container_content__subtitle">
              {t("paragraph_main_title_2")}
            </h3>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_8", {
                br: () => <br />,
              })}
            </p>
            <ul className="articleWrapper__container_content__listWrapper">
              <div className="articleWrapper__container_content__listWrapper_listTitle">
                {t("list_2.title")}
              </div>
              <li>{t("list_2.list_item_1")}</li>
              <li>{t("list_2.list_item_2")}</li>
              <li>{t("list_2.list_item_3")}</li>
              <li>{t("list_2.list_item_4")}</li>
              <li>{t("list_2.list_item_5")}</li>
              <li>{t("list_2.list_item_6")}</li>
              <li>{t("list_2.list_item_7")}</li>
              <li>{t("list_2.list_item_8")}</li>
            </ul>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_9", {
                br: () => <br />,
              })}
            </p>
            <div className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/announcement/20240502/3.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20240502_3"}
              />
            </div>
            <h3 className="articleWrapper__container_content__subtitle">
              {t("paragraph_main_title_3")}
            </h3>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_10", {
                br: () => <br />,
              })}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_11", {
                br: () => <br />,
              })}
            </p>
            <div className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/announcement/20240502/4.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20240502_4"}
              />
            </div>

            <ul className="articleWrapper__container_content__nonelistWrapper">
              <div className="articleWrapper__container_content__nonelistWrapper_listTitle">
                {t("list_3.title")}
              </div>
              <li>{t("list_3.list_item_1")}</li>
              <li>{t("list_3.list_item_2")}</li>
            </ul>
          </div>
        ) : (
          <div className="articleWrapper__container_content">
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_1", {
                br: () => <br />,
              })}
            </p>
            <p className="articleWrapper__container_content__paragraphTitle">
              {t("paragraph_title_1")}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_2", {
                br: () => <br />,
              })}
            </p>
            <div className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/announcement/20240502/1.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20240502_1"}
              />
            </div>
            <h3 className="articleWrapper__container_content__subtitle">
              {t("paragraph_main_title_1")}
            </h3>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_3", {
                br: () => <br />,
              })}
            </p>
            <p className="articleWrapper__container_content__paragraphTitle">
              {t("paragraph_title_2")}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_4", {
                br: () => <br />,
              })}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_5", {
                br: () => <br />,
              })}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_6", {
                br: () => <br />,
              })}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_7", {
                br: () => <br />,
              })}
            </p>
            <p className="articleWrapper__container_content__paragraphTitle">
              {t("paragraph_title_3")}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_8", {
                br: () => <br />,
              })}
            </p>
            <ul className="articleWrapper__container_content__listWrapper">
              <div className="articleWrapper__container_content__listWrapper_listTitle">
                {t("list_1.title")}
              </div>
              <li>{t("list_1.list_item_1")}</li>
              <li>{t("list_1.list_item_2")}</li>
              <li>{t("list_1.list_item_3")}</li>
              <li>{t("list_1.list_item_4")}</li>
              <li>{t("list_1.list_item_5")}</li>
            </ul>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_9", {
                br: () => <br />,
              })}
            </p>
            <div className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/announcement/20240502/2.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20240502_2"}
              />
            </div>
            <p className="articleWrapper__container_content__paragraphTitle">
              {t("paragraph_main_title_2")}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_10", {
                br: () => <br />,
              })}
            </p>
            <ul className="articleWrapper__container_content__listWrapper">
              <div className="articleWrapper__container_content__listWrapper_listTitle">
                {t("list_2.title")}
              </div>
              <li>{t("list_2.list_item_1")}</li>
              <li>{t("list_2.list_item_2")}</li>
              <li>{t("list_2.list_item_3")}</li>
              <li>{t("list_2.list_item_4")}</li>
              <li>{t("list_2.list_item_5")}</li>
            </ul>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_11", {
                br: () => <br />,
              })}
            </p>
            <div className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/announcement/20240502/3.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20240502_3"}
              />
            </div>
            <p className="articleWrapper__container_content__paragraphTitle">
              {t("paragraph_main_title_3")}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_12", {
                br: () => <br />,
              })}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_13", {
                br: () => <br />,
              })}
            </p>
            <div className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/announcement/20240502/4.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20240502_4"}
              />
            </div>
            <ul className="articleWrapper__container_content__nonelistWrapper">
              <div className="articleWrapper__container_content__nonelistWrapper_listTitle">
                {t("list_3.title")}
              </div>
              <li>{t("list_3.list_item_1")}</li>
              <li>{t("list_3.list_item_2")}</li>
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
