"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "BUMDes Desa Sumberpucung",
    description:
      "BUMDes Desa Sumberpucung merupakan sebuah situs web yang dibuat untuk memperkenalkan BUMDes Desa Sumberpucung, Malang kepada masyarakat luas, serta memperkenalkan produk-produk yang dihasilkan oleh BUMDes Desa Sumberpucung, seperti kerajinan tangan, makanan, dan minuman khas Desa Sumberpucung.",
    stack: [
      { name: "Laravel" },
      { name: "Bootstrap" },
      { name: "JavaScript" },
      { name: "JQuery" },
      { name: "MySQL" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://bumdes.dzrmhmd.com/home",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Remidial Test System",
    description:
      "Remedial Test System adalah situs web yang dibuat untuk memudahkan para siswa SMAN 1 Sumberpucung dalam mengikuti test osn dan ujian remedial. Dengan adanya situs web ini, para siswa dapat mengikuti test osn dan ujian remedial secara online. Selain itu, para siswa juga dapat melihat hasil test osn dan ujian remedial yang telah diikuti.",
    stack: [
      { name: "Laravel" },
      { name: "Bootstrap" },
      { name: "JavaScript" },
      { name: "JQuery" },
      { name: "MySQL" },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://remedial.dzrmhmd.com/exam",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "E-Commerce Single Store",
    description:
      "Persada Packaging merupakan perusahaan yang bergerak di bidang importir packaging. Website ini bertujuan untuk memperkenalkan perusahaan dan produk-produk yang dijual oleh Persada Packaging, seperti botol serum, pot cream, lipmatte, dan sebagainya.",
    stack: [
      { name: "CodeIgniter" },
      { name: "Bootstrap" },
      { name: "JQuery" },
      { name: "MySQL" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://persadapackaging.com/",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "E-Commerce Single Store",
    description:
      "Parta Notebook adalah sebuah situs web yang berfokus pada penjualan berbagai macam hardware komputer. Di Parta Notebook, Anda dapat menemukan berbagai jenis komponen seperti laptop, desktop, motherboard, prosesor, RAM, dan sebagainya.",
    stack: [
      { name: "CodeIgniter" },
      { name: "Bootstrap" },
      { name: "JQuery" },
      { name: "MySQL" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.nums}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
