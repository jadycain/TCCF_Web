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
        <p className="articleWrapper__container_date">2024.05.10</p>
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

          {useLocale() === "zh-hant" ? (
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_2", {
                br: () => <br />,
              })}
            </p>
          ) : (
            <p className="articleWrapper__container_content__paragraph">
              {t.rich("paragraph_2", {
                br: () => <br />,
              })}
              {t.rich("paragraph_2_1", {
                link: (chunks) => (
                  <Link
                    href="https://ccdp.taicca.tw/en/"
                    target="_blank"
                    style={{ color: "#2B5F75" }}
                  >
                    {chunks}
                  </Link>
                ),
              })}
              {t.rich("paragraph_2_2", {
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
              {t.rich("paragraph_2_3", {
                br: () => <br />,
              })}
            </p>
          )}

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
      </div>
    </div>
  );
};

export default NewsDetailPage;
