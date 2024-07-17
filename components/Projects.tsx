import React from "react";
import { workExperience } from "@/data";
import { Button } from './ui/MovingBorders';
import '../styles/global.scss';

const Projects = () => {
  return (
    <div className="py-20 w-full relative">
      <h1 className="heading title lg:text-8xl">
        Recent <span className="text-purple lg:text-8xl">Projects</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 p-0">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 card"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
              <div className="imageContainer">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                />
              </div>
              
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Projects;