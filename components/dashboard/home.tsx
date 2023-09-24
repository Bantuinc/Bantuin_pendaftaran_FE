import {cocogoose, hind} from "@/fonts/font";

interface DefaultProps {
  title: string;
  description?: string | null;
}

export default function Default({ title, description }: DefaultProps) {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  return (
    <>
      {/* Content */}
      <div className={`${cocogoose.className} flex-1 px-2 sm:px-0`}>
        <div className="flex justify-between items-center">
          <h3 className={`${cocogoose.className} text-3xl font-extralight text-white/50`}>{title}</h3>
          {/*<div className="inline-flex items-center space-x-2">*/}
          {/*  <a*/}
          {/*    className="bg-[#296875] text-white/50 p-2 rounded-md hover:text-white smooth-hover"*/}
          {/*    href="#"*/}
          {/*  >*/}
          {/*    <svg*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*      className="h-6 w-6"*/}
          {/*      fill="none"*/}
          {/*      viewBox="0 0 24 24"*/}
          {/*      stroke="currentColor"*/}
          {/*    >*/}
          {/*      <path*/}
          {/*        strokeLinecap="round"*/}
          {/*        strokeLinejoin="round"*/}
          {/*        strokeWidth="2"*/}
          {/*        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"*/}
          {/*      />*/}
          {/*    </svg>*/}
          {/*  </a>*/}
          {/*  <a*/}
          {/*    className="bg-[#296875] text-white/50 p-2 rounded-md hover:text-white smooth-hover"*/}
          {/*    href="#"*/}
          {/*  >*/}
          {/*    <svg*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*      className="h-6 w-6"*/}
          {/*      fill="none"*/}
          {/*      viewBox="0 0 24 24"*/}
          {/*      stroke="currentColor"*/}
          {/*    >*/}
          {/*      <path*/}
          {/*        strokeLinecap="round"*/}
          {/*        strokeLinejoin="round"*/}
          {/*        strokeWidth="2"*/}
          {/*        d="M4 6h16M4 10h16M4 14h16M4 18h16"*/}
          {/*      />*/}
          {/*    </svg>*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>

        {title === "Payment"? (description === null ? (
          <div className="flex justify-center items-center h-22">
            <div className="my-20">
              <h1 className="text-white mb-8 text-2xl font-bold">
                You cannot make payments at this time
              </h1>
              <a
                className="ml-32 bg-[#FFA31D] text-white hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                href="./register"
              >
                Register Now
              </a>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-22">
            <div className="my-20">
              <h1 className="text-center text-white mb-8 text-2xl font-bold">
                You cannot make payments at this time
              </h1>
              <h3 className="text-center text-white mb-8 text-xl font-bold">
                {description}
              </h3>
              <a
                className="ml-60 bg-[#FFA31D] text-white hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                href={`${origin}/dashboard`}
              >
                Back
              </a>
            </div>
          </div>
        )): (
            <div className="flex justify-center items-center h-22">
              <div className="my-20">
                <h1 className="text-white mb-8 text-2xl font-bold">You haven’t registered for any competitions yet</h1>
                <a className="ml-52 bg-[#FFA31D] text-white hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" href="./register">
                  Register Now
                </a>
              </div>
            </div>
        )}
      </div>
    </>
  );
}
