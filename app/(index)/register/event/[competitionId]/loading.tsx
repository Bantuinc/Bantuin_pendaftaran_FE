import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function Loading() {
  return (
    <div className="relative h-screen w-screen bg-[#296875]">
      <div className="absolute w-64 h-16 top-[calc(50%-2rem)] left-[calc(50%-8rem)] p-16 bg-white rounded-2xl shadow-xl text-slate-900 font-semibold text-2xl flex gap-2 justify-center items-center">
        Loading
        <span>
          <Image src="/3-dots-fade.svg" alt="loading" width={24} height={24} />
        </span>
      </div>
    </div>
  );
}

export default Loading;
