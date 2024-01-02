import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Sparkles } from "@react-three/drei";
import { Character } from "./Charcter";
import Model from "./Model";
import board from "/board/board.png"

function Board() {
  const [profile, setProfile] = useState(false);
  const handleClose = () => setProfile(false);
  const handleOpen = () => setProfile(true);
  return (
    // Bet Board
    <div className="">
      <div className="flex flex-row -ml-96">
        
        {/* Board 1 */}
        <div className="w-56 h-56 mt-10 -ml-32">
          <img src={board} alt="board img"/>
          <div className="absolute ml-24 -mt-40 text-white">
            1-6
          </div>
     
        </div>
        <div className="w-56 h-56 mt-10 text-white ml-52">
          <img src={board} alt="board img"/>
          <div className="absolute ml-24 -mt-40 text-white">
            7
          </div>
        </div>
        <div className="w-56 h-56 mt-10 text-white ml-52 ">
          <img src={board} alt="board img"/>
          <div className="absolute ml-24 -mt-40">
           8-12
          </div>
        </div>

        {/* profile */}

        <div className=" -mt-60 -mr-96 sm:-mt-36 sm:mr-10 sm:w-20 sm:h-36 md:-mt-36 md:mr-10 md:w-20 md:h-36 lg:w-24 lg:h-36 lg:mr-10 lg:-mt-36 2xl:w-36 2xl:h-60 2xl:-ml-60">

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
