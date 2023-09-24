import Language from "@/components/Language";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getCompetition } from "@/utils/registration";
import { cookies } from "next/headers";

const fetchCompetition = async () => {
  try {
    const res = await getCompetition();
    return res;
  } catch (error) {
    console.log(error);
  }
};

async function Headers() {
  const accessToken = cookies().get("accessToken")!;
  const competition = await fetchCompetition();

  if (competition === undefined) return <></>;
  return (
    <div className="fixed z-10 box-border w-[calc(100vw-3rem)] h-[80px] mt-4 mx-4 py-6 px-12 rounded-[10px] flex items-center justify-between ring-1 ring-slate-200/70 bg-gradient-to-br from-[#fff6] to-[#FFFFFF03] before:backdrop-blur-lg before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:rounded-[10px]">
      <div>
        <Link href="/">
          <Image
            src="/logo2.png"
            height={100}
            width={150}
            className="h-[48px] w-[153px]"
            priority
            quality={50}
            alt="Logo"
          />
        </Link>
      </div>
      <Navbar competition={competition} isLogin={accessToken !== undefined} />
      <div className="hidden md:block">
        <Language />
      </div>
    </div>
  );
}

export default Headers;
