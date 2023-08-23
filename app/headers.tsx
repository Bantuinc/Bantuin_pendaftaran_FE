import Image from "next/image";
import Language from "./Language";
import Link from "next/link";

function Headers() {
  return (
    <div className="fixed z-10 w-full h-[96px] py-6 px-12 flex items-center justify-between bg-white shadow-md">
      <div>
        <Image src="/logo2.png" height={100} width={150} alt="Logo" />
      </div>
      <ul className="flex items-center gap-12 font-bold text-primary-dark">
        <li>
          <Link href={"/events"}>Events</Link>
        </li>
        <li>Mining Competition</li>
        <li>About Us</li>
        <li>Partnership</li>
        <li>FAQ</li>
      </ul>
      <Language />
    </div>
  );
}

export default Headers;
