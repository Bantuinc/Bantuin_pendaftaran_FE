/* eslint-disable @next/next/no-img-element */
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
            onClick={() =>
              action.showPopup({
                name: "Mineral Alam Abadi Group",
                description:
                  "<p>Mineral Alam Abadi's Group commitment to excellence goes beyond just our operations. We are deeply dedicated to sustainability and environmental responsibility. Our mining practices adhere to the highest environmental standards, ensuring minimal ecological impact while maximizing resource utilization.<br> Furthermore, our engagement with local communities is at the heart of our ethos. We actively collaborate with local stakeholders, empowering them through employment opportunities and community development projects. By fostering strong relationships with the regions in which we operate, we aim to contribute positively to their growth and prosperity.<br> As we continue to expand our presence in Central Sulawesi, Southeast Sulawesi, and South Halmahera, our vision remains unwavering: to be a global leader in responsible mining and diversified services, driven by innovation and a commitment to the well-being of our planet and its people. We invite you to join us on this journey toward a sustainable and thriving future.<br> </p>",
                logo: "/sponsor/XXL/maa.png",
              })
            }
            className="h-[10rem] object-center w-full object-contain rounded-xl cursor-pointer"
          />
          {/* XXL */}
          {/* XL */}
          <div className="mb-3 flex justify-center sm:gap-6 items-center flex-wrap">
            <img
              src={"/sponsor/XL/pertamina.png"}
              width={2339}
              height={1654}
              alt="pertamina"
              onClick={() =>
                action.showPopup({
                  name: "PT Pertamina",
                  description:
                    "<p>Pertamina upholds its commitment to provide energy and develop new and renewable energy in order to support the creation of national energy independence. strategic which oversees six subholdings operating in the energy sector (types of business activities), namely Upstream Subholding operationally run by PT Pertamina Hulu Energi, Gas Subholding by PT Pertamina Gas Negara, Refinery &amp; Petrochemical Subholding by PT Kilang Pertamina Internasional , Power &amp; NRE Subholding by PT Pertamina Power Indonesia, Commercial &amp; Trading Subholding by PT Pertamina Patra Niaga, and Integrated Marine Logistics Subholding by PT Pertamina International Shipping. Pertamina is committed to continuing to echo the spirit of sustainable transformation in order to perfect its steps to becoming a world-class energy company supported by an organization that is increasingly agile, aggressive, adaptable and focused on broader business development.<br> </p>",
                  logo: "/sponsor/XL/pertamina.png",
                })
              }
              className="w-auto md:h-[8.5rem] h-[5.75rem] object-contain rounded-2xl cursor-pointer"
            />
            <img
              src={"/sponsor/XL/orica.png"}
              width={2615}
              height={1177}
              alt="orica"
              onClick={() =>
                action.showPopup({
                  name: "ORICA Mining Services",
                  description:
                    "<p>Orica is one of the world’s leading mining and infrastructure solutions provides. Form the production and supply of the explosives, blasting system, mining chemical and geoctechnical monitoring to our cutting-edge digital solutions and comprehensive range of services, we sustainably mobilise the earth’s resources. Operating for nearly 150 years, roday our 12.500+ global workforce supports customers across surface and underground mines, quarry, construction, and oul and gas operations. Sustainibility is integral to our operations. We have set an ambition to achieve net zero emissions by 2050 and are committed to playing our part in achieving the goals of the paris agreement. Find out about orica : www.orica.com </p>",
                  logo: "/sponsor/XL/orica.png",
                })
              }
              className="w-auto md:h-[8.5rem] h-[5.75rem] object-contain cursor-pointer rounded-xl"
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
              onClick={() =>
                action.showPopup({
                  name: "PT Arutmin Indonesia",
                  description:
                    "<p>PT Arutmin Indonesia is a major coal mining company in Indonesia, operating for over three decades. Vision of the company is become the coal mining company that excels to fulfill energy needs and provides a positive impact on its stakeholders. Mission of PT Arutmin Indonesia is Achieve the company's business goals by increasing productivity through effective and efficient operations, Support government programs in fulfilling the needs of environmentally-friendly energy resources and create sustainable values for communities and the nation, Build a harmonious relationship with the government, communities, and corporate partners in reaching our business goals, also Support nature and environment conservation by building sustainable values under Government programs. Arutmin hopes to deliver a positive impact on all stakeholders and help create a better quality of life for communities.<br> </p>",
                  logo: "/sponsor/L/arutmin.png",
                })
              }
              className="sm:h-[7rem] h-[4.5rem] sm:w-auto object-contain cursor-pointer"
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
              onClick={() =>
                action.showPopup({
                  name: "PT Freeport Indonesia",
                  description:
                    "<p>PT Freeport Indonesia (PTFI) is a mineral mining company operating in the Mimika regency of Papua Province in Indonesia. PTFI mines and processes mineral ores into concentrates with copper content, and associated minerals gold and silver. Most of the concentrates produced by PTFl are refined domestically. The shares of PTFI are now owned by a company belonging to the State of the Republic of Indonesia, the Mining Industry Indonesia (MIND ID) and multinationalmining company listed at the New York Stock Exchange, Freeport-McMoRan Inc. (FCX).PTFl is the largest provider of private employments in Papua. At present the operations of PTFI employ around 7,096 direct employees and its 23,446 contractors. Most of those workingin PTFI (40.7%) are native Papuan and there are only two percent of foreign workers. In the framework of developing the quality and capacity of Papuan human resources, PTFI has builtand operated the Nemangkawi Mining Institute (IPN) which functions as a training agency for Papuan residents. The latest study by LPEM-FEUl on the economic impact of PTFI showedthat the impact of the operations of PTFI has led to the creation of 230,000 jobs in Papua and 108,800 jobs at the national level in Indonesia. </p>",
                  logo: "/sponsor/L/ptfi.png",
                })
              }
              className="sm:h-[3rem] h-[3rem] sm:w-auto cursor-pointer object-contain"
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
                  logo: "/sponsor/M/antam.png",
                })
              }
              className="sm:h-[4.5rem] h-[3rem] w-auto object-contain rounded-lg cursor-pointer"
            />
            <img
              src="/sponsor/M/bib.png"
              width={4207}
              height={542}
              alt="bib"
              onClick={() =>
                action.showPopup({
                  name: "PT Borneo Indobara",
                  description:
                    "<p>PT Borneo Indobara is a company engaged in the trading of mining products and mining services, particularly coal. Established in 1997 under the name PT Bumi Kencana Eka Sakti, the company later changed its name to PT Borneo Indobara in 2010. As part of the Sinarmas Mining Group, which also has PT Golden Energy Mines Tbk as its parent company, PT Borneo Indobara holds mining licenses in South Kalimantan with an area of approximately 15,000 hectares. With a coal production capacity of around 12 million tons per year, the company envisions becoming a sustainable and socially responsible coal mining company. PT Borneo Indobara also has a mission to create added value for shareholders, employees, the community, and the environment. The company actively implements Corporate Social Responsibility and Environmental Responsibility (CSER) programs, including community empowerment, education, health, environmental conservation, and disaster relief.<br> </p>",
                  logo: "/sponsor/M/bib.png",
                })
              }
              className="sm:h-[2.5rem] h-[1.75rem] w-auto rounded-lg object-contain cursor-pointer"
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
                  logo: "/sponsor/M/ptar.png",
                })
              }
              className="sm:h-[4.5rem] h-[3rem] rounded-lg w-auto object-contain cursor-pointer"
            />
            <img
              src="/sponsor/M/aptekindo.png"
              width={1455}
              height={717}
              alt="Aptekindo"
              onClick={() =>
                action.showPopup({
                  name: "Anggun Permai Tekindo",
                  description:
                    "<p>Anggun Permai Tekindo (APT) is a mining services and contractor company that is specialized in supplying latest technology to support mining development &amp; production.<br> We are an authorized supplier for Sika&reg; Mining Solution, Victaulic, and Getman. APT specialized in concrete admixtures, shotcrete, grouting and injections that take part of tunneling works, ground consolidation, ground stabilization, wall-face support, ground water stopping and other mining related activities.<br> Through skilled and certified contractor work and proper application with SIUJP &amp; SIUJK Licensed of our products, we are able to give the best solutions and technical support for our clients.<br> </p>",
                  logo: "/sponsor/M/aptekindo.png",
                })
              }
              className="sm:h-[4.5rem] h-[3rem] rounded-lg w-auto object-contain cursor-pointer"
            />
          </div>
          <div className="mb-6 flex justify-center sm:gap-6 gap-3 items-center flex-wrap">
            <img
              src="/sponsor/M/wbk.png"
              width={883}
              height={149}
              alt="wbk"
              onClick={() =>
                action.showPopup({
                  name: "Wahana Bandhawa Kencana",
                  description:
                    "<p>PT. Wahana Bandhawa Kencana (WBK) stands tall as a distinguished mining contractor, embodying excellence in every facet of its operations since its inception in January 2018. Our comprehensive services encompass Land Clearing, Top Soil Removal, Drilling, Blasting, and Overburden Removal. At WBK, we are not merely providers of mining services; we are architects of progress, pioneers in the industry. Our services span from Survey and Exploration to Modelling, Design and Sequence, Drilling and Blasting, Overburden Removal, Coal Getting, and Coal Hauling. Our vision is steadfast: to emerge as the foremost and most trusted mining service provider, distinguished by our unwavering commitment to safety across all operations. At the core of WBK's ethos lies a commitment to excellence, safety, and sustainability. Our policies and practices are not mere words on paper but guiding principles that permeate every aspect of our operations. Together, with our dedicated team and valued partners, we forge ahead, driven by a shared vision of a safer, more prosperous future in mining.</p>",
                  logo: "/sponsor/M/wbk.png",
                })
              }
              className="sm:h-[4.5rem] h-[3rem] rounded-lg w-auto object-contain cursor-pointer"
            />
            <img
              src="/sponsor/M/mifa.png"
              width={1294}
              height={527}
              alt="Mifa"
              onClick={() =>
                action.showPopup({
                  name: "PT Mifa Bersaudara",
                  description:
                    "<p>PT Mifa Bersaudara (&ldquo;MIFA&rdquo; or the &ldquo;Company&rdquo;) is a subsidiary of PT Media Djaya Bersama which was founded in 2002. Since its inception until now, MIFA has carried out integrated coal mining operations in the West Aceh region, Province Aceh. MIFA's mining activities are carried out independently, covering all activities from upstream to downstream, namely from the mining area to the special port. To support daily mining operational activities, MIFA has built facilities and infrastructure, such as mining operational facilities, coal crushing plants, special coal hauling roads, and building a system for loading bulk coal onto barges. to the PT Mifa Bersaudara Special Coal Terminal located on the Peunaga Cut Ujong Coast, West Aceh Regency.<br> </p>",
                  logo: "/sponsor/M/mifa.png",
                })
              }
              className="sm:h-[4.5rem] h-[3rem] rounded-lg w-auto object-contain cursor-pointer"
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
              onClick={() =>
                action.showPopup({
                  name: "Berau Coal",
                  description:
                    "<p>Berau Coal is the fifth largest coal producer in Indonesia. It engages in open cut mining of coal in its concession area in East Kalimantan, operating in three active mining areas &ndash; Lati, Binungan and Sambarata.Berau Coal supplies coal to customers in Indonesia, China, Hong Kong, India, Japan, South Korea, Taiwan, the Philippines and Thailand. Berau Coal&rsquo;s customers are mainly utility companies and coal trading companies.Berau Coal completed an initial public offering and its shares were listed on the Indonesian Stock Exchange (&ldquo;IDX&rdquo;) in August 2010.<br> </p>",
                  logo: "/sponsor/S/berau.png",
                })
              }
              className="sm:h-[3rem] h-[2rem] w-auto object-contain cursor-pointer"
            />
            <img
              src="/sponsor/S/peb.png"
              width={502}
              height={497}
              alt="peb"
              onClick={() =>
                action.showPopup({
                  name: "PT Pendopo Energi Batubara",
                  description:
                    "<p>PT Pendopo Energi Batubara (PEB), established in 1995, has entered into the third Generation of Coal Contract of Work (CCOW) with the Government of Indonesia. The location of PEB mining is in Muara Enim and PALI, South Sumatera, 140 km southwest of Palembang, which can be accessed through the provincial road, Musi/Lematang River and crossed by special road for coal of the third party along the &plusmn; 116 km that connects Lahat with coal ports in the Musi River.<br> For Coal Upgrading and Coal Gasification, PEB together with its strategic partners from China, Japan and Korea are on comprehensive feasibility study in purpose to implements these projects commercially. With downstream products to be targetted are DME, Methanol, Fertilizer and SNG<br> </p>",
                  logo: "/sponsor/S/peb.png",
                })
              }
              className="sm:h-[3rem] h-[2rem] w-auto object-contain cursor-pointer"
            />
            <img
              src="/sponsor/S/gmb.png"
              width={702}
              height={993}
              alt="gmb"
              onClick={() =>
                action.showPopup({
                  name: "PT Geo Mining Berkah",
                  description:
                    "<p>We are a mining and environmental consulting company that was founded in 2015 on a national scale. We provide complete services, both basic licensing which is a basic requirement for company operations, as well as technical study needs which are outlined in the form of scientific study documents in accordance with applicable statutory rules and regulations. We are a company engaged in mining services consulting with national services. We will provide solutions with a new and practical approach in the world of mining, so that we can provide high added value to our clients by utilizing technical capabilities and in-depth experience towards the client's business goals.<br> </p>",
                  logo: "/sponsor/S/gmb.png",
                })
              }
              className="sm:h-[3rem] h-[2rem] w-auto object-contain cursor-pointer"
            />
            <img
              src="/sponsor/S/BSSR.png"
              width={720}
              height={960}
              alt="BSSR"
              onClick={() =>
                action.showPopup({
                  name: "PT Baramulti Suksessarana",
                  description:
                    "<p>BSSR was established in 1990, as a coal trading company and has since moved upstream to be a coal mining company.PT Baramulti Suksessarana Tbk (BSSR) offers a substantial reserves and resources of quality coal from its mine sites in East and South Kalimantan.<br> BSSR have a firm commitment for a steady coal production growth and infrastructure development to elevate it as one of Indonesia's leading coal mining companies, and contribute to the Indonesian economic growth. There are 2 coal concessions in BSSR:<br> 1. PT Antang Gunung Meratus (AGM), a 2nd generation Coal Contract of Work (CCOW), located in South Kalimantan<br> 2. PT Baramulti Suksessarana (BSSR), an Izin Usaha Pertambangan (IUP), located in East Kalimantan.<br> </p>",
                  logo: "/sponsor/S/BSSR.png",
                })
              }
              className="sm:h-[3rem] h-[2rem] w-auto cursor-pointer object-contain"
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
              className="sm:h-[3rem] h-[2rem] w-auto object-contain cursor-pointer"
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
              className="sm:h-[3rem] h-[2rem] w-auto object-contain cursor-pointer"
            />
            <img
              src="/sponsor/S/pyc.png"
              width={3000}
              height={3000}
              alt="PYC"
              onClick={() =>
                action.showPopup({
                  name: "Purnomo Yusginatoro Center",
                  description:
                    "<p>Purnomo Yusgiantoro Center (PYC) is a non-profit organization that focuses on independent and in-depth research, to provide policy solutions and/or recommendations in the field of energy and natural resources research at the local, national and global levels. PYC also focuses on solutions to problems and challenges in the energy and natural resources sector which have a significant impact on sustainable development in Indonesia. To achieve this goal, PYC provides solutions through various independent research projects, seminars, workshops, conferences, and collaboration with government and private institutions in various studies/research related to energy and natural resources. In the social sector, PYC holds various events aimed at helping the community in the fields of health, welfare and education. Apart from that, it is also actively involved in promoting local and regional cultural heritage to preserve traditional Indonesian culture.<br> </p>",
                  logo: "/sponsor/S/pyc.png",
                })
              }
              className="sm:h-[3rem] h-[2rem] w-auto object-contain cursor-pointer"
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
              className="sm:h-[2.5rem] h-[2rem] w-auto object-contain cursor-pointer"
            />
          </div>
          <div className="flex justify-center sm:gap-9 gap-3 items-center flex-wrap">
            <img
              src="/sponsor/S/ptba.png"
              width={1404}
              height={993}
              alt="ptba"
              onClick={() =>
                action.showPopup({
                  name: "PT Bukit Asam",
                  description:
                    "<p>PT Bukit Asam Tbk (PTBA) is a prominent state-owned coal mining company in Indonesia and a member of the MIND ID group. Established in 1923, the company has a long history in the coal mining industry and plays a significant role in Indonesia's energy sector.<br> With the vision of becoming a world-class energy company that cares about the environment, Bukit Asam continues to innovate in the coal-based energy business, renewable energy and coal downstream projects.<br> </p>",
                  logo: "/sponsor/S/ptba.png",
                })
              }
              className="sm:h-[2rem] h-[2rem] w-auto object-contain cursor-pointer"
            />
            <img
              src="/sponsor/S/united_tractors.png"
              width={2684}
              height={1512}
              alt="United Tractors"
              onClick={() =>
                action.showPopup({
                  name: "PT United Tractors Tbk",
                  description:
                    "<p>PT United Tractors Tbk is a subsidiary of PT Astra International Tbk (&ldquo;Astra&rdquo;), a well-established and one of the largest business groups in Indonesia with robust experience of serving various industries and sectors. Since September 19, 1989, the Company has become a public company by listing its shares on the Indonesia Stock Exchange (formerly the Jakarta Stock Exchange and Surabaya Stock Exchange). To date Astra owns 59.5% of the Company&rsquo;s shares, with the remaining shares are held by the public. Currently, the Company is a key player in various sectors and industries in the country through its five business pillars, namely Construction Machinery, Mining Contracting, Mining, Construction Industry and Energy.<br> </p>",
                  logo: "/sponsor/S/united_tractors.png",
                })
              }
              className="sm:h-[3rem] h-[2rem] w-auto object-contain cursor-pointer"
            />
            <img
              src="/sponsor/S/powerchem.png"
              width={3508}
              height={955}
              alt="PowerChem"
              onClick={() =>
                action.showPopup({
                  name: "Power Chemical Services",
                  description:
                    "<p>Established by a group of young &amp; professional engineers in 2018, POWER CHEMICALS is a specialty chemicals &amp; engineering service company for the mining, mineral processing, and several water treatment industries. We believe that Indonesia, with its massive human and natural resources, must be able to be independent of its various chemicals products needs. Thus our dream is to be one of the main driving forces to accelerate Indonesia's independence on various chemical products by providing added value via our specialty chemical products &amp; engineering services for our beloved customers. Our vision is to be the Nation&rsquo;s best chemical &amp; engineering service company in providing added value to our customer, employee and Indonesia.<br> </p>",
                  logo: "/sponsor/S/powerchem.png",
                })
              }
              className="sm:h-[2.5rem] h-[2rem] w-auto object-contain cursor-pointer"
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
              className="sm:h-[2.5rem] h-[2rem] w-auto object-contain cursor-pointer"
            />
            <img
              src="/sponsor/S/aldzama.png"
              width={1280}
              height={647}
              alt="Aldzama"
              onClick={() =>
                action.showPopup({
                  name: "PT Aldzama",
                  description:
                    "<p>We work as specialist of shutdown services to the mining metals smelting and mineral industries, we deliver innovative solution to all costumer requirements, making the company an expert wherever it operates. We aim to be world class quality shutdown services to the mining, metals smelting and mineral processing industries which is beneficial for its employees partners, communities and environtment. Our area of operation extends to East Java West Nusa Tenggara and Sulawesi. There we operate to help your mining, metal smelting and mineral processing industries.<br> </p>",
                  logo: "/sponsor/S/aldzama.png",
                })
              }
              className="sm:h-[2.5rem] h-[2rem] w-auto object-contain cursor-pointer"
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
                  logo: "/sponsor/S/harita.png",
                })
              }
              className="sm:h-[2.5rem] h-[2rem] w-auto object-contain cursor-pointer"
            />
          </div>
          {/* S */}
        </div>
      </div>
    </>
  );
};

export default Sponsor;
