import articleData from "@/app/lib/data.json";
import { getLocalData } from "@/app/lib/getdata";
import ImageLoader from "@/app/components/ui/image-loader";
import { Fragment } from "react";

const NewsDetailPage = async ({ params }) => {
  // const data = articleData.filter((item) => item.id === params.id)[0];
  //   const article = await getArticle(params.id);

  const data = articleData.filter((item) => item.id == params.id)[0];
  console.log(data);
  return (
    <div className="articleWrapper">
      <div className="articleWrapper__container">
        <h1 className="articleWrapper__container_title">{data.title}</h1>
        <div className="articleWrapper__container_banner">
          <ImageLoader
            src={data.banner}
            sizes={"100%"}
            style={{ width: "100%", height: "auto" }}
            alt={"hero"}
          />
        </div>

        <div className="articleWrapper__container_content">
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
                        {item.content.map((el) => (
                          <div className="articleWrapper__container_content__nonelistWrapper">
                            <div className="articleWrapper__container_content__nonelistWrapper_listTitle">
                              {el.title}
                            </div>
                            <ul className="articleWrapper__container_content__nonelistWrapper_list">
                              {el.item.map((value) => (
                                <li>{value}</li>
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
                        {item.content.map((el) => (
                          <div className="articleWrapper__container_content__nonelistWrapper">
                            <div className="articleWrapper__container_content__nonelistWrapper_listTitle">
                              {el.title}
                            </div>
                            <ul className="articleWrapper__container_content__nonelistWrapper_list">
                              {el.item.map((value) => (
                                <li>{value}</li>
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
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
