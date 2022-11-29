import React from "react";
import { FaGithub,  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa"

 
function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/jaya-prakash-2089a9210//",
    },


    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/jayaprakashjaypee",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:jayaprakash.m786@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1WD2JYIvmCL2EWY3U3S43DsH6Ycdkcqcl/view?usp=share_link",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden sml:flex lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-gray-900" +
              " " +
              style}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full font-bold text-gray-900"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
