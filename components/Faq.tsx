import { cocogoose, hind } from "@/fonts/font";
import Underline from "./Underline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <section
      id="faq"
      className={`p-16 min-h-screen flex flex-col items-center justify-center bg-[#296875] ${cocogoose.className}`}
    >
      <div className="mb-12 w-fit">
        <h1 className={`text-6xl font-bold text-white ${cocogoose.className}`}>
          FAQ
        </h1>
        <Underline />
      </div>
      <div className="flex flex-col gap-6">
        <div className="bg-[#F8CF9D] rounded-3xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="px-10 py-5 text-[#425B5F] font-medium bg-[#FFA31D] border-2 border-yellow-400 rounded-3xl text-xl hover:no-underline">
                What is ISMC?
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-10 py-5">
                  ISMC, or Indonesian Student Mining Competition, is an
                  international-scale student mining competition stemming from
                  the experience of the HMT-ITB team participating in the AusIMM
                  Students Mining Competition held by the University of
                  Queensland (UQ) in{" "}
                  <span className={`${hind.className}`}>1996</span> in Brisbane,
                  Australia. In{" "}
                  <span className={`${hind.className}`}>2024</span>, ISMC will
                  be held for the{" "}
                  <span className={`${hind.className}`}>14</span>
                  <sup>th</sup> time.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="bg-[#F8CF9D] rounded-3xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2" className="border-b-0">
              <AccordionTrigger className="px-10 py-5 text-[#425B5F] font-medium bg-[#9FB9B9] border-2 border-gray-400 rounded-3xl text-xl hover:no-underline">
                What are the events?
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-10 py-5">
                  There will be many immaculate events, including the Mining
                  Competition, which consists of{" "}
                  <span className={`${hind.className}`}>16</span> kinds of
                  practical mining competitions: paper contests, poster
                  contests, hackathon contests, mining exhibitions and
                  exhibitions, mining talks, youth mining conferences, and more.
                  We also provide spectacular prizes for the winners of our
                  competition and contest.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="bg-[#F8CF9D] rounded-3xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="px-10 py-5 text-[#425B5F] font-medium bg-[#FFA31D] border-2 border-yellow-400 rounded-3xl text-xl hover:no-underline">
                When will ISMC be held?
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-10 py-5">
                  The <span className={`${hind.className}`}>14</span>
                  <sup>th</sup> ISMC will be held from February{" "}
                  <span className={`${hind.className}`}>18</span>
                  <sup>th</sup> to February{" "}
                  <span className={`${hind.className}`}>25</span>
                  <sup>th</sup>,{" "}
                  <span className={`${hind.className}`}>2024</span>. But
                  registration is now open.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="bg-[#F8CF9D] rounded-3xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2" className="border-b-0">
              <AccordionTrigger className="px-10 py-5 text-[#425B5F] font-medium bg-[#9FB9B9] border-2 border-gray-400 rounded-3xl text-xl hover:no-underline">
                Where will the ISMC be held?
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-10 py-5">
                  The <span className={`${hind.className}`}>14</span>
                  <sup>th</sup> ISMC will be held in Bandung, Indonesia,
                  especially at the Bandung Institute of Technology.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;
