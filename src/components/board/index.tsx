import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Sparkles } from "@react-three/drei";
import { Character } from "./Charcter";
import Model from "./Model";

function Board() {
  const [profile, setProfile] = useState(false);
  const handleClose = () => setProfile(false);
  const handleOpen = () => setProfile(true);
  return (
    // Bet Board
    <div className="">
      <div className="flex flex-row justify-evenly sm:ml-0 md:ml-0 lg:ml-0 2xl:-ml-96">
        
        {/* Board 1 */}

        <div className="  mr-32 h-64 bg-red-300 border-8 border-red-500 rounded-lg shadow-2xl w-80 shadow-red-500/50 hover:scale-105  sm:w-28 sm:h-24 sm:mr-20  md:w-32 md:h-28 md:mr-20 lg:w-32 lg:h-28  lg:mr-20">
          <div className="mt-16 w-28 h-28 ml-28 sm:ml-8 sm:mt-5 md:ml-8 md:mt-5 lg:ml-10 lg:mt-7 ">
            <p className="italic font-extrabold text-white text-7xl font-Iomanoid text drop-shadow-2xl sm:text-2xl  md:text-2xl lg:text-2xl">
              1-6{" "}
            </p>
          </div>
        </div>
        {/* Board 2 */}
        <div className="mr-24 h-64 bg-green-300 border-8 border-green-500 rounded-lg shadow-2xl w-80 shadow-green-500/50 hover:scale-105  sm:w-28 sm:h-24 sm:mr-10 md:w-32 md:h-28 md:mr-10 lg:w-32 lg:h-28 lg:mr-10">
          <div className="mt-16 w-28 h-28 ml-28 sm:ml-10 sm:mt-5 md:ml-12 md:mt-5 lg:ml-12 lg:mt-7">
            <p className="italic font-extrabold text-white text-7xl font-Iomanoid drop-shadow-2 sm:text-2xl md:text-2xl lg:text-2xl">
              {" "}
              7{" "}
            </p>
          </div>
        </div>
        {/* Board 3 */}
        <div className=" ml-8 h-64 bg-orange-300 border-8 border-orange-500 rounded-lg shadow-2xl w-80 shadow-orange-500/50 hover:scale-105 sm:w-28 sm:h-24 sm:-mr-20 md:w-32 md:h-28 md:-mr-20 lg:w-32 lg:h-28 lg:-mr-20">
          <div className="mt-16 w-28 h-28 ml-28 sm:ml-8 sm:mt-5 md:ml-8 md:mt-5 lg:ml-10 lg:mt-7">
            <p className="text-6xl italic font-extrabold text-white font-Iomanoid drop-shadow-2xl sm:text-2xl md:text-2xl lg:text-2xl">
              8-12
            </p>
            
          </div>
        </div>

        {/* profile */}

        <div className=" -mt-60 -mr-96 sm:-mt-36 sm:mr-10 sm:w-20 sm:h-36 md:-mt-36 md:mr-10 md:w-20 md:h-36 lg:w-24 lg:h-36  lg:mr-10 lg:-mt-36 2xl:w-36  2xl:h-60 2xl:-ml-60   ">

          <Canvas onClick={handleOpen} style={{marginTop:"50px"}}>
            <Sparkles size={2} count={500} />
            <ambientLight intensity={4} />
            <Environment preset="sunset" />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={1.5}
              minPolarAngle={1.5}
            />
            <Suspense fallback={null}>
              <Character />
            </Suspense>
          </Canvas>

        
        </div>
      </div>
      {/* Profile Models */}

      {profile && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center focus:outline-none backdrop-blur-sm hover:backdrop-blur-lg">
            <Model handleClose={handleClose} />
          </div>
        </>
      )}
    </div>
  );
}
export default Board;
