import { Link } from "@/navigation";

export default function Button({ linkText, link }) {
  return (
    <Link href={link} className="button">
      {linkText}
    </Link>
  );
}
