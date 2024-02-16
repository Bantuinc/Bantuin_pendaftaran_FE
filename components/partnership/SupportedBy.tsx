const SupportedBy = () => {
  return (
    <div className="mt-8 flex flex-col items-center gap-3 px-6 py-6 ring-2 ring-slate-200/70 rounded-[32px] bg-gradient-to-tr from-[#ccc6] to-[#cccc] backdrop-blur-[12px] w-fit shadow-lg">
      <p className="font-bold text-slate-900 text-sm">SUPPORTED BY</p>
      <div className="flex flex-col gap-8 items-center w-full">
        <div className="flex justify-center gap-6 items-center flex-wrap">
          <img
            src="/support/ibes.png"
            width={1334}
            height={628}
            alt="ibes"
            className="sm:h-[5rem] h-[3rem] rounded-lg w-auto object-contain"
          />
          <img
            src="/support/perhapi.png"
            width={5294}
            height={4102}
            alt="perhapi"
            className="sm:h-[5rem] h-[3rem] rounded-lg w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SupportedBy;
