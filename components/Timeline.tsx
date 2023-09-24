import TimelineDetail from "./TimelineDetail";

function Timeline() {
  const timelineData = [
    {
      title: "Mining Competition Registration Open",
      date: "25 September 2023",
    },
    {
      title: "Mining Insight Registration Open",
      date: "2 October 2023",
    },
    {
      title: "Mine Design (Part of Mining Comp.)",
      date: "25 – 26 January 2024",
    },
    {
      title: "Opening Ceremony",
      date: "18 Feb 2024",
    },
    {
      title: "Mining Competition",
      date: "18 – 24 February 2024",
    },
    {
      title: "Mine Exhibition",
      date: "19 – 24 February 2024",
    },
    {
      title: "Mining Insight Presentation",
      date: "20 – 22 February 2024",
    },
    {
      title: "Mining Expo & Job Fair",
      date: "23 – 24 February 2024",
    },
    {
      title: "Miners’ Day",
      date: "23 February 2024",
    },
    {
      title: "Youth Mining Conference",
      date: "24 February 2024",
    },
    {
      title: "Mining Talks",
      date: "24 February 2024",
    },
    {
      title: "Closing Ceremony",
      date: "25 February 2024",
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
