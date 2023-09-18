import { hind } from "@/fonts/font";
import Background from "@/public/bg_login.webp";
import Image from "next/image";
import SignUpForm from "@/components/SignUpForm";

function SignUp() {
  return (
    <section
      className={`relative min-h-[110vh] p-12 pt-28 flex gap-6 justify-end items-center ${hind.className} antialiased overflow-hidden`}
    >
      <Image
        src={Background}
        alt="Hero Login Image"
        fill
        className="object-cover"
        sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
        priority={true}
        placeholder="blur"
        quality={50}
      />
      <div className="flex flex-col px-9 py-16 sm:w-[28rem] ring-2 ring-slate-200/70 rounded-[25px] bg-gradient-to-tr from-[#ccc8] to-[#ccca] backdrop-blur-[12px] text-white">
        <h1 className="mb-12 text-center text-4xl font-semibold drop-shadow-md">
          Sign Up New Account
        </h1>
        <SignUpForm />
      </div>
    </section>
  );
}

export default SignUp;
