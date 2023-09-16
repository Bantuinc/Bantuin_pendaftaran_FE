import { roboto } from "@/fonts/font";
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
      className="p-16 min-h-screen flex flex-col items-center justify-center bg-[#296875]"
    >
      <div className="mb-12 w-fit">
        <h1 className={`text-6xl font-bold text-white ${roboto.className}`}>
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
                  ISMC is a competition for mining engineering students in
                  Indonesia. This competition is held by ITB.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="bg-[#F8CF9D] rounded-3xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2" className="border-b-0">
              <AccordionTrigger className="px-10 py-5 text-[#425B5F] font-medium bg-[#9FB9B9] border-2 border-gray-400 rounded-3xl text-xl hover:no-underline">
                What is ISMC?
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-10 py-5">
                  ISMC is a competition for mining engineering students in
                  Indonesia. This competition is held by ITB.
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
