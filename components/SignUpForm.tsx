"use client";
import { hind } from "@/fonts/font";
import axios from "axios";
import Link from "next/link";
import { FormEvent, useState } from "react";

function SignUpForm() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        { name: fullName, email, password, confirmPassword }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-3">
      <label
        htmlFor="username"
        className={`${hind.className} text-2xl font-semibold drop-shadow-md`}
      >
        Full Name
      </label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="rounded-lg py-2 px-4 bg-[#D9D9D9] text-lg text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-none"
      />
      <label
        htmlFor="username"
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
      <label
        htmlFor="password"
        className={`${hind.className} text-2xl font-semibold drop-shadow-md`}
      >
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="rounded-lg py-2 px-4 bg-[#D9D9D9] text-lg font-sans text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-none"
      />
      <span>
        Already have an account ?{" "}
        <Link
          href="/login"
          className="font-bold hover:text-orange-300 transition-all"
        >
          Login
        </Link>
      </span>
      <button
        type="submit"
        className="bg-[#FFA31D] hover:bg-orange-400 rounded-xl py-2 px-4 font-semibold text-2xl antialiased transition-all duration-300 ease-in-out"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
