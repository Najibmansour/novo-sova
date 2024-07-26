import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqSvg from "@/components/svg_icons/faq_svg";

const text = [
  { title: "What is Sova?", desc: "" },
  {
    title: "What makes SOVA's fur products unique?",
    desc: "SOVA, where luxury meets elegance and timeless fashion. \n We have a rich palette of classical colors that are never out of style… \n With SOVA stay warm.",
  },
  {
    title:
      "How does SOVA ensure ethical and sustainable practices in its fur sourcing?",
    desc: "",
  },
  { title: "What is SOVA's return and exchange policy?", desc: "" },
  { title: "What are the latest trends in fur fashion at SOVA?", desc: "" },
];

const FAQ = () => {
  return (
    <div className="space-y flex w-full items-center justify-center space-x-5 py-10 text-secondary">
      <FaqSvg className="w-10" />
      <Accordion type="single" collapsible className="w-[60%] space-y-4">
        {text.map(({ desc, title }, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-lg border-2 border-secondary bg-secondary/20 px-3"
          >
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{desc}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
