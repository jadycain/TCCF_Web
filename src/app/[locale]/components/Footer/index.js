import styles from "./footer.module.scss";
import { Link } from "@/navigation";

// socail buttons
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container_listWrapper}>
          <div className={styles.footer__container_listWrapper__logo}>
            <img
              src={"/images/logo_white.svg"}
              alt={"logo"}
              sizes={"100%"}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <ul className={styles.footer__container_listWrapper__menu}>
            <li>
              <Link href={"/privacy_policy"}>{t("privacy_policy")}</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footer__container_socialWrapper}>
          <span>contact@tccf.tw</span>

          <ul className={styles.footer__container_socialWrapper__social}>
            <li>
              <Link href="https://www.instagram.com/taicca.tw/" target="_blank">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/TCCFTaiwanCreativeContentFest/"
                target="_blank"
              >
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link
                href="hhttps://www.linkedin.com/company/82535470/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/TAICCA_Official" target="_blank">
                <FaXTwitter />
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footer__container_copyRightWrapper}>
          <div className={styles.footer__container_copyRightWrapper__copyRight}>
            Copyright © TAICCA (Taiwan Creative Content Agency). All rights
            reserved
          </div>
        </div>
      </div>
    </div>
  );
}
