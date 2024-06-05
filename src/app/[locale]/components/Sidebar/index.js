"use client";
import styles from "./sidebar.module.scss";
import { Fragment, useState, useEffect } from "react";

import { RiApps2Line } from "react-icons/ri";
import { GrCube } from "react-icons/gr";

import useWindowSize from "@/app/[locale]/(tool)/useWindowSize";

import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import { Link } from "@/navigation";
import { useTranslations, useLocale } from "next-intl";
export default function Sidebar() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const windowSize = useWindowSize();

  const [menuDataList, setMenuDataList] = useState([
    {
      path: "about",
      title: "關於創意內容大會",
      isOpen: false,
      id: 1,
      menu: [
        {
          id: 1,
          title: t("news"),
          link: "/about/news",
          icon: <RiApps2Line />,
        },
        {
          id: 2,
          title: t("press"),
          link: "/about/media",
          icon: <RiApps2Line />,
        },
      ],
    },

    {
      path: "pitching",
      title: "提案大會",
      isOpen: false,
      id: 2,
      menu: [
        {
          id: 1,
          title: t("project"),
          link: "/pitching/project",
          icon: <GrCube />,
        },
        {
          id: 2,
          title: t("story"),
          link: "/pitching/story",
          icon: <GrCube />,
        },
      ],
    },
    {
      path: "market",
      title: "市場展",
      isOpen: false,
      id: 3,
    },
    {
      path: "forum",
      title: "國際論壇",
      isOpen: false,
      id: 4,
    },
  ]);

  const toogleSubMenu = (e, id) => {
    e.stopPropagation();

    setMenuDataList(
      menuDataList.map((data) => {
        if (data.id === id) {
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
    <div className={styles.sidebarWrapper}>
      {windowSize.width > 820
        ? menuDataList
            .filter((data) => data.path === pathname.split("/")[2])
            .map((menuData) => (
              <Fragment key={menuData.title}>
                <div className={styles.sidebarWrapper__title}>
                  <div className={styles.sidebarWrapper__title_text}>
                    {menuData.title}
                  </div>
                </div>
                <ul className={styles.sidebarWrapper__menuList}>
                  {menuData?.menu?.map((menu) => (
                    <li
                      key={menu.title}
                      className={styles.sidebarWrapper__menuList_menuItem}
                    >
                      <div
                        className={
                          styles.sidebarWrapper__menuList_menuItem__menuItemContainer
                        }
                      >
                        <Link
                          href={menu.link}
                          style={{
                            fontWeight:
                              `/${pathname.split("/")[2]}/${
                                pathname.split("/")[3]
                              }` === menu.link
                                ? "bold"
                                : "normal",
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
                        <ul
                          className={
                            styles.sidebarWrapper__menuList_subMenuList
                          }
                        >
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
            ))
        : menuDataList.map((menuData) => (
            <Fragment key={menuData.title}>
              <div
                className={styles.sidebarWrapper__title}
                onClick={(e) => toogleSubMenu(e, menuData.id)}
              >
                <div className={styles.sidebarWrapper__title_text}>
                  {menuData.title}
                </div>

                {menuData.menu && (
                  <div
                    className={styles.sidebarWrapper__title_icon}
                    style={{
                      transform: menuData.isOpen ? "rotate(180deg)" : "",
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                )}
              </div>
              <ul className={styles.sidebarWrapper__menuList}>
                {menuData.isOpen &&
                  menuData?.menu?.map((menu) => (
                    <li
                      key={menu.title}
                      className={styles.sidebarWrapper__menuList_menuItem}
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
                        <ul
                          className={
                            styles.sidebarWrapper__menuList_subMenuList
                          }
                        >
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
