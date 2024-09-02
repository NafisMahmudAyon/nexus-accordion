// import Image from "next/image";

import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from "./src";

export default function Home() {
  const data = [
    { title: "title-1", content: "Content 1 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iste architecto expedita! Alias assumenda quae facilis ea voluptas esse exercitationem accusamus delectus deleniti libero dolorem inventore vero autem, aperiam magnam." },
    { title: "title-2", content: "Content 2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iste architecto expedita! Alias assumenda quae facilis ea voluptas esse exercitationem accusamus delectus deleniti libero dolorem inventore vero autem, aperiam magnam." }
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Collapsible</h2>
        <Accordion className=''>
          {data.map((_, i) => (
            <AccordionItem key={i}>
              <AccordionHeader iconStyle="text-red-500">{_.title}</AccordionHeader>
              <AccordionPanel>
                {_.content}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <br />
        <h2>Multiple</h2>
        <Accordion multiple>
          {data.map((_, i) => (
            <AccordionItem key={i}>
              <AccordionHeader>Accordion {i + 1}</AccordionHeader>
              <AccordionPanel>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod
                explicabo, nam sapiente id nostrum ex, ab numquam, doloremque
                aspernatur quisquam illo! Officiis explicabo laborum incidunt
                corrupti provident esse eligendi.
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Accordion defaultIndex={0}>
        <AccordionItem className="p-4 border mb-4 rounded-md">
          <AccordionHeader
            className={`gap-3 cursor-pointer `}
            activeStyle="pb-2 border-b"
            iconStyle="text-primaryColor w-4"
          >
            <div className="flex flex-1 items-center justify-between text-headingText dark:text-headingDarkText">
              <span className="font-semibold">FrontEnd Web Developer @ PickPlugins</span>
              <span>Dec 2022 - Present</span>
            </div>
          </AccordionHeader>
          <AccordionPanel className="pt-2">
            <div className="flex items-center gap-8 text-sm text-normalText dark:text-normalDarkText">
              <span className="flex items-center gap-1 text-headingText dark:text-headingDarkText">
                
                <span>Rangpur, Bangladesh</span>
              </span>
              <span className="flex items-center gap-1 text-headingText dark:text-headingDarkText">
                
                <span>pickplugins.com</span>
              </span>
            </div>
            <div className="text-headingText dark:text-headingDarkText py-3">
              Developing WordPress plugins in PickPlugins, Tech used React, PHP, JavaScript.
            </div>
            <div className="flex items-center gap-2 text-xs font-extralight">
              {["HTML", "CSS", "JS", "PHP", "React", "WordPress", "JSON", "API", "Tailwind"].map((tag, i) => {
                return (
                  <span key={i} className="px-2 py-1 text-normalText dark:text-normalDarkText bg-[#dfe8f1] dark:bg-[#353535] rounded-md">
                    {tag}
                  </span>
                );
              })}
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="p-4 border mb-4 rounded-md">
          <AccordionHeader
            className={`gap-3 cursor-pointer`}
            activeStyle="pb-2 border-b"
            iconStyle="text-primaryColor w-4"
          >
            <div className="flex flex-1 items-center justify-between text-headingText dark:text-headingDarkText">
              <span className="font-semibold">Full Stack Web Developer @ Freelancer</span>
              <span>Dec 2020 - Present</span>
            </div>
          </AccordionHeader>
          <AccordionPanel className="pt-2">
            <div className="flex items-center gap-8 text-sm text-normalText dark:text-normalDarkText">
              <span className="flex items-center gap-1 text-headingText dark:text-headingDarkText">
               
                <span>Worldwide</span>
              </span>
              <span className="flex items-center gap-1 text-headingText dark:text-headingDarkText">
                
                <span>fiverr.com</span>
              </span>
            </div>
            <div className="text-headingText dark:text-headingDarkText py-3">
              Developed Full Stack web application, Tech used React, JavaScript, PHP.
            </div>
            <div className="flex items-center gap-2 text-xs font-extralight">
              {["HTML", "CSS", "JS", "PHP", "React", "WordPress", "JSON", "API", "Tailwind"].map((tag, i) => {
                return (
                  <span key={i} className="px-2 py-1 text-normalText dark:text-normalDarkText bg-[#dfe8f1] dark:bg-[#353535] rounded-md">
                    {tag}
                  </span>
                );
              })}
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

    </main>
  );
}
