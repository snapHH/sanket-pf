import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaTwitter, FaYoutube,} from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa6";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/snapHH/"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sanket-hadap-691214248"},
    // {icon: <FaYoutube />, path: ""},
    {icon: <FaXTwitter />, path: "https://x.com/sanket_hadap07"},

];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className= {containerStyles}>
            {socials.map((item, index) => {
                return (<Link key = {index} href={item.path} className = {iconStyles}>
                    {item.icon}
                </Link>
                );
            })}
        </div>
    );
};

export default Social;