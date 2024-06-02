import ImageLoader from "@/app/[locale]/components/ui/image-loader";
import { Fragment } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/navigation";

const NewsDetailPage = () => {
  const t = useTranslations("ArticlePage_20240510");
  // const data = articleData.filter((item) => item.id === params.id)[0];
  //   const article = await getArticle(params.id);

  const articleJson = [
    {
      id: 20240510,
      title:
        "「TCCF PITCHING 提案大會」 總投資金額上看新台幣一億 全球徵件六月起跑 催生影視佳作",
      banner: "/images/about/news/20240510/banner.jpg",
      article: [
        {
          type: "paragraph",
          text: "為了催生具有市場性及國際影響力的好作品，文化內容策進院（文策院）將於今年 11 月舉辦第五屆「2024 Taiwan Creative Content Fest 創意內容大會（TCCF）」，持續積極拓展臺灣跨域文化內容國際製作開發、投資、銷售與發行的機會。於 2023 年 TCCF「PITCHING 提案大會」的「Project to Screen 企畫專場」獲得三萬元美金最大獎「TAICCA X CNC AWARD」的紀錄片《雪水消融的季節》，不只在大會中結識國際發行商，完成作品後也入選瑞士真實影展、韓國全州影展、義大利特倫托山岳影展，以及波蘭 Docs Against Gravity 影展等多國影展的競賽單元，向國際展現臺灣的文化內容實力。",
        },
        {
          type: "innerTitle",
          text: "「Project to Screen 企畫專場」全球徵件，六月起跑",
        },
        {
          type: "paragraph",
          text: "「Project to Screen 企畫專場」分為長片、影集、動畫、紀錄片等四個類別，自六月起向全球開放徵件。去年提案專場首度向全球開放徵件，除了日、韓、印尼、新加坡、印度等亞洲國家，以及美、法、德等歐洲國家之外，還有巴基斯坦、亞美尼亞、伊朗、挪威等超過 15 個國家與地區業者報名，希望爭取全球影視相關市場的青睞。",
        },
        {
          type: "paragraph",
          text: "企畫案報名後，將由國際專業評審選出入選提案，入選者需參與文策院的「提案培訓工作坊」，結訓後，即可在 TCCF 期間的「Project to Screen 企畫專場」現場，向來自全球的內容產業專業人士發表作品企畫提案。此外，入選的企畫可獲得文策院「內容開發專案計畫-前期開發支持」（CCDP）與「國際合作投資方案」（TICP 2.0）的申請資格。若經申請開發及投資審議通過，將有機會獲得支持資金，文策院 CCDP 與 TICP 2.0 兩種方案的總支持金額高達一億元以上，讓提案業者更能籌備、開發企畫，完成作品並連結市場。",
        },
        {
          type: "paragraph",
          text: "今年國際評審也將從「Project to Screen 企畫專場」四個類別中，挑選出一件最具潛力的企畫案，頒發「TAICCA AWARD：Best Project」獎項及獎金美金三萬元。",
        },
        {
          type: "paragraph",
          text: "TCCF 也連結國際展會資源，與文策院有官方合作關係、歐洲最大的法國里爾「Series Mania 劇集展」將持續設立獎項，挑選一件企畫提案，於 2025 年赴法參與展會，將臺灣作品推向歐洲與全球市場，除此之外，富川奇幻電影創投市場展（BIFAN NAFF Project Market）、Focus Asia 創投市場展（Focus Asia-All Genres Market）、MIFFest 創投會議（MPM）等國際展會及創投亦於 TCCF 設立獎項，選出 2025 年代表臺灣前往國際的優秀企畫。",
        },
        {
          type: "paragraph",
          text: "此外，「文策學院 TAICCA School」自 2023 至 2024 與法國、韓國等國際單位合作的培訓工作坊，包含「TAICCA x PAS 國際劇情長片培訓工作坊」、「Serial Bridges 劇集開發培訓工作坊」與「IP 改編影視作品開發工作坊」，將分別在 TCCF 期間舉辦提案專場，展示培訓及開發成果。",
        },
        {
          type: "subtitle",
          text: "「Story to Screen 故事專場」，助臺灣原創故事跨域開發",
        },
        {
          type: "paragraph",
          text: "在「Project to Screen 企畫專場」之外，「Story to Screen 故事專場」則聚焦有跨域潛力、適合影視改編的故事，涵蓋出版、漫畫及原創故事概念，入選者同樣需於 TCCF 前參與「提案培訓工作坊」。為鼓勵創作與吸引投件，大會將邀請國內相關領域專業人士選出一件作品，由文策院頒發「TAICCA AWARD：Best story」獎項及獎金新台幣 30 萬元。",
        },
        {
          type: "paragraph",
          text: "此外，文策院今年起與法語人出版協會（SCELF）展開合作，舉辦「Shoot the Book! TCCF 專場」，也將呈現來自法國與臺灣具有影視改編潛力的出版品提案。「Story to Screen 故事專場」各專場將分別於六月起向國內業者和創作者開放徵件。",
        },
        {
          type: "paragraph",
          text: "文策院董事長蔡嘉駿表示，去年《文創法》修法後，在文化投資環境友善的誘因下，文策院陸續與國內三大電信公司、科技公司如華碩和威剛，以及國際影視內容業者如 CJ ENM Hong Kong、華納兄弟探索集團等共組基金，加上「內容開發專案計畫-前期開發支持」（CCDP）以及「國際合作投資方案」（TICP 2.0）帶來的資金活水，期待能延續 2024年臺灣在柏林及坎城等展會的好成績， 在 TCCF 期間能媒合、催生更多具有國際市場性的優質作品。",
        },
        {
          type: "paragraph",
          text: "「2024 TCCF 創意內容大會」將於今年 11 月 5 日至 11 月 8 日舉辦，是亞洲重要的內容產業交易盛會，每年吸引全球多國買家與賣家齊聚交流洽商。活動分為「PITCHING 提案大會」、「MARKET 市場展」與「FORUM 國際論壇」三大單元，藉由提案大會媒合潛力 IP 與國際資金、市場展帶動全球內容產業專業人士商務交易與開發，以及國際論壇交流實務經驗及產業未來趨勢，為專業人才對接產業資源。",
        },

        {
          type: "noneStyleList",
          content: [
            {
              title: "2024「TCCF PITCHING 提案大會」徵件",
              item: [
                "徵件期間：2024/06/03（一）~ 07/31（三）",
                "徵件網址請留意官網<a href='https://www.tccf.org.tw/'>（https://www.tccf.tw/）</a>公告",
                "入選名單將於 9 月公布",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 20240502,
      title: "2024 TCCF 創意內容大會日期與活動單元公佈",
      banner: "/images/about/announcement/20240502/banner.jpeg",
      article: [
        {
          type: "paragraph",
          text: "「TCCF 創意內容大會」是亞洲重要內容產業盛會，每年吸引全球多國買賣家齊聚交流洽商，2024 年 TCCF 將於 11 月 5 日至 11 月 8 日於臺北南港展覽館二館 7 樓舉辦，共分成「PITCHING 提案大會」、「MARKET 市場展」與「FORUM 國際論壇」三大單元。TCCF 持續提供文化內容產業商務服務，媒合潛力 IP 提案與國際資金，帶動全球專業人士商務交易與開發，交流實務經驗及產業未來趨勢，為內容產製與專業人才對接產業資源。",
        },
        {
          type: "image",
          link: "/images/about/announcement/20240502/1.jpg",
        },
        {
          type: "subtitle",
          text: "「TCCF PITCHING 提案大會」（11 月 5 至 11 月 8 日）",
        },
        {
          type: "paragraph",
          text: "匯集國內外市場潛力內容提案，囊括長片、影集、動畫、紀錄片到出版、漫畫、原創故事概念，吸引來自全球內容產業專業人士參與，媒合提案與國際資源及資金，催生全球熱門作品。",
        },
        {
          type: "innertitle",
          text: "「Project to Screen 企畫專場」",
        },
        {
          type: "paragraph",
          text: "「Project to Screen 企畫專場」囊括長片、劇集、動畫及紀錄片等類別，將由國際評審選出吸睛提案，同時「文策學院 TAICCA School」 與國際單位合作提案項目也將在此首次曝光。本專場將致力媒合潛力企畫與資金，促進內容對接國際市場，強化產業網絡連結，催生更多優秀影視作品。",
        },
        {
          type: "paragraph",
          text: "開放全球企畫案報名，讓買家能看到更多元的國內外優秀影視企畫。入選此類別專場，並於 PITCHING 提案大會上進行提案的企畫案，即擁有文策院「內容開發專案計畫－前期開發支持 (CCDP)」與「國際合作投資專案計畫 (TICP 2.0)」的申請資格；各專場亦將設置合作獎項，期望帶動更多資金進駐，加速企畫開發製作，催生更多熱門影視作品。",
        },
        {
          type: "innertitle",
          text: "「Story to Screen 故事專場」",
        },
        {
          type: "paragraph",
          text: "「Story to Screen 故事專場」精選具影視改編潛力的故事 IP，專場涵蓋出版文本、漫畫、原創故事概念等，並與國際轉譯影視推廣品牌 Shoot the Book! 合作，透過公開提案與洽商會議，展示優秀原創作品，連結國內外影視產業專業人士與創作者，開啟更多 IP 跨域發展機會，讓好故事被看見。‍",
        },
        {
          type: "innertitle",
          text: "2024 TCCF PITCHING 提案大會相關時程",
        },
        {
          type: "styleList",
          content: [
            {
              title: "",
              item: [
                "5 月初：提案徵件報名資訊公告",
                "06/03（一）~ 07/31（三）：全球企畫報名",
                "9 月初：各專場入選提案公告、買家展證開放購買",
                "10 月：各專場開放報名",
                "11/05-11/08：TCCF PITCHING 提案大會",
              ],
            },
          ],
        },
        {
          type: "paragraph",
          text: "更多詳情請留意官網公告，或洽：project@tccf.tw",
        },
        {
          type: "image",
          link: "/images/about/announcement/20240502/2.jpg",
        },
        {
          type: "subtitle",
          text: "「TCCF MARKET 市場展」（11 月 5 至 11 月 8 日）",
        },

        {
          type: "paragraph",
          text: "聚焦國際影視內容與潛力 IP 的版權交易，擴大結合影視產業鏈，涵蓋內容開發、拍攝資源、影像技術等各領域業者與專業人士，探索商業合作與交流，拓展全球市場。",
        },
        {
          type: "styleList",
          content: [
            {
              title: "",
              item: [
                "5 月初：徵展資訊公告",
                "06/03（一）：徵展開始",
                "06/03（一）-06/30（一）：國內廠商早鳥價",
                "07/01 （一）-07/31（三）：國內廠商半價",
                "8 月起恢復原價",
                "8 月中：徵件及會員系統上線",
                "10 月： 開放線上會議預約",
                "11/05-11/08：TCCF MARKET 市場展",
              ],
            },
          ],
        },
        {
          type: "paragraph",
          text: "更多詳情請留意官網公告，或洽：project@tccf.tw",
        },
        {
          type: "image",
          link: "/images/about/announcement/20240502/3.jpg",
        },
        {
          type: "subtitle",
          text: "「TCCF FORUM 國際論壇」（11 月 5  至 11 月 8 日）",
        },
        {
          type: "paragraph",
          text: "邀請國內外內容產業專家分享實務經驗及產業未來趨勢，提供內容產業專業人士最豐富完整的業界脈動。",
        },
        {
          type: "paragraph",
          text: "更多詳情請留意官網公告，或洽：contact@tccf.tw",
        },
        {
          type: "image",
          link: "/images/about/announcement/20240502/4.jpg",
        },
        {
          type: "noneStyleList",
          content: [
            {
              title: "2024 TCCF 創意內容大會",
              item: [
                "日期｜2024 年 11 月 05 日 至 08 日",
                "地點｜南港展覽館二館 7 樓",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 20231115,
      title:
        "「2023 TCCF 創意內容大會」圓滿成功！ 法日韓美星等 29 國專業人士齊聚臺北　預估延伸交易金額超越去年成績",
      banner: "/images/about/news/20231115/banner.jpg",
      article: [
        {
          type: "paragraph",
          text: "亞洲重要內容產業盛會「2023 TCCF 創意內容大會」於 12 日圓滿成功！今年 TCCF 三大單元，吸引來自法、日、韓、美、星等共 29 國家/地區、241 位國際專業人士及國際買家以及上百家國內外業者齊聚，為期 6 天的展會超過 2 萬人次專業人士參與，媒合超過 2,490 場商務會議，預估延伸交易金額將突破往年成績，展會盛況空前，國際人士積極參與，讓 TCCF 躍升成為亞洲不容錯過的重要的展會。",
        },
        {
          type: "image",
          link: "/images/about/news/20231115/1.jpg",
        },
        {
          type: "paragraph",
          text: "文策院院長盧俊偉表示，2023 TCCF 是展現國際影響力的一年，不僅三單元皆創下歷年最大規模，亦吸引大批國際嘉賓參與，包括日本富士電視台、東京電視台、國際影音串流平台 Netflix、韓國 CJ ENM、法國國家電影與動畫中心（CNC）、法國 Series Mania 劇集展等產業龍頭代表皆親自來台，除了版權市場交易之外，還提供創作者找到潛在國際投資者或合製夥伴的機會，全方位與國際接軌。",
        },
        {
          type: "paragraphTitle",
          text: "《雪水消融的季節》、《Mother Maybe》勇奪 3 萬美金雙首獎",
        },
        {
          type: "paragraph",
          text: "今年「PITCHING」首度開放全球徵件、提供高額獎金，吸引 29 個國家/地區共 539 件作品報名。由於今年入選企劃亮眼優異、競爭相當激烈，主辦單位文策院及 CNC 於（10）日頒獎典禮當日加碼 1 名「TAICCA X CNC AWARD」首獎，最終共頒出 30 個獎項，總獎金超過新臺幣 600 萬元。本屆雙首獎「TAICCA X CNC AWARD」分別由臺日合製紀錄片企劃案《雪水消融的季節》及菲律賓長片企劃案《Mother Maybe》獲獎，各自抱回美金 3 萬元獎金；「中華電信獎」則由影集企劃案《打掃阿姨》抱回新臺幣 60 萬元獎金；故事提案由《女二》獨得遠傳電信所提供的最大獎新臺幣 30 萬元獎金，另《瘋人院之旅》、《腥紅速寫》、《課金派戀愛》拿下「TCCF AWARD：Best Story」，每名各獲得新臺幣 10 萬元獎金。",
        },
        {
          type: "image",
          link: "/images/about/news/20231115/2.jpg",
        },
        {
          type: "paragraph",
          text: "何潤東導演初試啼聲之長片企劃案《噬慾》亦頗受各方青睞，一口氣抱回「台北國際影視大獎」新臺幣 30 萬元獎金、「大川大立獎」新臺幣 15 萬元獎金及印尼後期公司價值美金 3 萬元的「MIFFEST 獎」，總價值達新臺幣 142 萬元，堪稱最大贏家！何潤東表示，TCCF 是一個很棒的交流平台，可以跟更多人分享作品，認識志同道合的夥伴，「畢竟這是自己的第一部長片，來到這裡彷彿像新生兒初學走路，透過業界先進給予很多意見交流，獲益良多。」",
        },

        {
          type: "image",
          link: "/images/about/news/20231115/3.jpg",
        },
        {
          type: "paragraphTitle",
          text: "國際買家踴躍來臺　版權交易洽談熱絡",
        },
        {
          type: "paragraph",
          text: "在「MARKET」展會期間，來自臺灣、法國、日本、韓國、香港、新加坡、越南等上百家國內外業者齊聚，並促成約 1400 場會議，許多國際買家紛紛表示高度興趣，積極洽談版權交易內容。公視總經理徐秋華表示，TCCF 是一個與國際產業交流非常好的平台，在展會期間獲得很多國際合製及購片的機會，此次公廣集團以多元的創作內容參展，許多國外業者都表示高度的興趣，在國際合製的部分，已與馬來西亞、日本公司談成合作，期待接下來的合作成果。",
        },
        {
          type: "image",
          link: "/images/about/news/20231115/4.jpg",
        },
        {
          type: "paragraphTitle",
          text: "AR 作品《黑》預約即秒殺",
        },
        {
          type: "paragraph",
          text: "「INNOVATIONS」單元以「前往創作者的未至之境」為題，共展出 21 件來自國內外的作品，橫跨 MR、AR、AI 等領域，並剖析 Web3、虛擬製作等產業面貌。如結合 AR 與容積擷取技術的作品《黑》，開放預約立即秒殺；入圍 7 項金馬獎熱門影片《老狐狸》特效幕後花絮，吸引不少觀眾駐足停留，一窺虛擬製作技術的實際應用狀況，觀展人次破萬人。今年除了展示作品之外，另規劃 10 場對話沙龍、3 場跨域工作坊和 6 場產業直擊活動，許多業者人士前來與會交流，促成近百場媒合會議。威尼斯影展沉浸式單元策展人 Liz Rosenthal ，此次在「大師講堂」分享當前沉浸式創作趨勢及策展人選片心法，她提到，「TCCF 是一個很棒的平台，可以看到臺灣最新的沉浸式作品，並與相關業界人士交流，我相當於樂於在威尼斯影展介紹這些臺灣的優秀作品。」",
        },
        {
          type: "image",
          link: "/images/about/news/20231115/5.jpg",
        },
        {
          type: "image",
          link: "/images/about/news/20231115/6.jpg",
        },

        {
          type: "paragraphTitle",
          text: "主舞台「INDUSTRY STAGE」場場爆棚",
        },
        {
          type: "paragraph",
          text: "今年大會主舞台「INDUSTRY STAGE」活動不斷，共舉辦 3 場記者會、3 場發布會、9 場論壇，亮點不斷。在展會期間，文策院已分別與韓國娛樂龍頭「CJ ENM」集團、法國國家電影與動畫中心（CNC）簽署合作意向書，並宣布與影音串流平臺 LINE TV 攜手合作《Be Love, Go Love - 華語原創影集開發計畫》，積極拓展臺灣文化內容的全球市場版圖。",
        },

        {
          type: "paragraph",
          text: "而全臺最大 IP 孵育平台「鏡文學」、影視龍頭「大慕影藝」與「大慕可可」皆選擇在 TCCF 首度曝光最新影視開發計畫。「鏡文學」宣布 8 部影視開發計畫，包括犯罪懸疑劇《銀行員之死》、《她殺之罪》、家庭諜報劇《鑽石與麵包》等；「大慕影藝」攜手「大慕可可」舉辦聯合發布會，宣告年底即將開拍改編自韓國人氣網路漫畫《梨泰院Class》的《來！金來號！》，並公布《我們與惡的距離2》的卡司與開拍計畫，現場星光熠熠，場面相當熱絡。",
        },

        {
          type: "paragraph",
          text: "在法國政府的 ICC Immersion Taiwan 計畫之下，法國館特別於主舞台舉辦「法國文創與內容產業：卓越與創新」活動，將此次來臺參展、橫跨視覺藝術、音樂、VR/XR 和博物館學等領域的 9 家法國公司介紹給臺灣產業、媒合潛在合作夥伴，透過 TCCF 加深臺法交流、締造文化商機！此外，在 TCCF 展會期間，法國 Series Mania 劇集展總監 Laurence Herszberg 宣布，將與文策院開啟「Serial Bridges 劇集工作坊」的計畫，致力發展臺歐劇集合製的可能，強化臺灣在影視製作的重要性。此計畫將在明年 3 月 Series Mania 展會期間展開一連串的培訓課程，可望為雙邊人才的創造更多交流與精進機會。",
        },
        {
          type: "image",
          link: "/images/about/news/20231115/7.jpg",
        },
        {
          type: "paragraph",
          text: "「演員之路-撕掉標籤與突破」論壇壓軸登場，由金鐘視后林依晨、金馬影后謝盈萱與台北電影節影后許瑋甯擔任與談者，與主持人金鐘主持人Janet 謝怡芬深度對談，當主持人問到除了演員之外的新嘗試時，許瑋甯提到想開畫展、林依晨想當作家，也喜歡故事開發，同時透露有劇本在醞釀中。謝盈萱透露近期投遞了藝術家駐村計畫，此場星光陣容吸引 200 位觀眾滿場聆聽，拉近女明星與粉絲的真實距離。",
        },
        {
          type: "image",
          link: "/images/about/news/20231115/8.jpg",
        },
        {
          type: "paragraph",
          text: "「TCCF 創意內容大會」是國際內容版權交易與創投提案平台，每年11月吸引全球 20 多國買賣家齊聚臺北交流洽商，涵蓋創作、製作、發行、推廣的完整系統，讓創作者、業者和投資者得互相連結與探索。 TCCF 提供作品版權交易所需服務，媒合全球潛力 IP 提案與國際資金，帶動全球專業人士交流創意與經驗，並展出實驗性新型態的文化內容，期望帶動全球更多專業人士交流創意與經驗，促進臺灣文化內容產業接軌國際。",
        },

        {
          type: "styleList",
          content: [
            {
              title: "",
              item: [
                "TCCF 官網：www.tccf.tw",
                "TCCF 官方 Linkedin： www.linkedin.com/company/taiwan-creative-content-fest-tccf",
                "TCCF 官方 Facebook ：www.facebook.com/TCCFTaiwanCreativeContentFest",
                "TCCF Press Kit：www.tccf.tw/press",
              ],
            },
          ],
        },

        {
          type: "styleList",
          content: [
            {
              title: "",
              item: [
                "【新聞聯絡人】",
                "新聞協力 DDG 美商方策顧問台灣分公司",
                "鄭秀圓 0921-993-316 steffi.cheng@ddg.com.tw",
              ],
            },
          ],
        },

        {
          type: "styleList",
          content: [
            {
              title: "",
              item: [
                "文化內容策進院新聞聯絡人",
                "陳昱勲 0988-543-227 steven2961511@taicca.tw",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 20231110,
      title:
        "2023 TCCF 提案大會《雪水消融的季節》、《Mother Maybe》勇奪 3 萬美金雙首獎",
      banner: "/images/about/news/20231110/banner.jpeg",
      article: [
        {
          type: "paragraph",
          text: "亞洲重要內容產業盛會「2023 TCCF 創意內容大會」，今天在臺北文創大樓 14 樓舉辦提案大會頒獎典禮，由於今年來自世界各地入選的企劃案水準優異，競爭相當激烈，主辦單位文策院及 CNC 於頒獎典禮當天加碼 1 名「TAICCA X CNC AWARD」首獎，最終共頒發 30 個獎項，總獎金超過新臺幣 600 萬，盼催生更多潛力大作。最終「TAICCA X CNC AWARD」2 個大獎分別由臺、日紀錄片企劃案《雪水消融的季節》及菲律賓長片企劃案《Mother Maybe》雙獲首獎，各自抱回美金 3 萬元獎金，「中華電信獎」則由影集企劃案《打掃阿姨》抱回新台幣 60 萬元獎金；故事提案由《女二》獨得遠傳電信所提供的最大獎新臺幣 30 萬元獎金，另《瘋人院之旅》、《腥紅速寫》、《課金派戀愛》拿下「TCCF AWARD：Best Story」，每名各獲得新臺幣 10 萬元獎金。",
        },
        {
          type: "paragraph",
          text: "今（10）日文策院董事長蔡嘉駿、文策院院長盧俊偉以及獎項合作夥伴包括中華電信個人家庭分公司總經理胡學海、台灣大哥大新媒體事業副總經理李芃君、遠傳電信數位娛樂營運長蔡俊榮等重要人士都親臨現場支持。文策院董事長蔡嘉駿表示，今年提案大會盛況空前，能量充沛，文策院已積極與韓國、法國、日本以及臺灣三大電信合作，期望提供創作者更多動能、資金，並取得更多國際合作機會。",
        },

        {
          type: "paragraphTitle",
          text: "「Project to Screen」企劃提案大獎",
        },
        {
          type: "paragraph",
          text: "今年獲得「TAICCA X CNC AWARD」大獎的作品《雪水消融的季節》，是臺灣導演羅苡珊首部紀錄長片，來自於導演個人經歷，該片描述羅苡珊的摯友前往尼泊爾登山卻不幸罹難，多年後，她重回摯友走過的山路，同時也獲得自我療癒。羅苡珊表示，此次獲獎完全出乎預期，這是第一次文策院有紀錄片專場提案，在入選時已經很開心，「臺灣紀錄片沒有很多國際提案機會，TCCF 不只提供其他類型提案，也提供紀錄片類別，這對紀錄片向世界發聲是很大的鼓勵。」國際評審團表示，《雪水消融的季節》傳遞的情感很強烈，彷彿隨著鏡頭的腳步走這段旅程，有評審甚至在提案當下就感動落淚，獲得多數評審一致認同。",
        },
        {
          type: "paragraph",
          text: "來自菲律賓恐怖奇幻電影《Mother Maybe》，融合菲律賓民間傳說，闡述找尋家庭與自我的過程，除了獲得「TAICCA X CNC AWARD」大獎之外，同時也獲得「MPA Grand 獎」、「台中拍開發獎」的肯定。《Mother Maybe》製片人 Arden Rod Condez 表示，「非常激動，我們從未預料會得獎，這是我們第一次參與提案、第一次來到台灣，我非常高興《Mother Maybe》可以得到很多人的共鳴。」評審團表示，《Mother Maybe》融合東南亞神話、個人故事以及親子元素，故事相當完整，團隊提案能力也非常好，因此獲得評審青睞。",
        },
        {
          type: "paragraph",
          text: "此外，《誰是被害者》導演莊絢維的影集企劃案《打掃阿姨》，一舉拿下「中華電信獎」和「Series Mania 獎」的殊榮。莊絢維表示「謝謝文策院、中華電信、Series Mania 的支持，我們創作團隊非常熱情投入故事的角色，很開心來到 TCCF，感受到這麼多人跟我們有共鳴，我們會珍惜這個鼓勵，好好完成作品。」",
        },

        {
          type: "paragraphTitle",
          text: "「Story to Screen」故事提案大獎",
        },
        {
          type: "paragraph",
          text: "本屆故事提案則由《瘋人院之旅》、《腥紅速寫》、《課金派戀愛》拿下「TCCF AWARD：Best Story」，分別獲得新臺幣 10 萬元獎金。贏得該專場最大獎「遠傳friDay影音原創故事獎」及「TVBS 故事影響力大獎」的《女二》，作者鄧九雲表示「創作的過程很孤獨，要讓作品被看見需要整個團隊，感謝戰友。」評審團表示，今年入選作品的整體表現，形式相當多元，類型涵蓋真實歷史、科幻、愛情、諜報、推理懸疑、職場等，讓人期待最後影視化的成果。",
        },

        {
          type: "paragraph",
          text: "「TCCF AWARD：Best Story」共有三部得獎作品：《腥紅速寫》取材自臺灣第一起驚悚的學童毒殺案，謎團製造所股份有限公司版權經理李潔表示，「透過這次機會可以讓《腥紅速寫》被更多國外影視製作公司、遊戲製作公司以及一般讀者看到這個故事，相當開心。」而《課金派戀愛》為 LINE WEBTOON 的潛力新作，探討虛擬網路世界中再現生活與慾望的衝突；LINE WEBTOON 編輯部團隊表示，「謝謝作家 HOM 畫出這麼優秀的作品，目前我們已經連載超過百部作品。期待未來可以與不同文化產業先進合作。」而《瘋人院之旅》曾獲 2021 金漫獎年度漫畫獎 ，光磊國際版權副總傅宗玉表示，「這本書是臺灣第一本以漫畫探討精神疾病的作品，希望藉由這樣的故事讓更多人了解精神病患的內心世界。」",
        },

        {
          type: "paragraph",
          link: "「TCCF AWARD：Best Story」共有三部得獎作品：《腥紅速寫》取材自臺灣第一起驚悚的學童毒殺案，謎團製造所股份有限公司版權經理李潔表示，「透過這次機會可以讓《腥紅速寫》被更多國外影視製作公司、遊戲製作公司以及一般讀者看到這個故事，相當開心。」而《課金派戀愛》為 LINE WEBTOON 的潛力新作，探討虛擬網路世界中再現生活與慾望的衝突；LINE WEBTOON 編輯部團隊表示，「謝謝作家 HOM 畫出這麼優秀的作品，目前我們已經連載超過百部作品。期待未來可以與不同文化產業先進合作。」而《瘋人院之旅》曾獲 2021 金漫獎年度漫畫獎 ，光磊國際版權副總傅宗玉表示，「這本書是臺灣第一本以漫畫探討精神疾病的作品，希望藉由這樣的故事讓更多人了解精神病患的內心世界。」",
        },
        {
          type: "paragraph",
          text: "今年提案大會「PITCHING」首度開放全球徵件，並祭出多個現金獎項，吸引臺灣、日本、韓國、香港、馬來西亞、印尼、法國、德國、挪威、美國等29個國家/地區共539件作品報名。在「Project to Screen」企劃提案方面，徵集來自全球的長片、影集、動畫長片及長短影集、紀錄長片及系列等類別，最後 43 件提案入選；「Story to Screen」故事提案，則鼓勵國內具 IP 影視發展潛力的臺灣原創參與，共選出 10 件入圍作品。",
        },
        {
          type: "paragraph",
          text: "今年邀請到國內重要單位及國際展會夥伴參與，包括遠傳電信、台灣大哥大、富邦文教基金會、法國里爾 Series Mania 劇集展、義大利烏迪內遠東影展、美國電影協會、新加坡亞洲電視論壇及內容交易市場展、木棉花國際股份有限公司、遊戲橘子、艾慕影藝、華納兄弟探索集團、國內縣市政府及各大電視台等皆來設獎。此外，大會也為獲獎者提供直通國際創投提案會的機會，包括印尼 Docs by the Sea 紀錄片提案大會、義大利烏迪內遠東影展、法國里爾 Series Mania 劇集展、洛杉磯 Global Film & Television Immersion Program、CCDF 華人紀錄片提案大會等知名國際展會，期盼催生更多優質的影視作品。",
        },

        {
          type: "styleList",
          content: [
            {
              title: "",
              item: [
                "2023 PITCHING 提案大會獎項介紹：www.tccf.tw/pitching-awards",
                "2023年 PITCHING 提案大會入選名單：www.tccf.tw/pitching-selected-entries",
                "2023年 PITCHING 提案大會得獎名單：https://www.tccf.tw/post/2023pitchingawards",
              ],
            },
          ],
        },

        {
          type: "styleList",
          content: [
            {
              title: "",
              item: [
                "TCCF 官網：www.tccf.tw",
                "TCCF 官方 Linkedin： www.linkedin.com/company/taiwan-creative-content-fest-tccf",
                "TCCF 官方 Facebook：www.facebook.com/TCCFTaiwanCreativeContentFest",
                "TCCF Press Kit：www.tccf.tw/press",
              ],
            },
          ],
        },

        {
          type: "styleList",
          content: [
            {
              title: "",
              item: [
                "【新聞聯絡人】",
                "新聞協力 DDG 美商方策顧問台灣分公司",
                "鄭秀圓 0921-993-316 steffi.cheng@ddg.com.tw",
              ],
            },
          ],
        },

        {
          type: "styleList",
          content: [
            {
              title: "",
              item: [
                "文化內容策進院新聞聯絡人",
                "陳昱勲 0988-543-227 steven2961511@taicca.tw",
              ],
            },
          ],
        },
      ],
    },
  ];

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
