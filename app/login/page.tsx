import Image from "next/image";
import { hind } from "../layout";

function Login() {
  return (
    <section
      className={`relative min-h-[110vh] p-12 pt-24 flex gap-6 justify-end items-center ${hind.className} antialiased overflow-hidden`}
    >
      <Image
        src="/bg_login.webp"
        alt="Hero Login Image"
        fill
        className="object-cover"
        sizes="{(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw}"
        priority={true}
      />
      <div className="flex flex-col px-9 py-16 sm:w-[28rem] ring-2 ring-slate-200/70 rounded-[25px] bg-gradient-to-tr from-[#ccc8] to-[#ccca] backdrop-blur-[12px] text-white">
        <h1 className="mb-12 text-center text-4xl font-semibold drop-shadow-md">
          Account login
        </h1>
        <form action="" className="flex flex-col gap-3">
          <label
            htmlFor="username"
            className={`${hind.className} text-2xl font-semibold drop-shadow-md`}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="rounded-lg py-2 px-4 bg-[#D9D9D9] text-lg text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-none"
          />
          <label
            htmlFor="password"
            className={`${hind.className} text-2xl font-semibold drop-shadow-md`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="rounded-lg py-2 px-4 bg-[#D9D9D9] text-lg font-sans text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-none"
          />
          <div className="mb-6 mt-3 flex gap-3 items-center justify-between">
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                id="remember"
                className="relative peer appearance-none w-6 h-6 p-2 rounded-md bg-[#D9D9D9] checked:bg-orange-500 transition-all duration-300 ease-in-out"
              />
              <label
                htmlFor="remember"
                className={`${hind.className} font-semibold text-2xl drop-shadow-md`}
              >
                Remember me
              </label>
              <svg
                className="absolute w-6 h-6 p-1 hidden peer-checked:block pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p className="font-medium text-xl">Need Help?</p>
          </div>
          <button
            type="button"
            className="bg-[#FFA31D] hover:bg-orange-400 rounded-xl py-2 px-4 font-semibold text-2xl antialiased transition-all duration-300 ease-in-out"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
