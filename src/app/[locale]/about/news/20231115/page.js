import ImageLoader from "@/app/[locale]/components/ui/image-loader";
import { Fragment } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/navigation";

const NewsDetailPage = () => {
  const t = useTranslations("ArticlePage_20231115");
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
            src={"/images/about/news/20231115/banner.jpg"}
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
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/1.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_1"}
              />
              <figcaption>{t("figcaption_1")}</figcaption>
            </figure>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_2", {
                br: () => <br />,
              })}
            </p>
            <h4 className="articleWrapper__container_content__innertitle">
              {t("paragraph_inner_tittle_1")}
            </h4>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_3", {
                br: () => <br />,
              })}
            </p>
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/2.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_2"}
              />
              <figcaption>{t("figcaption_2")}</figcaption>
            </figure>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_4", {
                br: () => <br />,
              })}
            </p>
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/3.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_3"}
              />
              <figcaption>{t("figcaption_3")}</figcaption>
            </figure>
            <h4 className="articleWrapper__container_content__innertitle">
              {t("paragraph_inner_tittle_2")}
            </h4>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_5", {
                br: () => <br />,
              })}
            </p>
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/4.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_4"}
              />
              <figcaption>{t("figcaption_4")}</figcaption>
            </figure>
            <h4 className="articleWrapper__container_content__innertitle">
              {t("paragraph_inner_tittle_3")}
            </h4>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_6", {
                br: () => <br />,
              })}
            </p>
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/5.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_5"}
              />
              <figcaption>{t("figcaption_5")}</figcaption>
            </figure>
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/6.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_6"}
              />
              <figcaption>{t("figcaption_6")}</figcaption>
            </figure>
            <h4 className="articleWrapper__container_content__innertitle">
              {t("paragraph_inner_tittle_4")}
            </h4>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_7", {
                br: () => <br />,
              })}
            </p>
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/7.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_7"}
              />
              <figcaption>{t("figcaption_7")}</figcaption>
            </figure>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_8", {
                br: () => <br />,
              })}
            </p>
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/8.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_8"}
              />
              <figcaption>{t("figcaption_8")}</figcaption>
            </figure>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_9", {
                br: () => <br />,
              })}
            </p>
            <ul className="articleWrapper__container_content__nonelistWrapper">
              <li>
                {t.rich("list_1.list_item_1", {
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
                {t.rich("list_1.list_item_2", {
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
                {t.rich("list_1.list_item_3", {
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
                {t.rich("list_1.list_item_4", {
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
                {t("list_2.title")}
              </div>
              <li>{t("list_2.list_item_1")}</li>
              <li>{t("list_2.list_item_2")}</li>
            </ul>

            <ul className="articleWrapper__container_content__nonelistWrapper">
              <div className="articleWrapper__container_content__nonelistWrapper_listTitle">
                {t("list_3.title")}
              </div>
              <li>
                {t.rich("list_3.list_item_1", {
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
            </p>
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/1.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_1"}
              />
            </figure>
            <p className="articleWrapper__container_content__paragraphTitle">
              {t("paragraph_title_1")}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_2", {
                br: () => <br />,
              })}
            </p>
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/2.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_2"}
              />
            </figure>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_3", {
                br: () => <br />,
              })}
            </p>
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/3.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_3"}
              />
            </figure>
            <p className="articleWrapper__container_content__paragraphTitle">
              {t("paragraph_title_2")}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_4", {
                br: () => <br />,
              })}
            </p>
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/4.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_4"}
              />
            </figure>
            <p className="articleWrapper__container_content__paragraphTitle">
              {t("paragraph_title_3")}
            </p>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_5", {
                br: () => <br />,
              })}
            </p>
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/5.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_5"}
              />
            </figure>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_6", {
                br: () => <br />,
              })}
            </p>
            <figure className="articleWrapper__container_content__images">
              <ImageLoader
                src={"/images/about/news/20231115/6.jpg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"20231115_6"}
              />
            </figure>
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_7", {
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
      </div>
    </div>
  );
};

export default NewsDetailPage;
