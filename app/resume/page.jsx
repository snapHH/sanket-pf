"use client";
import {FaHtml5,FaCss3, FaJs, FaReact, FaJava, FaPython, FaNode, FaPhp } from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from  "react-icons/si";
import { SiDjango, SiMongodb, SiFlask, SiTensorflow, SiScikitlearn, SiGit} from "react-icons/si";

const about = {
    title: "About Me",
    description: "A fresher interested in software development. I've just begun my journey, equipped with foundational programming skills and a strong desire to learn and grow. My goal is to contribute to various projects, gaining practical experience while making a meaningful impact in the software development industry.",
    info: [
        {
            fieldName : "Name",
            fieldValue : "Sanket Hadap"
        },
        {
            fieldName : "Experience",
            fieldValue: "1 Year",
        },
        {
            fieldName : "Phone",
            fieldValue: "(+91) 7420840871",
        },
        {
            fieldName : "Email",
            fieldValue: "sanketph01@gmail.com",
        },
        {
            fieldName : "LinkedIn",
            fieldValue: "www.linkedin.com/in/sanket-hadap-691214248/",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian"
        },

    ]
};

// experience data

 const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description: "A fresher interested in software development. I've just begun my journey, equipped with foundational programming skills and a strong desire to learn and grow. My goal is to contribute to various projects, gaining practical experience while making a meaningful impact in the software development industry.",
    items: [{
        title: "Data Science Intern",
        Company: "Protuner Technologies ",
        duration: "2024"
    },
    {
        title: "Full-Stack Developer Intern",
        Company: "Gurukrupa Educations ",
        duration: "2023-2024"
    }
    ] 
 }; 
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "Recent MCA graduate from Mumbai University, seeking a challenging position in the field of software development and Frontend Development where I can leverage my strong programming skills, analytical abilities, and passion for technology. Eager to contribute to innovative projects, enhance system efficiencies, and support organizational growth through expertise in programming languages, data analysis, and advanced technologies. Looking forward to applying my knowledge to drive success in the industry." ,
    items: [
        {
            institution: "University Of Mumbai",
            degree: "Master of Computer Application",
            duration: "2022-2024",
        },
        {
            institution: "Nevjabai Hitkarini College",
            degree: "Bachelors of Computer Science",
            duration: "2019-2022",
        },
        {
            institution: "NPTEL(Online Course Platform)",
            degree: "Programming in Java",
            duration: "2024",
        },
        {
            institution: "NPTEL(Online Course Platform)",
            degree: "Database Management System",
            duration: "2023",
        },
        {
            institution: "APNA COLLEGE(Online Course Platform)",
            degree: "DSA with Java",
            duration: "2022-2023",

        },
    ],
};
// skills data
const skills = {
    title : "My Skills",
    description: "I have a strong background in programming languages, data analysis, and advanced technologies.",
    skilllist : [
        {
            icon: <FaHtml5/>,
            name: "HTML5",
        },
        {
            icon: <FaCss3/>,
            name: "CSS3",
        },
        {
            icon: <FaJs/>,
            name: "JavaScript",
        },
        {
            icon: <FaReact/>,
            name: "React",
        },
        {
            icon: <FaPhp/>,
            name: "PHP",
        },
        {
            icon: <SiTailwindcss/>,
            name: "Tailwind CSS",
        },
        {
            icon: <SiNextdotjs/>,
            name: "Next.js",
        },
        {
            icon: <FaPython/>,
            name: "Python",
        },
        {
            icon: <FaJava/>,
            name: "Java",
        },
        {
            icon: <SiDjango/>,
            name: "Django",
        },
        {
            icon: <SiFlask/>,
            name: "Flask",
        },
        {
            icon: <SiGit/>,
            name: "Git",
        }

    ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipArrow, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; 
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
    }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs defaultValue = "experience" 
            className = "flex flex-col xl:flex-row gap-[60px]">
                <TabsList className = "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value = "experience">Experience</TabsTrigger>
                    <TabsTrigger value = "education">Education</TabsTrigger>
                    <TabsTrigger value = "skills">Skills</TabsTrigger>
                    <TabsTrigger value = "about">About Me</TabsTrigger>
                </TabsList>
                {/* content */}
                <div className = "min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value = "experience" className = "w-full">
                        <div className = "flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className = "text-4xl font-bold">{experience.title}</h3>
                        <p className = "max-w-[600px] text-white/60 mx-auto xl:mx-0 justify-center">{experience.description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className = "grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experience.items.map((item, index)=>{
                                    return (
                                        <li
                                        key = {index}
                                        className = "bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className ="text-accent">{item.duration}</span>
                                            <h3 className = "text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.title}</h3>
                                            <div className = "flex items-center gap-3">
                                                {/*  */}
                                               <span className = "w-[6px] h-[6px] rounded-full bg-accent"></span> 
                                               <p className = "text-white/60">{item.Company}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* education */}
                    <TabsContent value = "education" className = "w-full">
                    <div className = "flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className = "text-4xl font-bold">{education.title}</h3>
                        <p className = "max-w-[600px] text-white/60 mx-auto xl:mx-0 justify-center">{education.description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className = "grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {education.items.map((item, index)=>{
                                    return (
                                        <li
                                        key = {index}
                                        className = "bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className = "text-accent">{item.duration}</span>
                                            <h3 className = "text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.institution}</h3>
                                            <div className = "flex items-center gap-3">
                                                {/*  */}
                                                <span className = "w-[6px] h-[6px] rounded-full bg-accent"></span>  
                                               <p className = "text-white/60">{item.degree}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* skills */}
                    <TabsContent value = "skills" className = "w-full">
                    <div className = "flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className = "text-4xl font-bold">{skills.title}</h3>
                        <p className = "max-w-[600px] text-white/60 mx-auto xl:mx-0 justify-center">{skills.description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
                                {skills.skilllist.map((item, index)=>{
                                    return (
                                        <li key = {index}>
                                            <TooltipProvider delayDuration ={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className ="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group]">
                                                        <div className = "text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className = "capitalize">{item.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        {/* key = {index}
                                        className = "bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className = "text-accent text-4xl">{item.icon}</span>
                                            <h3>{item.name}</h3> */}
                                            {/* <div>
                                               <span></span> 
                                               <p>{item.Company}</p>
                                            </div> */}
                                        </li>
                                    );
                                })}
                            </ul>
                        </ScrollArea>
                        </div>
                    </TabsContent>
                     {/* about me */}
                    <TabsContent value = "about" className = "w-full">
                    <div className = "flex flex-col gap-[10px] text-center xl:text-left">
                            <h3 className = "text-4xl font-bold">{about.title}</h3>
                        <p className = "max-w-[600px] text-white/60 mx-auto xl:mx-0 justify-center">{about.description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className = "grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {about.info.map((item, index)=>{
                                    return (
                                        <li
                                        key = {index}
                                        className = "bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className = "text-accent">{item.fieldName}</span>
                                            <h3>{item.fieldValue}</h3>
                                            {/* <div>
                                               <span></span> 
                                               <p>{item.Company}</p>
                                            </div> */}
                                        </li>
                                    )
                                })}
                            </ul>
                        </ScrollArea>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
        </motion.div>
    )
};
export default Resume;
