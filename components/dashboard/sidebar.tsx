"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

interface SidebarProps {
  active: string;
}

export default function Sidebar({ active }: SidebarProps) {
  const [cookie, setCookie, removeCookie] = useCookies(["accessToken"]);
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const activeClass = "bg-[#FFA31D] text-white";
  const nonActiveClass = "text-white/50";
  return (
    <>
      {/* NAVIGATION*/}
      <div className="bg-[#296875] max-sm:mb-10 md:mb-10 lg:mr-10 lg:mb-0 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
        <nav className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
          <Link
            className={
              (active === "home" ? activeClass : nonActiveClass) +
              " p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
            }
            href={`${origin}/dashboard`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>

          <Link
            className={
              (active === "group" ? activeClass : nonActiveClass) +
              " p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
            }
            href={`${origin}/groups`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </Link>
          <Link
            className={
              (active === "payment" ? activeClass : nonActiveClass) +
              " p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
            }
            href={`${origin}/payment`}
          >
            <svg
              width="24"
              height="17"
              viewBox="0 0 24 17"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.2931 0.842237C21.8385 0.232121 20.3828 4.51027e-08 18.9278 4.51027e-08C14.309 -0.000374949 9.6906 2.33771 5.0718 2.33771C3.91344 2.33771 2.75583 2.19072 1.59747 1.82322C1.46735 1.78197 1.33685 1.76247 1.20936 1.76247C0.563991 1.76247 0 2.26196 0 2.95533V14.8524C0 15.326 0.271121 15.7749 0.706489 15.9571C2.16109 16.5676 3.61682 16.7997 5.0718 16.7997C9.6906 16.7997 14.3094 14.4616 18.9282 14.4616C20.0866 14.4616 21.2442 14.6086 22.4025 14.9761C22.5326 15.0174 22.6631 15.0369 22.7906 15.0369C23.436 15.0369 24 14.5374 24 13.844V1.94734C23.9996 1.47335 23.7285 1.02486 23.2931 0.842237ZM1.79997 3.75819C2.55446 3.94719 3.34195 4.04206 4.15194 4.09306C3.93144 5.19517 2.96245 6.02578 1.79997 6.02578V3.75819ZM1.79997 14.4455V12.6538C3.08883 12.6538 4.13169 13.6764 4.18906 14.9563C3.3442 14.8884 2.55446 14.7196 1.79997 14.4455ZM11.9998 11.9998C10.3427 11.9998 8.99986 10.3877 8.99986 8.39987C8.99986 6.41165 10.3431 4.79992 11.9998 4.79992C13.6565 4.79992 14.9998 6.41165 14.9998 8.39987C14.9998 10.3885 13.6562 11.9998 11.9998 11.9998ZM22.1997 13.0415C21.5427 12.8769 20.8605 12.7847 20.1627 12.725C20.3828 11.7471 21.1939 11.0046 22.1997 10.8771V13.0415ZM22.1997 4.18756C21.0413 4.04094 20.1424 3.07383 20.1068 1.87947C20.8395 1.96084 21.5352 2.11309 22.1997 2.35421V4.18756Z" />
            </svg>
          </Link>
        </nav>
        <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
          {/*<Link*/}
          {/*  className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"*/}
          {/*  href=""*/}
          {/*>*/}
          {/*  <svg*/}
          {/*    xmlns="http://www.w3.org/2000/svg"*/}
          {/*    className="h-5 w-5 sm:h-6 sm:w-6"*/}
          {/*    viewBox="0 0 20 20"*/}
          {/*    fill="currentColor"*/}
          {/*  >*/}
          {/*    <path*/}
          {/*      fillRule="evenodd"*/}
          {/*      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"*/}
          {/*      clipRule="evenodd"*/}
          {/*    />*/}
          {/*  </svg>*/}
          {/*</Link>*/}
          <Link
            className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
            onClick={() => removeCookie("accessToken")}
            href={`${origin}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
