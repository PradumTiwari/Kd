"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "A",
    },
    {
      text: "Place",
    },
    {
      text: "Where",
    },
    {
      text: "we",
    },{
      text: "Follow",
    },
   
    {
      text: "अतिथि.",
      className: "text-orange-500    dark:text-orange-500",
    },
     {
      text: "देव.",
      className: "text-white-500 dark:text-white-500",
    }, {
      text: "भव.",
      className: "text-green-500 dark:text-green-500",
    },
    
    
  ];
  return (
    <div className="flex flex-col text-xs items-center justify-center h-[40rem]  ">
     
      <TypewriterEffectSmooth words={words} />
     
      </div>
   
  );
}
