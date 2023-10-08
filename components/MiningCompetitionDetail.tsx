"use client";
import Image from "next/image";
import MiningCompetitionList from "@/components/MiningCompetitionList";
import Background_mining from "@/public/mining_compeition_list.jpg";
import { useState } from "react";
import { X } from "lucide-react";
import { Transition } from "@headlessui/react";
import { cocogoose, hind } from "@/fonts/font";

interface ContentProps {
  competitionName: string;
  description: string;
  participant: string;
}
interface MiningDataType {
  src: string;
  data: ContentProps;
}

function MiningCompetitionDetail() {
  const [isShowingPopup, setIsShowingPopup] = useState<boolean>(false);
  const [content, setContent] = useState<ContentProps>({
    competitionName: "",
    description: "",
    participant: "",
  });

  const showPopup = (popupContent: ContentProps) => {
    setIsShowingPopup(true);
    setContent({
      ...content,
      competitionName: popupContent?.competitionName,
      description: popupContent?.description,
      participant: popupContent?.participant,
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
        className={`overflow-hidden fixed z-10 top-[calc(50%-6rem)] md:left-[calc(50%-35vw)] left-[calc(50%-45vw)] md:max-w-[70vw] w-[90vw] bg-white rounded-2xl flex items-center justify-center`}
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
          <div className={`${cocogoose.className}`}>
            <h1 className="mb-3 text-2xl font-semibold">
              {content.competitionName}
            </h1>
            <h2 className="text-slate-500 font-semibold">Description</h2>
            <p className="text-slate-800 text-sm tracking-wide">
              {content.description}
            </p>
          </div>
        </div>
      </Transition>
      <section className=" lg:p-28 lg:pt-40 sm:p-12 sm:pt-40 p-6 pt-40 relative min-h-[2  00vh] flex gap-6 justify-center items-start">
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
          {MiningCompetitionData.map((competition, index) => (
            <div key={index} onClick={() => showPopup(competition.data)}>
              <MiningCompetitionList
                src={competition.src}
                text={competition.data.competitionName}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default MiningCompetitionDetail;

const MiningCompetitionData: MiningDataType[] = [
  {
    src: "ventilation_duct_hamping.png",
    data: {
      competitionName: "Ventilation Duct Hamping",
      description:
        "Players will install ducts using provided equipment, then measure the quantity and quality of required air. This competition will tests player understanding of mine ventilation",
      participant: "75+",
    },
  },
  {
    src: "written_test.png",
    data: {
      competitionName: "Written Test",
      description:
        "Players will be tested on their knowledge in a written test. The competition will test players' abilities related to general knowledge, basic concepts, and calculations related to mining activities.",
      participant: "100+",
    },
  },
  {
    src: "bench_blasting.png",
    data: {
      competitionName: "Bench Blasting",
      description:
        "The players will create a blasting plan, starting with geometric design, determining the requirements for explosive materials, and establishing ignition patterns. This competition tests participants' understanding of surface blasting.",
      participant: "50+",
    },
  },
  {
    src: "hand_mucking.png",
    data: {
      competitionName: "Hand Mucking",
      description:
        "The participants will calculate effective productivity using lorry and wheelbarrows. This competition will test the participants' agility, speed, and skills in the process of loading, hauling, and dumping materials.",
      participant: "75+",
    },
  },
  {
    src: "mine_evacuation_and_rescue.png",
    data: {
      competitionName: "Mine Evacuation and Rescue",
      description:
        "The Players will creat a Job Safety Analysis (JSA) for the current situation, and then handling the accidents that occur. This competition will tests the knowledge of the players about health and safety",
      participant: "50+",
    },
  },
  {
    src: "mine_excavation.png",
    data: {
      competitionName: "Mine Excavation",
      description:
        "Players will utilize laboratory-scale excavator to achieve the goal of finding the minimum spesific energy from the intial digging angle which has been specified.",
      participant: "50+",
    },
  },
  {
    src: "orienteering.png",
    data: {
      competitionName: "Orienteering",
      description:
        "Players will look for several points using geological compas and a map. This competition will tests the players' navigation and orientation skills in finding control points in the designated area.",
      participant: "50+",
    },
  },
  {
    src: "mine_design.png",
    data: {
      competitionName: "Mine Design",
      description:
        "This competition will assess participants' abilities in designing open-pit or underground mines while considering the aspects, values, and principles of good mining practices and proper mine planning in accordance with applicable regulations.",
      participant: "15+",
    },
  },
  {
    src: "rock_drill.png",
    data: {
      competitionName: "Rock Drill",
      description:
        "Some players will drill the rock horizontally and vertically by using jack hammer. This competition will test the player's ability rock drilling, such as speed, accuracy, and drilling quality.",
      participant: "50+",
    },
  },
  {
    src: "rock_mineral_identification&grain_counting.png",
    data: {
      competitionName: "Rock Mineral Identification Grain Counting",
      description:
        "The participants will identify minerals and rocks and count the number of grains. This competition will test the participants' accuracy in identifying minerals and rocks, as well as their efficiency and accuracy in counting grains.",
      participant: "40+",
    },
  },
  {
    src: "rolling_resistance.png",
    data: {
      competitionName: "Rolling Resistance",
      description:
        "The participants will calculate the resistance affecting a rolling wheel. This competition will test the participants' accuracy in calculating rolling resistance efficiently and accurately.",
      participant: "75+",
    },
  },
  {
    src: "slug_test.png",
    data: {
      competitionName: "Slug Test",
      description:
        "The participants will calculate relevant hydrogeological parameters. This competition will test the participants' understanding and skills in applying slug test methods.",
      participant: "50+",
    },
  },
  {
    src: "tie_in.png",
    data: {
      competitionName: "Tie In",
      description:
        "Players will create underground blasting patterns using perforated boards. This competition will tests the players' ability to complete the given case study to produce a suitable and optimal blasting pattern.",
      participant: "50+",
    },
  },
  {
    src: "track_stand.png",
    data: {
      competitionName: "Track Stand",
      description:
        "This competition tests players ability to assemble a railway track with precision using wood as the base and measure important parameters in the assembly process.",
      participant: "75+",
    },
  },
  {
    src: "underground_mine_supporting.png",
    data: {
      competitionName: "Underground Mine Supporting",
      description:
        "Players will calculate the strength of the rock in the tunnel and make recommendations for support. This competition will test Players in identifying the orientation of the rock joint, analyzing the stability of the rock joint and calculating safety factor.",
      participant: "50+",
    },
  },
  {
    src: "underground_mine_surveying.png",
    data: {
      competitionName: "Underground Mine Surveying",
      description:
        "The players will measure the deformation of the tunnel walls using a total station, then they can analyze the tunnel stability.",
      participant: "75+",
    },
  },
];
