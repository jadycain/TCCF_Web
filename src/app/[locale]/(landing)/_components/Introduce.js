"use client";

import styles from "./introduce.module.scss";
import ImageLoader from "@/app/[locale]/components/ui/image-loader";

import { RiApps2Line } from "react-icons/ri"; // 創意內容大會
import { GrCube } from "react-icons/gr"; // 提案大會
import { AiOutlineInbox } from "react-icons/ai"; // 市場展
import { HiOutlineChatAlt2 } from "react-icons/hi"; // 國際論壇

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Introduce() {
  function Item() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });

    return (
      <section className="testSection">
        <div ref={ref}>
          <figure className="progress">
            <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          </figure>
        </div>
      </section>
    );
  }

  return (
    <></>
    // <Item />
    // <section className={styles.introduceSection}>
    //   <div className={styles.introduceSection__container}>
    //     <div className={styles.introduceSection__container_image}>
    //       <ImageLoader
    //         src={"/images/introduce/progress.png"}
    //         sizes={"100%"}
    //         style={{ width: "100%", height: "auto" }}
    //         alt={"logo"}
    //       />
    //     </div>

    //     <div className={styles.introduceSection__container_intro}>
    //       <div className={styles.introduceSection__container_intro__title}>
    //         關於創意內容大會
    //       </div>
    //       <div className={styles.introduceSection__container_intro__content}>
    //         「TCCF
    //         創意內容大會」是亞洲重要內容產業盛會，每年吸引全球多國買賣家齊聚交流洽商，共分成「PITCHING
    //         提案大會」、「MARKET 市場展」與「FORUM 國際論壇」三大單元。TCCF
    //         持續提供文化內容產業商務服務，媒合潛力 IP
    //         提案與國際資金，帶動全球專業人士商務交易與開發，交流實務經驗及產業未來趨勢，為內容產製與專業人才對接資源。
    //       </div>
    //       <div>查看更多</div>
    //     </div>
    //   </div>

    //   <div className={styles.introduceSection__container}>
    //     <div className={styles.introduceSection__container_image}>
    //       <ImageLoader
    //         src={"/images/introduce/progress.png"}
    //         sizes={"100%"}
    //         style={{ width: "100%", height: "auto" }}
    //         alt={"logo"}
    //       />
    //     </div>

    //     <div className={styles.introduceSection__container_intro}>
    //       <div className={styles.introduceSection__container_intro__title}>
    //         關於創意內容大會
    //       </div>
    //       <div className={styles.introduceSection__container_intro__content}>
    //         「TCCF
    //         創意內容大會」是亞洲重要內容產業盛會，每年吸引全球多國買賣家齊聚交流洽商，共分成「PITCHING
    //         提案大會」、「MARKET 市場展」與「FORUM 國際論壇」三大單元。TCCF
    //         持續提供文化內容產業商務服務，媒合潛力 IP
    //         提案與國際資金，帶動全球專業人士商務交易與開發，交流實務經驗及產業未來趨勢，為內容產製與專業人才對接資源。
    //       </div>
    //       <div>查看更多</div>
    //     </div>
    //   </div>

    //   <div className={styles.introduceSection__progressBarWrapper}>
    //     <ul
    //       className={
    //         styles.introduceSection__progressBarWrapper_progressBarList
    //       }
    //     >
    //       <li
    //         className={
    //           styles.introduceSection__progressBarWrapper_progressBarList__progressBarItem
    //         }
    //       >
    //         <div
    //           className={
    //             styles.introduceSection__progressBarWrapper_progressBarList__progressBarItem_icon
    //           }
    //         >
    //           <RiApps2Line />
    //         </div>
    //         創意內容大會
    //       </li>
    //       <li
    //         className={
    //           styles.introduceSection__progressBarWrapper_progressBarList__progressBarItem
    //         }
    //       >
    //         <div
    //           className={
    //             styles.introduceSection__progressBarWrapper_progressBarList__progressBarItem_icon
    //           }
    //         >
    //           <GrCube />
    //         </div>
    //         提案大會
    //       </li>
    //       <li
    //         className={
    //           styles.introduceSection__progressBarWrapper_progressBarList__progressBarItem
    //         }
    //       >
    //         <div
    //           className={
    //             styles.introduceSection__progressBarWrapper_progressBarList__progressBarItem_icon
    //           }
    //         >
    //           <AiOutlineInbox />
    //         </div>
    //         市場展
    //       </li>
    //       <li
    //         className={
    //           styles.introduceSection__progressBarWrapper_progressBarList__progressBarItem
    //         }
    //       >
    //         <div
    //           className={
    //             styles.introduceSection__progressBarWrapper_progressBarList__progressBarItem_icon
    //           }
    //         >
    //           <HiOutlineChatAlt2 />
    //         </div>
    //         國際論壇
    //       </li>
    //     </ul>
    //   </div>
    // </section>
  );
}
