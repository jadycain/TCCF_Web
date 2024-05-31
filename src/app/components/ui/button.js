import Link from "next/link";

export default function Button({ linkText, link }) {
  return (
    <Link href={link} className="button">
      {linkText}
    </Link>
  );
}
