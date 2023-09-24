import Image from "next/image";
import Background_detail from "@/public/bg_insight_detail.webp";

function PosterContestDetail() {
  return (
    <section className="lg:p-28 lg:pt-40 sm:p-12 sm:pt-40 p-6 pt-40 relative min-h-[100vh] flex gap-6 justify-center items-start">
      <Image
        src={Background_detail}
        alt="Mining Insight Image"
        fill
        priority={true}
        sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
        placeholder="blur"
        quality={50}
        className="z-[-1] object-cover fixed"
      />
      <div className="flex lg:flex-row flex-col gap-12 px-9 py-12 ring-2 ring-slate-200/70 shadow-xl rounded-[32px] bg-gradient-to-tr from-[#ccc0] to-[#ccca] backdrop-blur-[12px] md:w-[80vw] w-full">
        <div className={`text-left flex flex-col items-center gap-3 w-[100%]`}>
          <h1 className="mb-6 text-white md:text-5xl text-4xl font-bold drop-shadow-md">
            Theme
          </h1>
          <div className="bg-gradient-to-tl shadow-xl from-white/20 to-white/80 rounded-xl md:py-6 md:px-12 py-4 px-8">
            <div className="font-normal text-center text-slate-900 md:text-lg text-sm">
              <p>Theme for the poster competition is</p>
              <span className="font-bold">
                “Utilization of Technology in Mining for the Welfare and
                Prosperity of the Society and Environment.”
              </span>
            </div>
          </div>
          <h1 className="my-6 text-white md:text-5xl text-4xl font-bold drop-shadow-md">
            Subthemes
          </h1>
          <div className="bg-gradient-to-tl shadow-xl from-white/20 to-white/80 rounded-xl md:py-6 md:px-12 py-4 px-4 md:w-max">
            <ol className="font-bold text-slate-900 md:text-lg text-sm list-decimal ml-6">
              <li>Health and Safety</li>
              <li>Digitalization and Automation in Mine Production</li>
              <li>Downstream Industry</li>
              <li>Mining Economics and Management</li>
              <li>Geotechnical Engineering</li>
              <li>Drilling and Blasting Technology</li>
              <li>Mining Waste and Tailings</li>
              <li>Exploration of Coal and Mineral Resources</li>
              <li>Mining Policy and Information</li>
              <li>Human Resource Development</li>
              <li>Renewable Energy in Mining Operation</li>
              <li>Community Empowerment</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PosterContestDetail;
