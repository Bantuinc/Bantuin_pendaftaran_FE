function TimelineDetail({
  title,
  date,
  id,
}: {
  title: string;
  date: string;
  id: number;
}) {
  return (
    <div
      className={`relative md:p-8 p-4 flex flex-col gap-3 justify-center items-center shadow-2xl rounded-2xl bg-white/20 w-[300px] ${
        id % 2 === 1 ? "md:translate-y-[388px] translate-y-[272px]" : ""
      }`}
    >
      <h1 className="font-bold text-white md:text-lg text-xs text-center">
        {title}
      </h1>
      <p className="text-slate-100 md:text-xl text-xs font-black text-center">
        {date}
      </p>
      <div
        className={`${
          id % 2 === 1
            ? "to-white/0 from-white -top-8"
            : "from-white/0 to-white -bottom-8"
        } absolute w-2 h-8 bg-gradient-to-b rounded-full`}
      ></div>
      <div
        className={`${
          id % 2 === 1 ? "-top-[78px]" : "-bottom-[78px]"
        } absolute w-10 h-10 bg-gradient-to-tr from-[#FFc37D] to-[#FFA31D] rounded-full shadow-2xl`}
      ></div>
    </div>
  );
}

export default TimelineDetail;
