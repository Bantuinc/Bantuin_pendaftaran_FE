import Image from "next/image";
import Language from "./Language";
import Link from "next/link";

function Headers() {
  return (
    <div className="fixed z-10 box-border w-[calc(100vw-3rem)] h-[80px] mt-4 mx-4 py-6 px-12 rounded-[10px] flex items-center justify-between backdrop-blur-lg ring-1 ring-slate-200/70 bg-gradient-to-br from-[#fff6] to-[#FFFFFF03]">
      <div>
        <Link href="/">
          <Image src="/logo2.png" height={100} width={150} alt="Logo" />
        </Link>
      </div>
      <ul className="flex items-center gap-12 font-bold text-white">
        <li>
          <Link href={"/events"}>Events</Link>
        </li>
        <li>Competition</li>
        <li>About Us</li>
        <li>Partnership</li>
        <li>FAQ</li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
      <Language />
    </div>
  );
}

export default Headers;
