import React, { Suspense, useState } from "react";
import manual from "/dice/manual.gif";
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
      <div className="w-40 h-32 ml-10 -mt-5" >
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
      <div className="flex justify-between">
        <img className="w-20 h-20 ml-32 " src={coin} alt="coin" />
        <img className="w-20 h-20 ml-32 " src={coin} alt="coin" />
        <img className="w-20 h-20 ml-32 " src={coin} alt="coin" />
        <img className="w-20 h-20 ml-32 " src={coin} alt="coin" />
        <img className="w-20 h-20 ml-32" src={coin} alt="coin" />
      </div>
      <div className="flex flex-row mt-5 mr-5 border-2 border-red-500 rounded-lg w-80 ">
        {Array(20) 
          .fill(null)
          .map((_, index) => (
            <div className="overflow-auto truncate hover:text-clip w-80 ">
              <p className="mt-5 ml-1 text-lg text-white ">R G O</p>
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




