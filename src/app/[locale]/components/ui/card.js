import ImageLoader from "./image-loader";
import { Button } from "./button";
import { Link } from "@/navigation";

export default function Card({ title, time, image, tag, link }) {
  return (
    <div className="cardWrapper">
      <Link href={link}>
        <div className="cardWrapper__image">
          <ImageLoader
            src={image}
            sizes={"100%"}
            style={{
              objectFit: "cover",
            }}
            fill={true}
            alt={"hero"}
          />
        </div>

        <div className="cardWrapper__container">
          <div className="cardWrapper__container_title">{title}</div>
          <span className="cardWrapper__container_time">{time}</span>
          <span className="cardWrapper__container_tag"> # {tag}</span>
        </div>
      </Link>
    </div>
  );
}
