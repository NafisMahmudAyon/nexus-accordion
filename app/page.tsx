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
      <Accordion className='p-4 border '>
        <AccordionItem>
          <AccordionHeader className={`flex items-center justify-between gap-3  `} iconStyle='text-primaryColor' openIcon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 448 512" fill="currentColor" >
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
          </svg>}>
            <div className='flex flex-1 items-center justify-between text-headingText dark:text-headingDarkText'>
              <span className=''>FrontEnd Web Developer @ PickPlugins</span>
              <span>Dec 2022 - Present</span>
            </div>
          </AccordionHeader>
          <AccordionPanel>P</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
