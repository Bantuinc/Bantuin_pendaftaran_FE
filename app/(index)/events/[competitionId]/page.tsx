import CompetitionDescription from "@/components/CompetitionDescription";
import MiningCompetitionList from "@/components/MiningCompetitionList";
import Background_detail from "@/public/bg_insight_detail.webp";
import Background_mining from "@/public/mining_compeition_list.jpg";
import { getCompetition } from "@/utils/registration";
import Image from "next/image";

async function CompetitionDetail({
  params,
}: {
  params: { competitionId: string };
}) {
  const competition: Competition[] = await getCompetition();
  if (!competition) return <div>Cannot get Competition!</div>;

  const selectedCompetition = competition.find(
    (comp) => comp.id === params.competitionId
  );

  if (!selectedCompetition) return <div>Competition ID not found!</div>;
  return (
    <>
      <CompetitionDescription
        competitionId={params.competitionId}
        competitionName={selectedCompetition?.name as string}
        competitionDescription={selectedCompetition?.description as string}
        openedAt={selectedCompetition?.openedAt as string}
      />
      {selectedCompetition?.name === "Poster Contest" && (
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
            <div
              className={`text-left flex flex-col items-center gap-3 w-[100%]`}
            >
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
      )}
      {selectedCompetition?.name === "Mining Competition" && (
        <section className="lg:p-28 lg:pt-40 sm:p-12 sm:pt-40 p-6 pt-40 relative min-h-[2  00vh] flex gap-6 justify-center items-start">
          <Image
            src={Background_mining}
            alt="Mining Competition List Image"
            fill
            className="object-cover"
            sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
            priority={true}
            placeholder="blur"
            quality={50}
          />
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
            <MiningCompetitionList
              src="ventilation_duct_hamping.png"
              text="Ventilation Duct Hamping"
              route="ventilation_duct_hamping"
            />
            <MiningCompetitionList
              src="written_test.png"
              text="Written Test"
              route="written_test"
            />
            <MiningCompetitionList
              src="bench_blasting.png"
              text="Bench Blasting"
              route="bench_blasting"
            />
            <MiningCompetitionList
              src="hand_mucking.png"
              text="Hand Mucking"
              route="hand_mucking"
            />
            <MiningCompetitionList
              src="mine_evacuation_and_rescue.png"
              text="Mine Evacuation and Rescue"
              route="mine_evacuation_and_rescue"
            />
            <MiningCompetitionList
              src="mine_excavation.png"
              text="Mine Excavation"
              route="mine_excavation"
            />
            <MiningCompetitionList
              src="orienteering.png"
              text="Orienteering"
              route="orienteering"
            />
            <MiningCompetitionList
              src="mine_design.png"
              text="Mine Design"
              route="mine_design"
            />
            <MiningCompetitionList
              src="rock_drill.png"
              text="Rock Drill"
              route="rock_drill"
            />
            <MiningCompetitionList
              src="rock_mineral_identification&grain_counting.png"
              text="Rock Mineral
            Identification
            & Grain Counting"
              route="rock_mineral_identification"
            />
            <MiningCompetitionList
              src="rolling_resistance.png"
              text="Rolling Resistance"
              route="rolling_resistance"
            />
            <MiningCompetitionList
              src="slug_test.png"
              text="Slug Test"
              route="slug_test"
            />
            <MiningCompetitionList
              src="tie_in.png"
              text="Tie In"
              route="tie_in"
            />
            <MiningCompetitionList
              src="track_stand.png"
              text="Track Stand"
              route="track_stand"
            />
            <MiningCompetitionList
              src="underground_mine_supporting.png"
              text="Underground Mine Supporting"
              route="underground_mine_supporting"
            />
            <MiningCompetitionList
              src="underground_mine_surveying.png"
              text="Underground
            Mine Surveying"
              route="underground_mine"
            />
          </div>
        </section>
      )}
    </>
  );
}

export default CompetitionDetail;
