import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Sparkles} from "@react-three/drei";
import { Character } from "./Charcter";
import Model from "./Model";


function Board() {
  const [profile,setProfile]=useState(false)
  const handleClose = () => setProfile(false);
  const handleOpen = () => setProfile(true);
  return (
    
    // Bet Board
    <div className="">
      <div className="flex flex-row justify-evenly">
        <div className="  mr-32 h-5/6 bg-red-300 border-8 border-red-500 rounded-lg shadow-2xl w-80 shadow-red-500/50 hover:scale-125">
          <div className="mt-16 w-28 h-28 ml-28">
            <p className="italic font-extrabold text-white text-7xl font-Iomanoid text drop-shadow-2xl">1-6 </p>
          </div>
        </div>

        <div className="mr-24 h-5/6 bg-green-300 border-8 border-green-500 rounded-lg shadow-2xl w-80 shadow-green-500/50 hover:scale-125">
        <div className="mt-16 w-28 h-28 ml-28">
            <p className="italic font-extrabold text-white text-7xl font-Iomanoid drop-shadow-2"> 7 </p>
          </div>
        </div>
        <div className=" ml-8 h-5/6 bg-orange-300 border-8 border-orange-500 rounded-lg shadow-2xl w-80 shadow-orange-500/50 hover:scale-125">
        <div className="mt-16 w-28 h-28 ml-28">
            <p className="text-6xl italic font-extrabold text-white font-Iomanoid drop-shadow-2xl">8-12</p>
          </div>
        </div>
        {/* profile */}
      <div className="-mt-60 -mr-96">
          <Canvas onClick={handleOpen}>
          <Sparkles size={2} count={500}/>
            <ambientLight intensity={4}/>
            <Environment preset="sunset"/>
            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={1.5} minPolarAngle={1.5}/>
            <Suspense fallback={null}>
              <Character/>
            </Suspense>
          </Canvas>
        </div>
      </div>
      {/* Profile Models */}

      {
      profile && (
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
export default Board;
