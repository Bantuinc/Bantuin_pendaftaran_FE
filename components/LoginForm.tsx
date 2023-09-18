"use client";
import React from "react";
import { hind } from "@/fonts/font";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { useCookies } from "react-cookie";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cookie, setCookie] = useCookies(["accessToken"]);

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        { email, password }
      );
      console.log(res?.data.token);
      setCookie("accessToken", res?.data.token, {
        path: "/",
        maxAge: 3600 * 24 * 7,
        sameSite: true,
      });
    } catch (err) {
      if (err instanceof AxiosError) console.log(err?.response?.data?.message);
    }
  };
  return (
    <form onSubmit={handleSignIn} className="flex flex-col gap-3">
      <label
        htmlFor="email"
        className={`${hind.className} text-2xl font-semibold drop-shadow-md`}
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
      <span>
        Dont{"'"} have an account ?{" "}
        <Link
          href="/signup"
          className="font-bold hover:text-orange-300 transition-all"
        >
          Register new account
        </Link>
      </span>
      <button
        type="submit"
        className="bg-[#FFA31D] hover:bg-orange-400 rounded-xl py-2 px-4 font-semibold text-2xl antialiased transition-all duration-300 ease-in-out"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
