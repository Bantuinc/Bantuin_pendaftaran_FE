"use client";
import MediaPartner from "@/components/partnership/MediaPartner";
import Sponsor from "@/components/partnership/Sponsor";
import SupportedBy from "@/components/partnership/SupportedBy";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { Transition } from "@headlessui/react";

export type PopupSponsorProps = {
  logo?: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
  name: string;
};

function SponsorPage() {
  const [isShowingPopup, setIsShowingPopup] = useState<boolean>(false);
  const [sponsorContent, setSponsorContent] = useState<PopupSponsorProps>({
    logo: "",
    description: "",
    link: {
      text: "",
      url: "",
    },
    name: "",
  });

  const showPopup = (props: PopupSponsorProps) => {
    setIsShowingPopup(true);
    setSponsorContent({
      ...sponsorContent,
      logo: props?.logo,
      description: props?.description,
      link: props?.link,
      name: props?.name,
    });
  };
  const closePopup = () => {
    setIsShowingPopup(false);
  };
  return (
    <>
      <Transition
        show={isShowingPopup}
        enter="transition-all duration-150 ease-in-out"
        enterFrom="opacity-0 scale-0"
        enterTo="opacity-100 scale-100"
        leave="transition-all duration-150 ease-in-out"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-0"
        className={`overflow-hidden fixed z-10 top-[calc(50%)] -translate-y-1/2 md:left-[calc(50%-35vw)] left-[calc(50%-45vw)] md:max-w-[70vw] w-[90vw] bg-white rounded-2xl flex items-center justify-center`}
      >
        <div className="relative w-full h-full pt-4 p-8">
          <div className="flex flex-row-reverse">
            <div
              className="w-fit cursor-pointer hover:bg-red-400 transition-all rounded-xl p-1 bg-red-100 text-red-500 hover:text-white"
              onClick={closePopup}
            >
              <X />
            </div>
          </div>
          <div>
            {sponsorContent?.logo && (
              <div className="flex justify-center">
                <img
                  src={sponsorContent?.logo}
                  alt="logo"
                  className="h-[5rem] w-auto"
                />
              </div>
            )}

            {sponsorContent?.link && (
              <a
                href={sponsorContent.link?.url}
                className="mt-4 pt-4 underline text-blue-500"
              >
                {sponsorContent.link?.text}
              </a>
            )}
            <h1 className="mb-3 text-2xl font-semibold">
              {sponsorContent.name}
            </h1>
            <h2 className="text-slate-500 font-semibold">Description</h2>
            <p
              className="text-slate-800 text-sm tracking-wide"
              dangerouslySetInnerHTML={{ __html: sponsorContent?.description }}
            ></p>
          </div>
        </div>
      </Transition>
      <section className="p-3 pt-28 sm:px-6 sm:pb-12 relative min-h-[110vh] flex flex-col-reverse md:flex-row gap-12 justify-center items-center">
        <Image
          src="/background.webp"
          alt="Hero Login Image"
          fill
          className="z-[-1] object-cover"
          sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
          priority={true}
        />
        <div className="flex flex-col items-center">
          <Sponsor action={{ showPopup }} />
          <MediaPartner />
          <SupportedBy />
        </div>
      </section>
    </>
  );
}

export default SponsorPage;
