import ImageLoader from "@/app/[locale]/components/ui/image-loader";
import { Fragment } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/navigation";

const NewsDetailPage = () => {
  const t = useTranslations("ArticlePage_20240510");
  // const data = articleData.filter((item) => item.id === params.id)[0];
  //   const article = await getArticle(params.id);

  // const data = articleJson.filter((item) => item.id == params.id)[0];
  // console.log(data);
  return (
    <div className="articleWrapper">
      <div className="articleWrapper__container">
        <h1 className="articleWrapper__container_title">{t("title")}</h1>
        <div className="articleWrapper__container_banner">
          <ImageLoader
            src={"/images/about/news/20240510/banner.jpg"}
            sizes={"100%"}
            style={{ width: "100%", height: "auto" }}
            alt={"hero"}
          />
        </div>

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
          <p className="articleWrapper__container_content__paragraphTitle">
            {t("paragraph_title_2")}
          </p>
          <p className="articleWrapper__container_content__paragraph">
            {t.rich("paragraph_3", {
              br: () => <br />,
            })}
          </p>

          {/* 英文版才有 */}
          {useLocale() === "en" && (
            <p className="articleWrapper__container_content__paragraphTitle">
              {t("paragraph_title_3")}
            </p>
          )}
          {/* 英文版才有 */}
          {useLocale() === "en" && (
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_4", {
                br: () => <br />,
              })}
            </p>
          )}

          <ul className="articleWrapper__container_content__nonelistWrapper">
            <div className="articleWrapper__container_content__nonelistWrapper_listTitle">
              {t("list.title")}
            </div>
            <li>{t("list.list_item_1")}</li>
            <li>
              {t.rich("list.list_item_2", {
                link: (chunks) => (
                  <Link
                    href="/https://www.tccf.tw/"
                    target="_blank"
                    style={{ color: "#2B5F75" }}
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </li>
            <li>{t("list.list_item_3")}</li>
          </ul>
        </div>

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
