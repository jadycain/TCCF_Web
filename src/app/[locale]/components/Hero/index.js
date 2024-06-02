"use client";
import styles from "./hero.module.scss";
import ImageLoader from "../ui/image-loader";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className={styles.hero} ref={ref}>
      <ImageLoader
        src={"/images/home/hero.png"}
        sizes={"100%"}
        style={{
          objectFit: "cover",
        }}
        fill={true}
        alt={"hero"}
      />
      <div
        className={styles.hero__logo}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <ImageLoader
          src={"/images/logo_white.svg"}
          sizes={"100%"}
          style={{ width: "100%", height: "auto" }}
          alt={"logo"}
        />
      </div>
    </div>
  );
}
