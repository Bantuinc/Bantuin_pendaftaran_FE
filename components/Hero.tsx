import Image from "next/image";
import { hind, cocogoose } from "@/fonts/font";
import Background from "@/public/background.webp";
import Link from "next/link";

function Hero() {
  return (
    <section className="p-12 pt-28 md:p-6 relative min-h-[110vh] flex flex-col-reverse md:flex-row gap-6 justify-center items-center">
      <Image
        src={Background}
        alt="Hero Login Image"
        fill
        className="z-[-1] object-cover"
        sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
        priority={true}
        placeholder="blur"
        quality={50}
      />
      <div className="flex px-9 py-16 ring-2 ring-slate-200/70 rounded-[25px] bg-gradient-to-tr from-[#ccc3] to-[#ccca] backdrop-blur-sm">
        <Image
          src="/logo2.png"
          height={100}
          width={370}
          quality={50}
          alt="Hero"
          className="object-contain w-auto h-auto"
        />
      </div>

      <div className="md:max-w-[50%] antialiased drop-shadow-xl">
        <h1
          className={`md:text-6xl text-5xl py-2 font-extrabold bg-gradient-to-r from-[#ffffffdb] to-[#FFF] text-transparent bg-clip-text ${cocogoose.className}`}
        >
          The{" "}
          <span className={`${hind.className} md:text-[72px] text-6xl`}>
            14
          </span>
          <span className="align-super md:text-3xl text-2xl">th</span>{" "}
          Indonesian Student Mining Competition
        </h1>
        <Link href="/register">
          <button
            className={`mt-6 px-6 py-2 rounded-lg text-xl text-orange-50 font-bold bg-[#FFA31D] ${hind.className} hover:text-white hover:bg-orange-400 hover:translate-x-1 transition-all duration-300`}
          >
            <span className="drop-shadow-md">Register Now!</span>
          </button>
        </Link>
        <h3
          className={`mt-6 md:text-2xl text-xl font-bold bg-gradient-to-r from-[#ffffffdb] to-[#FFF] text-transparent bg-clip-text ${hind.className}`}
        >
          Welcome, let’s embrace unity, knowledge, and excellence here.
          #MineTheFuture
        </h3>
      </div>
    </section>
  );
}

export default Hero;
