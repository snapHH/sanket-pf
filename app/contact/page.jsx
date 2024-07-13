"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@radix-ui/react-select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import React, {useRef} from "react";

const info =[
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "(+91) 7420840871",
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "sanketph01@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Address",
        description: "Nagpur, Maharashtra, India",

    },

];

import { motion } from "framer-motion";

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {


    emailjs
      .sendForm('service_2yd5iub', 'template_wp90bgx', form.current, {
        publicKey: 'WlzeZEvgYRuQYmMcD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <motion.section initial = {{opacity:0}} 
        animate= {{opacity: 1, 
                transition : {delay: 2.4, duration: 0.4, ease: "easeIn"},
    }} 
    className = "py-6"
    ><div className="container mx-auto">
        <div className = "flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className = "xl:w-[54%] order-2 xl:order-none">
                <form className = "flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" ref = {form} onSubmit ={sendEmail}>
                    <h3 className = "text-4xl text-accent">Contact here</h3>
                    <p className ="text-white/60">Hello! I want to kickstart my career as a Software Development Engineer SDE fresh out of school. I want to learn and grow in my career while contributing to your team's success. Let's collaborate and achieve great things together!</p>
                    {/* input */}
                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type = "firstname" placeholder="Firstname" name = "firstname" />
                    <Input type = "lastname" placeholder="Lastname" name = "lastname"/>
                    <Input type = "email" placeholder="Email address" name = "email"/>
                    <Input type = "phone" placeholder="Phone number" name = "phone"/>
                    </div>
                    {/* select */}
                    {/* <Select>
                        <SelectTrigger className = "w-full">
                            <SelectValue placeholder ="Hire for"/>
                        </SelectTrigger>
                    </Select> */}
                    {/* textarea */}
                    <Textarea className = "h-[200px] bg-primary " placeholder = "Type Your Message"  name = "message"/>
                    {/* btn */}
                    <Button size ="md" className = "max-w-40 " type = "submit" value = "send">Send Message</Button>

                </form>
            </div>
            {/* info */}
            <div className = "flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className = "flex flex-col gap-10">
                    {info.map((item, index)=>{
                        return(
                            <li key={index} className = "flex items-center gap-6">
                                <div className = "w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                                    <div>{item.icon}</div>
                                    </div>
                                    <div className = "flex-1"><p className = "text-white/60">{item.title}</p>
                                    <h3 className = "text-xl">{item.description}</h3>
                                    </div>
                                
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
            </div>
            </motion.section>
    )
};
export default Contact;