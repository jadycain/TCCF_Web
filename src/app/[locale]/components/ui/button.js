import { Link } from "@/navigation";

export default function Button({ linkText, link, blank }) {
  return (
    <Link href={link} className="button" target={blank ? "_blank" : ""}>
      {linkText}
    </Link>
  );
}
