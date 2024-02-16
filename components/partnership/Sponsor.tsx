import { PopupSponsorProps } from "@/app/(index)/partnership/page";
const Sponsor = ({
  action,
}: {
  action: { showPopup: (x: PopupSponsorProps) => void };
}) => {
  return (
    <>
      <h1 className="text-6xl mb-6 py-2 text-center font-extrabold bg-gradient-to-r from-[#fffa] to-[#FFF] text-transparent bg-clip-text">
        Our Sponsor
      </h1>
      <div className="flex flex-col items-center gap-3 sm:px-6 px-3 py-6 ring-2 ring-slate-200/70 rounded-[32px] bg-gradient-to-tr from-[#ccc6] to-[#cccc] backdrop-blur-[12px] md:w-[90vw] w-full shadow-lg">
        <p className="font-bold text-slate-900 text-sm">SPONSORED BY</p>
        <div className="flex flex-col gap-0 items-center w-full">
          {/* XXL */}
          <img
            src="/sponsor/XXL/maa.png"
            alt="MAA"
            width={1600}
            height={1200}
            className="h-[10rem] object-center w-full object-contain rounded-xl"
          />
          {/* XXL */}
          {/* XL */}
          <div className="mb-3 flex justify-center sm:gap-6 items-center flex-wrap">
            <img
              src={"/sponsor/XL/pertamina.png"}
              width={2339}
              height={1654}
              alt="pertamina"
              className="w-auto md:h-[8.5rem] h-[5.75rem] object-contain rounded-2xl"
            />
            <img
              src={"/sponsor/XL/orica.png"}
              width={2615}
              height={1177}
              alt="orica"
              className="w-auto md:h-[8.5rem] h-[5.75rem] object-contain  rounded-xl"
            />
          </div>
          {/* XL */}
          {/* L */}
          <div className="mb-3 flex justify-center sm:gap-12 gap-3 items-center flex-wrap">
            <img
              src="/sponsor/L/arutmin.png"
              width={479}
              height={512}
              alt="arutmin"
              className="sm:h-[7rem] h-[4.5rem] sm:w-auto object-contain"
            />
            <img
              src="/sponsor/L/migc.png"
              width={440}
              height={798}
              alt="migc"
              className="sm:h-[7rem] h-[4.5rem] sm:w-auto object-contain"
            />
            <img
              src="/sponsor/L/ptfi.png"
              width={2134}
              height={272}
              alt="ptfi"
              className="sm:h-[7rem] h-[4.5rem] sm:w-auto object-contain"
            />
            {/* L */}
            {/* M */}
            <img
              src="/sponsor/M/antam.png"
              width={2537}
              height={933}
              alt="antam"
              onClick={() =>
                action.showPopup({
                  name: "PT Antam Tbk",
                  description:
                    "<p><span style='font-weight: 400;'>ANTAM, member of MIND ID (Mining Industry Indonesia), the SOE's Holding Mining Industry is a vertically integrated, export-oriented, diversified mining and metals company. With operations spread throughout the mineral-rich Indonesian archipelago, ANTAM undertakes all activities from exploration, excavation, processing through to marketing of nickel ore, ferronickel, gold, silver, bauxite and coal.&nbsp;</span></p> <p><span style='font-weight: 400;'>The company has long term loyal blue chip customers in Europe and Asia. Due to the vastness of the company's licensed exploration areas as well as its known large holdings of high quality reserves and resources, ANTAM has formed several joint ventures with international partners to profitably develop geological ore bodies into profitable mines.</span></p>",
                  link: {
                    text: "PT ANTAM Tbk",
                    url: "https://www.antam.com/en/about",
                  },
                })
              }
              className="sm:h-[4.5rem] h-[3rem] w-auto object-contain rounded-lg"
            />
            <img
              src="/sponsor/M/bib.png"
              width={4207}
              height={542}
              alt="bib"
              className="sm:h-[2.5rem] h-[1.75rem] w-auto rounded-lg object-contain"
            />
            <img
              src="/sponsor/M/ptar.png"
              width={1250}
              height={1005}
              alt="PTAR"
              onClick={() =>
                action.showPopup({
                  name: "PT Agincourt Recources",
                  description:
                    "<p><span style='font-weight: 400;'>PT Agincourt Resources (PTAR) is a prominent mining company in Indonesia, specialising in the exploration and mining of precious metals such as gold and silver. The Company&rsquo;s primary operating site is the Martabe Gold Mine in the Indonesian province of North Sumatra, while our headquarters in Jakarta facilitates and manages the corporate functions of the Company.The area of the Martabe Gold Mine is based on a sixth-generation 30-year Contract of Work with the Government of Indonesia. The total area is 130,252 hectares. Production The operating capacity of the Martabe Gold Mine is more than 7 million tonnes of ore per year to produce more than 200,000 ounces of gold and 1-2 million ounces of silver per year.PTAR is committed to creating safe and efficient operations, minimizing environmental impact, and ensuring our existence provides long-term benefits to all local stakeholders.</span></p>",
                })
              }
              className="sm:h-[4.5rem] h-[3rem] rounded-lg w-auto object-contain"
            />
            <img
              src="/sponsor/M/aptekindo.png"
              width={1455}
              height={717}
              alt="Aptekindo"
              className="sm:h-[4.5rem] h-[3rem] rounded-lg w-auto object-contain"
            />
          </div>
          <div className="mb-6 flex justify-center sm:gap-6 gap-3 items-center flex-wrap">
            <img
              src="/sponsor/M/wbk.png"
              width={883}
              height={149}
              alt="wbk"
              className="sm:h-[4.5rem] h-[3rem] rounded-lg w-auto object-contain"
            />
            <img
              src="/sponsor/M/mifa.png"
              width={1294}
              height={527}
              alt="Mifa"
              className="sm:h-[4.5rem] h-[3rem] rounded-lg w-auto object-contain"
            />
          </div>
          {/* M */}
          {/* S */}
          <div className="mb-6 flex justify-center sm:gap-12 gap-3 items-center flex-wrap">
            <img
              src="/sponsor/S/berau.png"
              width={559}
              height={255}
              alt="berau"
              className="sm:h-[3rem] h-[2rem] w-auto object-contain"
            />
            <img
              src="/sponsor/S/peb.png"
              width={502}
              height={497}
              alt="peb"
              className="sm:h-[3rem] h-[2rem] w-auto object-contain"
            />
            <img
              src="/sponsor/S/gmb.png"
              width={702}
              height={993}
              alt="gmb"
              className="sm:h-[3rem] h-[2rem] w-auto object-contain"
            />
            <img
              src="/sponsor/S/BSSR.png"
              width={720}
              height={960}
              alt="BSSR"
              className="sm:h-[3rem] h-[2rem] w-auto object-contain"
            />
            <img
              src="/sponsor/S/pama.png"
              width={1277}
              height={500}
              alt="Pama"
              onClick={() =>
                action.showPopup({
                  name: "Pamapersada Nusantara",
                  description:
                    "<p><span style='font-weight: 400;'>As one of the largest coal mining contractors in the world, PT Pamapersada Nusantara possesses extensive expertise and a deep understanding in the development and operation of coal mines.</span></p> <p><span style='font-weight: 400;'>Our Vision :&nbsp;</span></p> <p><span style='font-weight: 400;'>To be a world leading mining contractor with the best productivity, engineering occupational health and safety, and enviromental practices.</span></p> <p><span style='font-weight: 400;'>To be the largest integrated mining services company in Indonesia</span></p> <p><span style='font-weight: 400;'>To be a plus mining company</span></p> <p><span style='font-weight: 400;'>To be a reliable, green. and most efficient energy producer</span></p> <p><span style='font-weight: 400;'>Our Mission :&nbsp;</span></p> <p><span style='font-weight: 400;'>To continuously strive to master technological and engineering capabilities with an enviromental and human safety perspective to build the nation</span></p> <p><span style='font-weight: 400;'>To create opportunities for employees to develop their competencies in achieving goals</span></p> <p><span style='font-weight: 400;'>To provide the best returns to shareholders</span></p> <p><span style='font-weight: 400;'>The optimize the best benefits of world class services for customers in the mining business and provide energy with operational excellence and reliable services to support national prosperity</span></p>",
                  logo: "/sponsor/S/pama.png",
                })
              }
              className="sm:h-[3rem] h-[2rem] w-auto object-contain"
            />
            <img
              src="/sponsor/S/dyno.png"
              width={1500}
              height={1250}
              alt="DYNO"
              onClick={() =>
                action.showPopup({
                  name: "DNX Indonesia",
                  logo: "/sponsor/S/dyno.png",
                  link: {
                    text: "DNX Indonesia",
                    url: "https://www.dynonobel.com/apac/about/about-dyno-nobel/dnx-indonesia",
                  },
                  description:
                    "<p><span style='font-weight: 400;'>Established over 180 years ago, Dyno Nobel has a unique history and an unsurpassed Tradition of Practical Innovation. Our founder, Alfred Nobel, changed the world with his invention of dynamite and the detonator in the mid-1800&prime;s and changed it again when he founded the world famous Nobel Prizes. Throughout our history, we have patented over 2,800 products with 230 patents currently in force. In fact, most of the innovative explosive products ever invented are traced through Dyno Nobel. </span><span style='font-weight: 400;'>DNX Indonesia is a leading supplier of explosives products and blasting services in Indonesia. </span><b>Supported by Dyno Nobel's global organisation, DNX Indonesia delivers innovative service from its head office located in Jakarta and operations throughout Kalimantan, East Java and North Sumatra.&nbsp;</b></p> <p><b>DNX Indonesia Industrial Explosives:</b></p> <p><b></b></p> <ul> <li aria-level='1'><b>- The leader of full emulsion application of industrial explosives in Indonesia</b></li> <li aria-level='1'><b>- The #1 emulsion manufacturer (by plant number) of industrial explosives in Indonesia</b></li> <li aria-level='1'><b>- The leader of used oil application in explosives</b></li> <li></li> </ul>",
                })
              }
              className="sm:h-[3rem] h-[2rem] w-auto object-contain"
            />
            <img
              src="/sponsor/S/pyc.png"
              width={3000}
              height={3000}
              alt="PYC"
              className="sm:h-[3rem] h-[2rem] w-auto object-contain"
            />
            <img
              src="/sponsor/S/pertamina_ep.png"
              width={1024}
              height={208}
              alt="Pertamina EP"
              onClick={() =>
                action.showPopup({
                  name: "Pertamina EP",
                  description:
                    "<p>PT Pertamina EP (PEP) established on 2005 by signing a cooperation contract with SKK Migas. On April 2021 Pertamina EP is a part of Upstream Subholding under the management of PT Pertamina Hulu Energi. PEP actively explores for new Oil &amp; Gas reserves across Indonesia, employing advanced technologies and geological expertise. Their success contributes to national energy security and reserves replacement. PEP remains a key player in Indonesia's upstream Oil &amp; Gas sector. By focusing on organic and inorganic growth, technological innovation, and sustainability, they are well-positioned to navigate the challenges and opportunities ahead.&nbsp;</p> <p>PT Pertamina EP Business &amp; Product&nbsp;</p> <ul> <li>- Oil and gas exploration, including geological and geophysical study activities, maturation of leads and prospects, geological and geophysical survey activities, and exploration drilling.</li> <li>- Oil and gas exploitation includes own operations and partnerships</li> <li>- oil and gas commerciality, both from own operations and Technical Assistance Contract (TAC) and Operational Cooperation partners<strong></strong></li> </ul>",
                  link: {
                    url: "https://pep.pertamina.com/Default",
                    text: "PT. Pertamina EP",
                  },
                  logo: "/sponsor/S/pertamina_ep.png",
                })
              }
              className="sm:h-[2.5rem] h-[2rem] w-auto object-contain"
            />
          </div>
          <div className="flex justify-center sm:gap-9 gap-3 items-center flex-wrap">
            <img
              src="/sponsor/S/ptba.png"
              width={1404}
              height={993}
              alt="ptba"
              className="sm:h-[2rem] h-[2rem] w-auto object-contain"
            />
            <img
              src="/sponsor/S/united_tractors.png"
              width={2684}
              height={1512}
              alt="United Tractors"
              className="sm:h-[3rem] h-[2rem] w-auto object-contain"
            />
            <img
              src="/sponsor/S/powerchem.png"
              width={3508}
              height={955}
              alt="PowerChem"
              className="sm:h-[2.5rem] h-[2rem] w-auto object-contain"
            />
            <img
              src="/sponsor/S/geomine.png"
              width={400}
              height={79}
              alt="geomine"
              onClick={() =>
                action.showPopup({
                  name: "Geomine Indonesia",
                  description:
                    "<ul> <li> <p><span style='font-weight: 400;'>GEOMINE Consultant is a mining and geotechnical consulting firm with primary focuses of providing good technical services in all phases of the mining cycles and assisting professional development of client's technical personnel.</span></p> <p><span style='font-weight: 400;'>GEOMINE work is in open pit and underground mining with a broad range of commodities (gold, silver, copper, iron, nickel, coal).</span></p> <p><span style='font-weight: 400;'>GEOMINE mission is to provide satisfactory and profitable services of mining, by applying professionalism, good mining practices and appropriate environmental management.</span></p> </li> </ul>",
                  logo: "/sponsor/S/geomine.png",
                  link: {
                    text: "GeoMine Indonesia",
                    url: "https://geomine-indonesia.com/",
                  },
                })
              }
              className="sm:h-[2.5rem] h-[2rem] w-auto object-contain"
            />
            <img
              src="/sponsor/S/aldzama.png"
              width={1280}
              height={647}
              alt="Aldzama"
              className="sm:h-[2.5rem] h-[2rem] w-auto object-contain"
            />
            <img
              src="/sponsor/S/harita.png"
              width={1213}
              height={400}
              alt="Harita"
              onClick={() =>
                action.showPopup({
                  name: "Harita Nickel",
                  description:
                    "Harita Nickel is a sustainable integrated nickel processing company. This is demonstrated by our operational activities that are good, professional, and prioritize sustainable environmental management for more than 10 years on Obi Island, South Halmahera, North Maluku, to be precise. in the Obi Island Industrial Area.",
                })
              }
              className="sm:h-[2.5rem] h-[2rem] w-auto object-contain"
            />
          </div>
          {/* S */}
        </div>
      </div>
    </>
  );
};

export default Sponsor;
