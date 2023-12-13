import React, { Suspense, useState } from "react";
import coin from "/dice/coin.png";
import { Canvas } from "@react-three/fiber";
import { Instruction } from "./Instruction";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import "./index.css"


function Footer() {
  const [rules,setRules]=useState(false)
  const handleClose = () => setRules(false);
  const handleOpen = () => setRules(true);

  return (
    <div className="flex flex-row justify-between">
      <div className="w-40 h-32 ml-10 -mt-5 sm:h-12 sm:w-14 sm:mt-1 md:h-12 md:w-14 md:mt-1 lg:w-14 lg:h-12 lg:mt-1  2xl:w-36 2xl:h-28" >

        {/* Instructions */}

        <Canvas onClick={handleOpen}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={1.5}
            minPolarAngle={1.5}
          />
          <ambientLight intensity={2} />
          <Suspense fallback={null}>
            <Instruction />
          </Suspense>
        </Canvas>
      </div>

      {/* Bet coins  */}

      <div className="flex justify-between">
        <img className="w-20 h-20 ml-32  hover:scale-125 sm:w-12 sm:h-12 sm:ml-5 md:w-12 md:h-12 md:ml-5 lg:w-12 lg:h-12 lg:ml-8 2xl:w-24 2xl:h-24 2xl:ml-16" src={coin} alt="coin" />
        <img className="w-20 h-20 ml-32  hover:scale-125 sm:w-12 sm:h-12 sm:ml-5  md:w-12 md:h-12 md:ml-5 lg:w-12 lg:h-12 lg:ml-8 2xl:w-24 2xl:h-24 2xl:ml-16"  src={coin} alt="coin" />
        <img className="w-20 h-20 ml-32  hover:scale-125 sm:w-12 sm:h-12 sm:ml-5  md:w-12 md:h-12 md:ml-5 lg:w-12 lg:h-12 lg:ml-8 2xl:w-24 2xl:h-24 2xl:ml-16" src={coin} alt="coin" />
        <img className="w-20 h-20 ml-32  hover:scale-125 sm:w-12 sm:h-12 sm:ml-5  md:w-12 md:h-12 md:ml-5 lg:w-12 lg:h-12 lg:ml-8 2xl:w-24 2xl:h-24 2xl:ml-16" src={coin} alt="coin" />
        <img className="w-20 h-20 ml-32  hover:scale-125 sm:w-12 sm:h-12 sm:ml-5  md:w-12 md:h-12 md:ml-5 lg:w-12 lg:h-12 lg:ml-8 2xl:w-24 2xl:h-24 2xl:ml-16" src={coin} alt="coin" />
      </div>

      {/* Wining color board or  Number show in this code  */}
 
      <div className="flex flex-row mt-5 mr-5 border-2 border-red-500 rounded-lg w-80 sm:w-20 sm:mt-2 md:w-20 md:mt-2 lg:mt-2 lg:w-24 2xl:mt-2 2xl:mr-5 2xl:w-80 2xl:h-16">
        {Array(5) 
          .fill(null)
          .map((_, index) => (
            <div className="overflow-auto truncate hover:text-clip w-80 sm:w-20 lg:w-20 2xl:w-20  ">
              <p className="mt-5 ml-1 text-lg text-white sm:ml-0 sm:text-xs sm:mt-2 md:mt-1 lg:mt-1.5 lg:text-sm 2xl:mt-2 2xl:ml-0 2xl:text-lg">R</p>
            </div>
          ))}
      </div>
      
      {/* Instructions Modal */}

      {
      rules && (
        <>
        <div className="fixed inset-0 z-50 flex items-center justify-center focus:outline-none backdrop-blur-sm hover:backdrop-blur-lg">
        <Model handleClose={handleClose}/>
        </div>
        </>
      )
    }
    </div>
    
   
  );
}

export default Footer;




