import { Fragment } from "react";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicyPage");
  const data = [
    {
      title: " 隱私權及資訊安全政策宣示與著作權聲明",
      article: [
        {
          type: "paragraph",
          text: {
            ch: "歡迎您光臨TCCF創意內容大會（以下稱「本商展」）官方網站（以下稱「本平台」）！「本平台」係由主辦單位文化內容策進院（以下稱「TAICCA」）所建置管理，所登載資料歡迎您以連結方式分享，若您有重製、複製或散布網站資料之需要，請與「TAICCA」聯繫並取得書面同意後再進行。為讓您能夠更安心地使用「本平台」所提供各項服務，特此向您說明「本平台」隱私權及資訊安全政策與著作權聲明如下：",
          },
        },
        {
          type: "paragraphTitle",
          text: {
            ch: "// 關於政策適用範圍",
          },
        },
        {
          type: "paragraph",
          text: {
            ch: "以下隱私權及資訊安全政策與著作權聲明（以下稱「本政策」），適用於您在「本平台」活動時，所涉及之個人資料蒐集、運用與保護，以及與著作權相關的規範，但不適用於與「本平台」功能連結之各政府機關、其他法人、團體或自然人網站。凡經由「本平台」連結之網站，個別網站均有其專屬之隱私權與著作權政策，「TAICCA」不負擔任何連帶責任。當您在這些網站活動時，關於個人資料之保護，適用各該網站隱私權與著作權政策。",
          },
        },
        {
          type: "paragraphTitle",
          text: {
            ch: "// 個人資料之蒐集及運用",
          },
        },
        {
          type: "list",
          text: [
            {
              ch: "單純在「本平台」的瀏覽及檔案下載行為，「本平台」並不會蒐集任何有關個人的身份資料。",
            },
            {
              ch: "利用「本平台」所提供各項線上申請服務，需申請人提供個人資料時，各承辦單位會依案件辦理需求，請您提供姓名、暱稱、聯絡電話、電子郵件、出生年月日、住址、照片、公司名稱等個人最新、最真實之資料。",
            },
            {
              ch: "當您在使用「本平台」時，「TAICCA」可能會收集到以下資料：",
              sublist: [
                {
                  ch: "您於「本平台」使用TAICCA ID帳號登入後的資料，包括但不限於：使用歷史、查詢資料、行為及活動紀錄(包括但不限於會議預約、講座報名、Innovations表演體驗）等；",
                },
                {
                  ch: "技術數據，例如：URL、IP地址、瀏覽器類型、裝置類型及其識別碼、作業系統資料、語言及造訪時間、位置資料等，並且，本平台使用cookie來提供各網頁上的功能。",
                },
              ],
            },
            {
              ch: "若您透過電子郵件或服務信箱反映意見或詢問相關業務問題時，「TAICCA」會保存通訊紀錄，但僅作為與您聯繫之用。",
            },
            {
              ch: "「TAICCA」有義務保護各申請人隱私，無事先取得您本人同意前，不會自行修改或刪除任何個人資料及檔案。但以下情形除外：",
              sublist: [
                {
                  ch: "違反「本平台」規定事項，如在論壇中出現謾罵或做人身攻擊的言論時。",
                },
                {
                  ch: "保護或防衛相關個人的權利。",
                },
                {
                  ch: "為保護「本平台」各相關單位之權益。",
                },
              ],
            },
            {
              ch: "「TAICCA」絕不會任意提供、出售、交換或出租任何個人資料給其他團體、個人或私人企業。但以下情形除外：",
              sublist: [
                {
                  ch: "配合司法、檢調單位合法調查。",
                },
                {
                  ch: "配合相關職權機關依職務需要之調查或使用。",
                },
                {
                  ch: "基於善意且合理相信相關揭露為法律所需要，或基於維護和改進「本平台」服務而用於相關管理作業。",
                },
              ],
            },
            {
              ch: "為提供「本平台」或「本商展」服務所需，將個人資料提供給線上付款、線上認證或其他相關服務之服務供應商、及/或合作夥伴（例如金流服務、認證服務業者及展務工作公司等)",
            },
            {
              ch: "「本平台」所蒐集之個人資料係依照法定要求及業務需求而為之，並將於逾保存期限後進行刪除。",
            },
            {
              ch: "於妨害國家重大利益、妨害公務機關執行法定職務、妨害蒐集機關或第三人重大利益時，「本平台」有權拒絕您主動提出變更、刪除或異動個人資料之請求。",
            },
          ],
        },
        {
          type: "paragraphTitle",
          text: {
            ch: "// Cookie 之使用",
          },
        },
        {
          type: "paragraph",
          text: {
            ch: "為了提供您最佳的服務，「本平台」會記錄使用者上網之 IP 位址、上網時間及在網站內所瀏覽之網頁等資料（俗稱 Cookie )，這些資料係供使用於 Google Analytics 進行全體使用者行為瀏覽習慣分析以利提升「本平台」服務品質，且僅對全體使用者行為總和進行分析，並不會對個別使用者進行分析。若您不願接受 Cookie 的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕 Cookie 的寫入，但可能會導至「本平台」某些功能不便利或無法正常執行 。",
          },
        },
        {
          type: "paragraphTitle",
          text: {
            ch: "// 個資當事人行使權益",
          },
        },
        {
          type: "paragraph",
          text: {
            ch: "對於「本平台」所提供各項線上申請服務時所蒐集之個人資料除法令規定及限制外，您可依照個人資料保護法第三條行使以下權利，如欲行使以下權利，請透過與我們聯絡進行申請：",
          },
        },
        {
          type: "list",
          text: [
            {
              ch: "請求製給複製本。",
            },
            {
              ch: "請求補充或更正。",
            },
            {
              ch: "請求停止蒐集、處理或利用。",
            },
            {
              ch: "請求刪除。",
            },
            {
              ch: "查詢或請求閱覽。",
            },
          ],
        },
        {
          type: "paragraphTitle",
          text: {
            ch: "// 資訊安全及保護",
          },
        },
        {
          type: "paragraph",
          text: {
            ch: "「本平台」伺服器設有「防火牆」做保護，以防止非法入侵、破壞或竊取資料，當您使用「本平台」各項服務功能時，任何儲存於「本平台」上之資料，會受到完善保護，以保障個人資料安全。",
          },
        },
        {
          type: "paragraphTitle",
          text: {
            ch: "// 自我資料安全保護措施",
          },
        },
        {
          type: "list",
          text: [
            {
              ch: "請妥善保管任何個人資料，切勿將個人資料提供給任何第三人，以保障權益。提醒您，在網際網路上（如在討論區、留言板、聊天區等）透露之個人資料，均有可能會被他人蒐集及使用，也讓您有可能收到他人主動提供之電子郵件。",
            },
            {
              ch: "我們會盡最大努力檢查並測試「本平台」提供之電子檔案，但還是建議您於下載任何附件時必須執行掃毒程式。",
            },
          ],
        },
        {
          type: "paragraphTitle",
          text: {
            ch: "// 隱私權政策之修改及諮詢",
          },
        },
        {
          type: "paragraph",
          text: {
            ch: "「本政策」如經修改，修改後之內容將隨時公告於「本平台」。若您不同意該等變更或修改，請停止繼續使用「本平台」，並依「本政策」之規定通知「本平台」停止蒐集、處理及利用您的個人資料。若您對「本政策」有任何疑問或意見，歡迎與我們聯繫。謝謝！",
          },
        },
        {
          type: "paragraphTitle",
          text: {
            ch: "// 著作權聲明",
          },
        },
        {
          type: "list",
          text: [
            {
              ch: "「本平台」所刊載之所有內容，除著作權法規定不得為著作權之標的（如法律、命令、公務員撰擬之講稿、新聞稿等--請參考著作權法第九條規定）外，其他包括文字敘述、攝影、圖片、錄音、影像及其他資訊，均受著作權法保護。",
            },
            {
              ch: "上述不得為著作權標的者，任何人均得自由利用，歡迎各界廣為利用。",
            },
            {
              ch: "「本平台」資訊內容受著作權法保護者，除有依法合理使用之情形外，應取得該著作權之權利人同意或授權後，方得利用。",
            },
            {
              ch: " 上述「依法合理使用之情形」，說明如下：",
              sublist: [
                {
                  ch: "「本平台」所刊載以文化內容策進院（TAICCA）名義公開發表之著作，即著作人為「TAICCA」者，在合理範圍內，得以連結方式播送或傳輸，並請於提供連結時註明出處。",
                },
                {
                  ch: "「本平台」資訊，可為個人或家庭之非營利目的而重製。",
                },
                {
                  ch: "為報導、評論、教學、研究或其他正當目的，在合理範圍內，得引用「本平台」資訊，引用時，並請註明出處。",
                },
                {
                  ch: "其他合理使用情形，請參考著作權法第四十四條至第六十五條之規定。",
                },
              ],
            },
            {
              ch: "除合於著作權法第八十條之一第一項所規定「因行為時之技術限制，非移除或變更權利管理電子資訊，即不能合法利用該著作」或「錄製或傳輸系統轉換時，其轉換技術上必要之移除或變更」之情況外，「本平台」所標示之權利管理電子資訊，未經事先書面許可，不得移除或變更。",
            },
          ],
        },
        {
          type: "paragraphTitle",
          text: {
            ch: "// 關於「授權內容」及授權「TAICCA」與其他使用者的相關規範",
          },
        },
        {
          type: "list",
          text: [
            {
              ch: "在您使用「本平台」所包含之服務時，您可以提供影片、聲音（包括音樂及其他錄音檔案）、圖像、照片、文字、商標、電腦程式及其他受到著作權法或其他智慧財產權法律保護的素材；當您將此等素材以上傳或任何其他方式提供給「本平台」時，即視為您已同意依據「本政策」及「本平台」的規範授權「TAICCA」及與TAICCA ID合作之相關網站使用此等素材（以下合稱「授權內容」）。",
            },
            {
              ch: " 您可以藉由「本平台」使用您的「授權內容」行銷您的業務或創作事業。除非您具有「授權內容」充足的合法權利，或已經取得擁有「授權內容」相關權利之第三方的許可，否則您不得將「授權內容」上傳至「本平台」。對於您以上傳或任何其他方式提供之「授權內容」，以及您藉由「本平台」使用此等「授權內容」的所有行為，應由您承擔相關的法律責任。如「TAICCA」因您違反前述規定遭第三人主張權利或遭行政機關裁罰時，您應依「TAICCA」指示負責配合「TAICCA」處理；「TAICCA」如因此蒙受任何損害，並得向您請求損害賠償（包括但不限於律師費、訴訟費、和解金、行政罰鍰、罰金、賠償金、利息）。「本平台」有權使用各種措施（包括但不限於自動化系統）分析、處理您上傳的「授權內容」，以偵測是否存在違法、侵權或其他濫用行為（包括但不限於具有侵權風險的內容、惡意軟體及其他違法內容）。",
            },
            {
              ch: "即使您將「授權內容」上傳至「本平台」，您或擁有「授權內容」相關權利之第三方仍然保留對於「授權內容」所擁有的權利；「授權內容」僅會依據「 本政策 」 及 其他相關之「本平台」 的 規 範 授 權與TAICCA ID合作之相關網站 、「TAICCA」與其他「本平台」的使用者進行使用。",
            },
            {
              ch: "您隨時可以從「本平台」移除您上傳的「授權內容」。如果您移除您所上傳的「授權內容」，自您移除之時起，授權即告終止，「本平台」應不會再公開顯示您已經移除的「授權內容」，但「本平台」仍得基於資料檔案保存及數據資料分析之目的，繼續使用您已經移除的「授權內容」。",
            },
            {
              ch: "若「TAICCA」合理地認為任何「授權內容」有違反法令、違反「本政策」或任何其他相關之「本平台」規範，或可能對「TAICCA」、「本平台」與其他使用者或任何其他第三方造成損害，「本平台」有權自行斟酌並決定移除特定之「授權內容」的全部或一部份。於移除後「本平台」可能會通知您移除該「授權內容」的原因，但有下列情形者，不在此限：(1)若通知您將違反法律或影響執法機關的執法；(2)可能危及移除原因相關調查作業的進行，或影響「本平台」的營運；(3)可能對「TAICCA」、「本平台」與其他使用者或任何其他第三方造成損害。",
            },
            {
              ch: "您應自行負擔保存、備份您所上傳的「授權內容」，「本平台」對於您所上傳的「授權內容」並不負擔任何保存、備份的義務，亦無義務依據您 的要求向您提供「授權內容」的任何副本。",
            },
          ],
        },
      ],
    },
  ];

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
