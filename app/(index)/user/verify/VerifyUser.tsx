"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function VerifyUser() {
  const [loading, setLoading] = useState<boolean>(true);
  const [statusVerified, setStatusVerified] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token")!;
  const id = searchParams.get("id")!;
  const router = useRouter();

  const reload = () => {
    window.location.href = `/user/verify?token=${token}`;
  };

  const redirectToLogin = () => {
    setTimeout(() => {
      router.push("/login");
    }, 5000);
  };

  const verifyUser = async (token: string, id: string) => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/verify?token=${token}&id=${id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: data.isSuccess ? "Success" : "Error",
          text: data.message,
          icon: data.isSuccess ? "success" : "error",
          confirmButtonText: "Ok",
        });
        setStatusVerified(data.isSuccess);
        setLoading(false);
        if (data.isSuccess) {
          redirectToLogin();
        }

        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    verifyUser(token, id);
  }, []);

  return (
    <div className="md:py-8 md:px-16 md:max-w-[24rem] py-4 px-8 text-center bg-white rounded-xl text-slate-800 flex gap-8 flex-col items-center justify-center">
      <Image
        src="/logo2.png"
        width={200}
        height={100}
        className="w-auto h-auto object-cover p-4"
        alt="logo"
      />

      {loading ? (
        <>
          <span className="flex items-end">
            <h1 className="text-4xl font-extrabold">Processing</h1>
            <span>
              <Image
                src="/3-dots-fade.svg"
                alt="loading"
                width={24}
                height={24}
              />
            </span>
          </span>
          <p className="font-bold text-lg text-slate-600">
            Welcome to ISMC 14!
          </p>
          <p className="text-sm text-slate-500">
            This might take a few seconds. Please wait while we verify your
            account
          </p>
        </>
      ) : !loading && statusVerified ? (
        <>
          <h1 className="text-4xl font-extrabold">Verified!</h1>
          <p className="text-slate-700 text-md">
            Welcome to the 14<span className="text-xs align-super">th</span>{" "}
            ISMC. Your account has verified successfully
          </p>
          <Link href="/login">
            <button className="py-2 px-4 rounded-md bg-slate-800 text-white font-bold">
              Login
            </button>
          </Link>
          <p className="text-xs text-slate-500">
            Redirected automatically to Login page in 5 second...
          </p>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-extrabold">Error!</h1>
          <p className="">Your account has not verified successfully</p>
          <button
            onClick={() => reload()}
            className="py-2 px-4 rounded-md bg-slate-600 font-bold text-white"
          >
            Verify again
          </button>
        </>
      )}
    </div>
  );
}

export default VerifyUser;
