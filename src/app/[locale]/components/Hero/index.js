import styles from "./hero.module.scss";
import ImageLoader from "../ui/image-loader";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <ImageLoader
        src={"/images/home/hero.png"}
        sizes={"100%"}
        style={{
          objectFit: "cover",
        }}
        fill={true}
        alt={"hero"}
      />
      <div className={styles.hero__logo}>
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
