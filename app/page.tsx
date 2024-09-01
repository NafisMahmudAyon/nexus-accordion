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
      <Accordion>
        <AccordionItem>
          <AccordionHeader className="flex items-center justify-between "><span>FrontEnd Web Developer @ PickPlugins</span>
            <span>Dec 2022 - Present</span>
          </AccordionHeader>
          <AccordionPanel>P</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
