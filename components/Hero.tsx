'use client'
import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision.tsx';
import { SparklesCore } from './ui/sparkles.tsx';
import { cn } from "@/lib/utils";
import { TypewriterEffect } from './ui/typewriter-effect.jsx';
import { TypewriterEffectSmoothDemo } from './ui/typewritterEffectSmoothDemo.tsx';
import Contact from './contact.tsx';

const Hero = () => {
  return (
    <div>
      <div className="h-[40rem] relative w-full bg-neutral-900 flex flex-col items-center justify-center overflow-hidden rounded-md mb-0">
        <BackgroundBeamsWithCollision>
          
          <h2 className=" text-6xl relative z-20  lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight mb-0 md:text-5xl">
            KUNDAN ENGINEERING{" "}
            <br />
            <span className="text-2xl md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight"></span>
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>WORKSHOP.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span>WORKSHOP</span>
              </div>
              <div className="w-full h-10 relative">
                <SparklesCore
                  background="transparent"
                  minSize={0.3}
                  maxSize={0.8}
                  particleColor="#f59e0b"
                  particleDensity={150}
                  className="absolute inset-0"
                />
                <div
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-full [mask-image:radial-gradient(50%_50%_at_center,white,transparent)]",
                    "bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
                  )}
                ></div>
              </div>
              <div className="w-full h-6 relative mt-2">
                <SparklesCore
                  background="transparent"
                  minSize={0.2}
                  maxSize={0.6}
                  particleColor="#fbbf24"
                  particleDensity={100}
                  className="absolute inset-0"
                />
              </div>
            </div>
          </h2>

        

          {/*//mt-8 text-center text-lg font-medium text-gray-700 dark:text-gray-300*/}
          
    <div className="z-10 border absolute -bottom-32 text-center text-sm font-light text-gray-700 dark:text-gray-300 md:-bottom-36">
  <TypewriterEffectSmoothDemo />
</div>

<div className='z-0 absolute bottom-11 '>
  <Contact/>
</div>

 

        </BackgroundBeamsWithCollision>

      </div>
    </div>
  )
}

export default Hero;
