"use client";
 import {BsArrowDownRight} from "react-icons/bs";
 import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
    {
        num: "01",
        title: "Web Devleopment",
        description: " I design and deploy interactive and user-friendly web applications using technologies like ReactJS, NextJS, HTML, CSS, and SQL. My experience includes creating secure e-commerce platforms and comprehensive bus management systems, ensuring seamless user experiences and robust backend functionality.",
        href: ""
    },
    {
        num: "02",
        title: "Software Development",
        description: " I developed applications using Python and various frameworks like flask and django. My proficiency in Python-based application development.",
        href: ""
    },
    {
        num: "03",
        title: "Data Science",
        description: " I deployed predictive models using libraries like pandas, numpy, and matplotlib for data visualization and also have the experience in jupyter notebook and google collab. I harnessed these tools to analyze data effectively, providing valuable insights and contributing to data-driven decision-making processes.",
        href: ""
    },
    {
        num: "04",
        title: "Data Analytics",
        description: "I also specialized in visualizing complex data sets using tools like Tableau and Power BI. I extracted actionable insights by applying my skills in data manipulation and visualization, aiding businesses in making informed and strategic decisions.",
        href: ""
    },

];

import {motion} from "framer-motion";

const Services = () => {
    return (
        <section className = "min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
           <div className="container mx-auto">

            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 2.4, duration: 0.4, ease: "easeIn" },
        }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                {services.map((service, index) => {
                    return (
                        
                        <div key ={index} className = "flex-1 flex flex-col justify-center gap-6 group">
                                        <h3>Interested In</h3>
                            <div className = "w-full flex justify-between items-center">
                            <div className = "text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                               {service.num} 
                            </div>
                            <Link href={service.href} className = "w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className = "text-primary text-3xl"/>
                            </Link>
                            </div>

                            {/* title */}
                            <h2 className = "text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">{service.title}</h2>
                            {/* description */}
                            <p className = "text-white/60">{service.description}</p>
                            {/* border */}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    )
                } )}
            </motion.div>
           </div>

        </section>
    );
};
export default Services;