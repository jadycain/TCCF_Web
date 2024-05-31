"use client";
import Link from "next/link";
import styles from "./header.module.scss";
import ImageLoader from "../ui/image-loader";

import { usePathname } from "next/navigation";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Header() {
  const pathname = usePathname();

  const links = [
    {
      href: "/about",
      name: "關於創意內容大會",
    },
    {
      href: "/pitching",
      name: "提案大會",
    },
    {
      href: "/market",
      name: "市場展",
    },
    {
      href: "/forum",
      name: "國際論壇",
    },
  ];

  if (typeof window !== "undefined") {
    localStorage.setItem("tccfLanguage", "ch");
  }

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
        <div className={styles.header__container_nav}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                borderColor: pathname.startsWith(link.href)
                  ? "#51BA97"
                  : "transparent",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className={styles.header__container_languageWrapper}>
          <div className={styles.header__container_languageWrapper__icon}>
            <AiOutlineGlobal />
          </div>
          中文
        </div>
      </div>
    </div>
  );
}
