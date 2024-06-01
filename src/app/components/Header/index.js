"use client";
import Link from "next/link";
import styles from "./header.module.scss";
import ImageLoader from "../ui/image-loader";

import { usePathname } from "next/navigation";
import { AiOutlineGlobal } from "react-icons/ai";

import { RiApps2Line } from "react-icons/ri"; // 創意內容大會
import { RxCube } from "react-icons/rx"; // 提案大會
import { AiOutlineInbox } from "react-icons/ai"; // 市場展
import { HiOutlineChatAlt2 } from "react-icons/hi"; // 國際論壇
import { motion } from "framer-motion";
import { useState, useEffect, Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useWindowSize from "@/app/(tool)/useWindowSize";

import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoStorefrontOutline } from "react-icons/io5";

export default function Header() {
  const pathname = usePathname();
  const windowSize = useWindowSize();
  const refreshViewHeight = () => {
    const vh = windowSize.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    refreshViewHeight();
  }, [windowSize.width]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const [links, setLinks] = useState([
    {
      href: "/about",
      name: "關於創意內容大會",
      icon: <RxCube />,
      isHovered: false,
      color: "#171717",
      menu: [
        {
          id: 1,
          title: "最新消息",
          link: "/about/news",
        },
        {
          id: 2,
          title: "媒體專區",
          link: "/about/media",
        },
      ],
    },
    {
      href: "/pitching",
      name: "提案大會",
      icon: <LiaChalkboardTeacherSolid />,
      isHovered: false,
      color: "#80c3a8",
      menu: [
        {
          id: 1,
          title: "企畫專場",
          link: "/pitching/project",
          icon: <RxCube />,
        },
        {
          id: 2,
          title: "故事專場",
          link: "/pitching/story",
          icon: <RxCube />,
        },
      ],
    },
    {
      href: "/market",
      name: "市場展",
      icon: <IoStorefrontOutline />,
      isHovered: false,
      color: "#fbbc6c",
    },
    {
      href: "/forum",
      name: "國際論壇",
      icon: <HiOutlineChatAlt2 />,
      isHovered: false,
      color: "#fbd4e4",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const handleEnter = (href) => {
    setLinks(
      links.map((link) => {
        if (link.href === href) {
          return {
            ...link,
            isHovered: true,
          };
        }
        return link;
      })
    );
  };

  const handleLeave = () => {
    console.log("leave");
    setLinks(
      links.map((link) => {
        return {
          ...link,
          isHovered: false,
        };
      })
    );
  };

  const toogleSubMenu = (e, href) => {
    e.stopPropagation();

    setLinks(
      links.map((data) => {
        if (data.href === href) {
          return {
            ...data,
            isOpen: !data.isOpen,
          };
        } else {
          return {
            ...data,
            isOpen: false,
          };
        }
      })
    );

    // setMenuDataList(
    //   menuDataList.map((data) => {
    //     return {
    //       ...data,
    //       menu: data?.menu?.map((menu) => {
    //         if (menu.id === id) {
    //           return {
    //             ...menu,
    //             isOpen: !menu.isOpen,
    //           };
    //         } else {
    //           return menu;
    //         }
    //       }),
    //     };
    //   })
    // );
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__container_logoWrapper}>
          <div className={styles.header__container_logoWrapper__logo}>
            <Link href={"/"}>
              <ImageLoader
                src={"/images/logo_black.svg"}
                sizes={"100%"}
                style={{ width: "100%", height: "auto" }}
                alt={"logo"}
              />
            </Link>
          </div>
        </div>
        <motion.div
          className={styles.header__container_nav}
          animate={{
            transform:
              windowSize.width <= 820
                ? isOpen
                  ? "translateX(0%)"
                  : "translateX(100%)"
                : "translateX(0%)",
          }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <div className={styles.header__container_nav__container}>
            {links.map((link) => (
              <Fragment key={link.href}>
                <Link
                  href={link.href}
                  className={styles.header__container_nav__container_mainLink}
                  onMouseEnter={() => handleEnter(link.href)}
                  onMouseLeave={() => handleLeave(link.href)}
                  onClick={(e) => toogleSubMenu(e, link.href)}
                  style={{
                    borderColor:
                      windowSize.width > 820 && pathname.startsWith(link.href)
                        ? link.color
                        : "transparent",
                  }}
                >
                  <motion.div
                    className={styles.header__container_nav__icon}
                    animate={{
                      y: windowSize.width > 820 && link.isHovered ? "-100%" : 0,
                      opacity: windowSize.width > 820 && link.isHovered ? 1 : 0,
                      color:
                        windowSize.width > 820 && link.isHovered && link.color,
                    }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                  >
                    {link.icon}
                  </motion.div>

                  {link.name}
                  {link.menu && (
                    <div
                      className={
                        styles.header__container_nav__container_arrowIcon
                      }
                      style={{
                        transform: link.isOpen ? "rotate(180deg)" : "",
                      }}
                    >
                      <IoIosArrowDown />
                    </div>
                  )}
                </Link>
                {link.isOpen &&
                  link?.menu?.map((sub) => (
                    <ul
                      key={sub.link}
                      className={
                        styles.header__container_nav__container_subMenu
                      }
                    >
                      <li>
                        <Link href={sub.link}>{sub.title}</Link>
                      </li>
                    </ul>
                  ))}
              </Fragment>
            ))}
          </div>
          <div className={styles.header__container_nav__languageWrapper}>
            <div
              className={styles.header__container_nav__languageWrapper__icon}
            >
              <AiOutlineGlobal />
            </div>
            中文
          </div>
        </motion.div>

        <div
          className={styles.header__container_hambugerWrapper}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${
              styles.header__container_hambugerWrapper__container
            } ${isOpen ? "active" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
