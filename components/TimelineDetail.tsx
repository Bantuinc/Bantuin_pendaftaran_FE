function TimelineDetail({
  title,
  date,
  id,
}: {
  title: string;
  date: string;
  id: number;
}) {
  function formatDate(inputDate: string): string {
    const dateParts = inputDate.split(" ");
    if (dateParts.length === 5) {
      const [dayStart, splitter, dayEnd, month, year] = dateParts;
      const formattedDayStart = addDaySuffix(parseInt(dayStart, 10));
      const formattedDayEnd = addDaySuffix(parseInt(dayEnd, 10));
      return `${formattedDayStart} - ${formattedDayEnd} ${month} ${year}`;
    } else if (dateParts.length === 3) {
      const [day, month, year] = dateParts;
      const formattedDay = addDaySuffix(parseInt(day, 10));
      return `${formattedDay} ${month} ${year}`;
    } else {
      throw new Error("Invalid date format");
    }
  }

  const addDaySuffix = (day: number): string => {
    if (day >= 11 && day <= 13) {
      return `${day}th`;
    }
    switch (day % 10) {
      case 1:
        return `${day}<sup>st</sup>`;
      case 2:
        return `${day}<sup>nd</sup>`;
      case 3:
        return `${day}<sup>rd</sup>`;
      default:
        return `${day}<sup>th</sup>`;
    }
  };
  return (
    <div
      className={`relative md:p-8 p-4 flex flex-col gap-3 justify-center items-center shadow-2xl rounded-2xl bg-white/20 w-[300px] ${
        id % 2 === 1 ? "md:translate-y-[388px] translate-y-[272px]" : ""
      }`}
    >
      <h1 className="font-bold text-white md:text-lg text-xs text-center">
        {title}
      </h1>
      <div className="text-slate-100 md:text-xl text-xs font-black text-center">
        <p dangerouslySetInnerHTML={{ __html: formatDate(date) }}></p>
      </div>
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
