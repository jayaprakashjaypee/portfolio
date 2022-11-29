import React from "react";
import bookmyshow from "../assets/portfolio/assets/bookmyshow.png";
import admindashboard from "../assets/portfolio/assets/admindashboard.png";
import ecommerce from "../assets/portfolio/assets/ecommerce.png";
import vcs from "../assets/portfolio/assets/vcs.png";

const Portfolio = () => { 
  const Portfolio= [
    { 
     id: "1",
      pname:"Bookmyshow",
      src: bookmyshow,
      url:  "https://bookmyshow-frontend-alpha.vercel.app",
      code: "https://github.com/jayaprakashjaypee/Bookmyshow-react.git",
      tech: "HTML, Css, Reactjs, Expressjs, Nodejs, MongoDb"
    },
    {
      id: "2",
      pname:"Admin dashboard",
      src: admindashboard,
      url: " https://sb-admin-dashboard-day25.netlify.app/",
      code: "https://github.com/jayaprakashjaypee/sb-admin-dashboard-main.git",
       tech: "HTML, Css, Reactjs, Nodejs, MongoDb, Socket.io"
    },
    {
      id: "3",
      pname:"E-commerce",
      src: ecommerce ,
      url: "https://jayaprakash-e-commerce.netlify.app",
      code: "	https://github.com/jayaprakashjaypee/E-Commerce-client.git",
      tech: "HTML, Bootstrap, Reactjs, Expressjs, Nodejs, MongoDb"
    } ,{
     id: "4",
      pname:"Version control system",
      src: vcs,
      url: " https://gleeful-salmiakki-6264d5.netlify.app/",
      code: "https://github.com/jayaprakashjaypee/version-control-system---frontend-1.git",
      tech: "HTML, Bootstrap, Reactjs, Redux, Expressjs, Nodejs, MongoDb, stripe"
    
    
    }  
 
   

  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-r from-gray-100 to-gray-300 w-full text-black md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8  mt-30">
          <p className="text-4xl text-gray-900 font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          {/* <p className="py-6">Check out some of my work right here</p> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 px-12 sm:px-0">
          {Portfolio.map(({ id, src, url, code,pname,tech }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                width="500"
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-center text-gray-900 font-bold fs-1 mt-4">{pname}
              {<div className="text-center fs-1 mt-4">Tech used: {tech}</div>}
</div>
              <div className="flex items-center justify-center ">
                <a href = {url} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-rcursor-pointer hover:scale-105 hover:bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600  text-gray-900 font-bold rounded-md">
                  Demo
                </a >
               
                <a href = {code} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-rcursor-pointer hover:scale-105 hover:bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600  text-gray-900 font-bold rounded-md">
                  Code
                </a>
                
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;