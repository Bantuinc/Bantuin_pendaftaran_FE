import { hind, ubuntu } from "@/fonts/font";
import Image from "next/image";
import Background from "@/public/mining_compeition_list.jpg";
import Link from "next/link";
import MiningCompetitionList from "@/components/MiningCompetitionList";

function MiningCompetition() {
  return (
    <>
      <section className="lg:p-28 lg:pt-40 sm:p-12 sm:pt-40 p-6 pt-40 relative min-h-[100vh] flex gap-6 justify-center items-start">
        <Image
          src="/background_mining_competition.webp"
          alt="Mining Competition Image"
          fill
          className="z-[-1] object-cover fixed"
        />
        <div className="flex flex-col gap-6 ring-2 md:max-w-[80vw] ring-slate-200/70 rounded-[25px] bg-gradient-to-tr from-[#ccc7] to-[#ccc] backdrop-blur-sm">
          <h1
            className={`p-12 text-[#296875] text-center text-5xl ${ubuntu.className} font-bold`}
          >
            SEPTEMBER 25 - FEBRUARY 25, 2023
          </h1>

          <div className="flex lg:flex-row flex-col justify-between items-start gap-6 pl-12 lg:pl-0 pr-12 pb-40">
            <div
              className="p-20 relative w-fit -ml-32 rounded-r-[75px] bg-[#D9D9D9]"
              style={{ boxShadow: "-20vw 0 0 #d9d9d9" }}
            >
              <Image src="/logo2.png" height={300} width={400} alt="Hero" />
            </div>
            <p
              className={`${hind.className} lg:max-w-[50%] text-[#346973] font-bold text-center text-3xl`}
              style={{ lineHeight: "1.5em" }}
            >
              Several competitions based on the mining profession, including the
              surface mining competitions and underground mining competitions,
              among students of mining engineering, both domestic or overseas.
            </p>
          </div>
        </div>
      </section>
      <section className="w-screen py-4 bg-white text-center">
        <h1 className="text-[9vw] font-black bg-clip-text text-transparent bg-[url('/mining_competition.jpg')]">
          Mining Competition
        </h1>
      </section>
      <section className="lg:p-28 lg:pt-40 sm:p-12 sm:pt-40 p-6 pt-40 relative min-h-[2  00vh] flex gap-6 justify-center items-start">
        <Image
          src={Background}
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
            src="pit_design.png"
            text="Pit Design"
            route="pit_design"
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
    </>
  );
}

export default MiningCompetition;
