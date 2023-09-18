import TimelineDetail from "./TimelineDetail";

function Timeline() {
  const timelineData = [
    {
      title: "Opening Ceremony",
      date: "18 Feb 2024",
    },
    {
      title: "Youth Mining Conference",
      date: "19 Feb 2024",
    },
    {
      title: "Mining Talks",
      date: "23 Feb 2024",
    },
    {
      title: "Bandung Tour & Outbound",
      date: "24 Feb 2024",
    },
    {
      title: "ISMC Exhibition",
      date: "19-24 Feb 2024",
    },
    {
      title: "Mining Expo & Job Fair",
      date: "23 & 24 Feb 2024",
    },
    {
      title: "Closing Ceremony",
      date: "25 Feb 2024",
    },
    {
      title: "Mining Competitions",
      date: "18 - 25 Feb 2024",
    },
  ];
  return (
    <section className="md:p-16 p-4 w-full min-h-screen flex justify-center items-center bg-[#296875]">
      <div className="flex flex-col gap-12 md:p-16 p-4 md:pb-96 pb-48 ring-2 ring-white/20 bg-white/10 rounded-3xl overflow-auto no-scrollbar">
        <div className="flex gap-12 md:w-[3000px] w-[2000px]">
          {timelineData.map((data, index) => (
            <TimelineDetail
              key={index}
              title={data.title}
              date={data.date}
              id={index}
            />
          ))}
        </div>
        <div className="md:w-[3000px] w-[2000px] h-5 bg-gradient-to-r from-slate-100 via-slate-400 to-slate-100 rounded-xl shadow-xl"></div>
      </div>
    </section>
  );
}

export default Timeline;
