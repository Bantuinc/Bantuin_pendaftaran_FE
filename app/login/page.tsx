import Image from "next/image";
import { hind } from "../page";

function Login() {
  return (
    <section
      className={`relative min-h-[110vh] p-12 pt-24 bg-[url('/background_login.png')] flex gap-6 justify-end items-center bg-cover ${hind.className}`}
    >
      <div className="flex flex-col px-9 py-16 sm:w-[28rem] ring-2 ring-slate-200/70 rounded-[25px] bg-gradient-radial from-[#fff4] to-[#FFFFFF44] backdrop-blur-[12px] text-white">
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
            className="rounded-lg py-2 px-4 bg-[#D9D9D9] shadow-md ring1 ring-white"
          />
          <label
            htmlFor="password"
            className={`${hind.className} text-2xl font-semibold drop-shadow-md`}
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            className="rounded-lg py-2 px-4 bg-[#D9D9D9] shadow-md"
          />
          <div className="mb-6 flex gap-3 items-center justify-between">
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                id="remember"
                className="rounded-lg bg-[#D9D9D9] p-4"
              />
              <label
                htmlFor="remember"
                className={`${hind.className} font-semibold text-lg`}
              >
                Remember me
              </label>
            </div>
            <p className="font-medium text-xl">Need Help?</p>
          </div>
          <button
            type="button"
            className="bg-[#FFA31D] rounded-xl py-2 px-4 font-semibold text-2xl"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
