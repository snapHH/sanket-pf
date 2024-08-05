"use client";

import {delay, motion} from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";
import { transform } from "typescript";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category : "frontend",
        title: "Portfolio Website",
        description: "Built a professional and visually appealing portfolio website utilizing Next.js for server-side rendering, React for dynamic user interfaces, and Tailwind CSS for efficient styling and responsive design. The project showcases various personal and professional projects, with a focus on performance and user experience.",
        stack: [{name: "Next.js"},{name:"Tailwind CSS"}, {name: "React"}],
        github: "https://github.com/snapHH/sanket-pf",
        image: "/assets/work/portfolio.jpg"
    },
    {
        num: "02",
        category : "frontend",
        title: "E-commerce Website",
        description: "An e-commerce platform for effortless online purchasing, utilizing HTML, CSS, and Javascript to ensure a user-friendly interface and necessary features like secure checkout, product browsing, and cart management",
        stack: [{name: "HTML"},{name:"CSS"}, {name: "Javascript"}],
        github: "https://github.com/snapHH/Ecovoid",
        image: "/assets/work/logo.jpg"
    },
    {
        num: "03",
        category: "Web Application",
        title: "Management System",
        description: " A Bus Management System, focusing on the use of these technologies for system implementation and UI design, using HTML, CSS, and JS for the frontend and in java, java servlet page, bootstrap for the backend with software tools Eclipse IDE and visual studio code",
        stack: [{name: "Javascript"},{name:"HTML"}, {name: "CSS"},  {name:"Java"}, {name: "Bootstrap"}],
        github: "https://github.com/snapHH/BusManagement",
        image: "/assets/work/buslogo.jpg"
    },
    {
        num: "04",
        category: "Application(Game)",
        title: "2D Shooter Game",
        description: "A 2D shooter game in Python by utilizing the multimedia and computer vision features of the PyCharm IDE and the pygame packages.",
        stack: [{name: "Python"}],
        github: "https://github.com/snapHH/ShooterGame",
        image: "/assets/work/2dshootergame.jpg"
    },
    {
        num: "05",
        category: "Website",
        title: "Apple clone Website",
        description: "A clone Website of Apple which have 3D user interface create with ViteJS, ThreeJS and React and languages used are Javascript, HTML, CSS.",
        stack: [{name: "Javascript"},{name:"HTML"}, {name: "CSS"}, {name: "Vite.js"}, {name: "Three.js"}, {name: "React"}],
        github: "https://github.com/snapHH/Apple-clone.git",
        image:"/assets/work/Appleclone.jpg",
    },

]
const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) =>{
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update project state based on current slide index
        setProject(projects[currentIndex]);
    };
    return (
        <motion.section initial = {{opacity:0}} animate= {{opacity: 1, transition :{delay: 2.4, duration: 0.4, ease: "easeIn"},
        }} 
        className = "min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className = "flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className = "w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className = "flex flex-col gap-[30px]">
                            {/* outline num  */}
                        <div className = "text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                        <div>
                            {/* project category */}
                            <h2 className = "text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            <p className = "text-accent text-2xl gap-[20px] justify-center py-3 xl:px-0">{project.title}</p>
                        </div>
                        <p className = "text-whtie/60">{project.description}
                            {/* stack */}
                        </p>
                        <ul className = "flex gap-4">{project.stack.map((item, index)=>{
                            return <li key = {index} className = "text-accent">
                                {item.name}
                                {/* remove the last comma */}
                                {index !== project.stack.length -1 && ","}
                                </li>
                        })}</ul>
                        {/* border */}
                        <div className = "border border-white/20"></div>
                        {/* button */}
                        <div className = "flex items-center gap-4">
                            <Link href = {project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className = "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                                            <BsGithub className = "text-white text-3xl group-hover:text-accent"/>
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
                    <div className = "w-full xl:w-[50%]">
                        <Swiper spaceBetween = {50} slidesPerView={1} className = "xl:h-[520px] mb-12" onSlideChange = {handleSlideChange}>
                            {projects.map((project, index)=>{
                                return <SwiperSlide key = {index}>
                                    <div className = "h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* overlay */}
                                        <div className = "absolute top-0 bottom w-full h-full bg-black/10 z-10"></div>
                                        {/* images */}
                                        <div className = "relative w-full h-full">
                                            <Image src = {project.image} fill className = "object-cover" alt =" " />
                                        </div>
                                    </div>
                                </SwiperSlide>;
                            })}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>

        </motion.section>
    );
};
export default Work;
