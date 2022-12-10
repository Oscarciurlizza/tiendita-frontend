import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-white">
      <Image
        className="sm:w-full w-10"
        width={100}
        height={100}
        src="/logo.svg"
        alt="logo"

      />
    </Link>
  );
}
