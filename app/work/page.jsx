"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const Projects = [
  {
    num: "01",
    category: "FullStack",
    title: "Milkify",
    Description:
      "Milkify is a full-stack web application for ordering and selling milk products. It features a dynamic menu with products fetched from the backend, secure session-based authentication, and a seamless order placement system. Built with React, Node.js, and Redux, it ensures an efficient and user-friendly experience.",

    stack: [{ name: "React" }, { name: "Css3" }, { name: "javaScript" }],
    image: "/assets/work/project01.jpeg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Social-Surge",
    Description:
      "Social Surge is a frontend UI project designed with a focus on sleek and modern design. Its key feature is dynamic theme handling, allowing users to switch seamlessly between themes for a personalized experience. Built with React and Tailwind CSS, it emphasizes responsiveness and visual appeal",
    stack: [{ name: "React" }, { name: "Css3" }, { name: "javaScript" }],
    image: "/assets/work/project02.jpeg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Github-userSearch",
    Description:
      "GitHubViewer is a frontend project leveraging REST APIs to enable users to search for GitHub profiles by username. It provides detailed insights into a user's repositories, followers, and gists, offering an intuitive and efficient way to explore GitHub data.",
    stack: [{ name: "React", name: "Tailwind" }, { name: "javaScript" }],
    image: "/assets/work/project03.jpeg",
    live: "",
    github: "",
  },
];

function work() {
  const [project, setProject] = useState(Projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(Projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col min-h-[80vh] justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leaidng-none text-white group-hover:text-accent transition-all capitalize duration-500">
                {project.category}
              </h2>
              <p>{project.Description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && " ,"}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px]  rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white txt-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px]  rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white txt-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 rounded-lg"
              onSlideChange={handleSlideChange}
            >
              {Projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_=_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default work;
