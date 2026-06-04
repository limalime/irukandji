import Link from "next/link";
/** import Image from "next/image";
import wordmark from "@/public/images/wordmark.png";
import logo from "@/public/images/wordmark.png"; */

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0">
      <span className="font-primary text-2xl font-bold text-gray-100 tracking-wider">
        IRUKANDJI
      </span>
    </Link>
  );
}