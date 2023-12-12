import React, { Suspense } from "react";
import dice from "/dice/dice.png";
import profile from "/dice/profile.gif";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, RoundedBox } from "@react-three/drei";
import { Character } from "./Charcter";


function Board() {
  return (
    
    // Bet Board
    <div className="">
      <div className="flex flex-row justify-evenly">
        <div className="h-64 mr-32 bg-red-300 border-8 border-red-500 rounded-lg w-80">

          <div className="mt-16 w-28 h-28 ml-28">
            <p className="italic font-extrabold text-white text-7xl font-Iomanoid text">1-6 </p>
          </div>
        </div>
        <div className="h-64 mr-24 bg-green-300 border-8 border-green-500 rounded-lg w-80">
        <div className="mt-16 w-28 h-28 ml-28">
            <p className="italic font-extrabold text-white text-7xl font-Iomanoid">7 </p>
          </div>
        </div>
        <div className="h-64 ml-8 bg-orange-300 border-8 border-orange-500 rounded-lg w-80 ">
        <div className="mt-16 w-28 h-28 ml-28">
            <p className="text-6xl italic font-extrabold text-white font-Iomanoid">8-12</p>
          </div>
        </div>
        {/* profile */}
      <div className="-mt-60 -mr-96">
          <Canvas>
            <ambientLight intensity={3}/>
            <Environment preset="city"/>
            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={1.5} minPolarAngle={1.5}/>
            <Suspense fallback={null}>
              <Character/>
            </Suspense>
          </Canvas>
        </div>

      </div>
     
    </div>
  );
}
export default Board;
