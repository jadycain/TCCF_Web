"use client";
import styles from "./sidebar.module.scss";
import { Fragment, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";

import { RiApps2Line } from "react-icons/ri"; // 創意內容大會
import { GrCube } from "react-icons/gr"; // 提案大會
import { AiOutlineInbox } from "react-icons/ai"; // 市場展
import { IoMdChatboxes } from "react-icons/io"; // 國際論壇

import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);

  const [menuDataList, setMenuDataList] = useState([
    {
      path: "about",
      title: "關於創意內容大會",
      menu: [
        {
          id: 1,
          title: "最新消息",
          link: "/about/news",
          icon: <RiApps2Line />,
          //   subMenu: [
          //     {
          //       title: "企劃專場1",
          //       link: "/",
          //     },
          //     {
          //       title: "企劃專場2",
          //       link: "/",
          //     },
          //   ],
          //   isOpen: false,
        },
        {
          id: 2,
          title: "媒體專區",
          link: "/about/media",
          icon: <RiApps2Line />,
          //   subMenu: [
          //     {
          //       title: "企劃專場3",
          //       link: "/",
          //     },
          //     {
          //       title: "企劃專場4",
          //       link: "/",
          //     },
          //   ],
          //   isOpen: false,
        },
      ],
    },

    {
      path: "pitching",
      title: "提案大會",
      menu: [
        {
          id: 1,
          title: "企畫專場",
          link: "/pitching/project",
          icon: <GrCube />,
          //   subMenu: [
          //     {
          //       title: "企劃專場1",
          //       link: "/",
          //     },
          //     {
          //       title: "企劃專場2",
          //       link: "/",
          //     },
          //   ],
          //   isOpen: false,
        },
        {
          id: 2,
          title: "故事專場",
          link: "/pitching/story",
          icon: <GrCube />,
          //   subMenu: [
          //     {
          //       title: "企劃專場3",
          //       link: "/",
          //     },
          //     {
          //       title: "企劃專場4",
          //       link: "/",
          //     },
          //   ],
          //   isOpen: false,
        },
      ],
    },
    {
      path: "market",
      title: "市場展",
    },
    {
      path: "forum",
      title: "國際論壇",
    },
  ]);

  const toogleSubMenu = (e, id) => {
    e.stopPropagation();
    setMenuDataList(
      menuDataList.map((data) => {
        return {
          ...data,
          menu: data?.menu?.map((menu) => {
            if (menu.id === id) {
              return {
                ...menu,
                isOpen: !menu.isOpen,
              };
            } else {
              return menu;
            }
          }),
        };
      })
    );
  };

  return (
    <div className={styles.sidebarWrapper}>
      {menuDataList
        .filter((data) => data.path === pathname.split("/")[1])
        .map((menuData) => (
          <Fragment key={menuData.title}>
            {/* <div className={styles.sidebarWrapper__title}>
              <div className={styles.sidebarWrapper__title_icon}>
                <IoHomeOutline />
              </div>
              <div className={styles.sidebarWrapper__title_text}>
                {menuData.title}
              </div>
            </div> */}
            <ul className={styles.sidebarWrapper__menuList}>
              {menuData?.menu?.map((menu) => (
                <li
                  key={menu.title}
                  className={styles.sidebarWrapper__menuList_menuItem}
                  onClick={(e) => toogleSubMenu(e, menu.id)}
                >
                  <div
                    className={
                      styles.sidebarWrapper__menuList_menuItem__menuItemContainer
                    }
                  >
                    <Link
                      href={menu.link}
                      style={{
                        color: pathname === menu.link ? "#51BA97" : "",
                      }}
                    >
                      {/* <div
                        className={
                          styles.sidebarWrapper__menuList_menuItem__menuItemContainer_icon
                        }
                      >
                        {menu.icon}
                      </div> */}

                      <div
                        className={
                          styles.sidebarWrapper__menuList_menuItem__menuItemContainer_text
                        }
                      >
                        {menu.title}
                      </div>
                    </Link>

                    {menu.subMenu && (
                      <div
                        className={
                          styles.sidebarWrapper__menuList_menuItem__menuItemContainer_arrow
                        }
                      >
                        <IoIosArrowDown />
                      </div>
                    )}
                  </div>

                  {menu.isOpen && menu.subMenu && (
                    <ul className={styles.sidebarWrapper__menuList_subMenuList}>
                      {menu.subMenu.map((subMenu) => (
                        <li
                          key={subMenu.title}
                          className={
                            styles.sidebarWrapper__menuList_subMenuList__subMenuItem
                          }
                        >
                          {subMenu.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
    </div>
  );
}
