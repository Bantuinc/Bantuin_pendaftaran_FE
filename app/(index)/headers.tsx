import Language from "@/components/Language";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function Headers() {
  return (
    <div className="fixed z-10 box-border w-[calc(100vw-3rem)] h-[80px] mt-4 mx-4 py-6 px-12 rounded-[10px] flex items-center justify-between ring-1 ring-slate-200/70 bg-gradient-to-br from-[#fff6] to-[#FFFFFF03] before:backdrop-blur-lg before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:rounded-[10px]">
      <div>
        <Link href="/">
          <Image src="/logo2.png" height={100} width={150} alt="Logo" />
        </Link>
      </div>
      <Navbar />
      <div className="hidden md:block">
        <Language />
      </div>
    </div>
  );
}

export default Headers;
