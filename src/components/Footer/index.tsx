import React, { Suspense } from "react";
import manual from "/dice/manual.gif";
import coin from "/dice/coin.jpg"
import { Canvas } from "@react-three/fiber";
import { Instruction } from "./Instruction";
import { OrbitControls } from "@react-three/drei";

function Footer() {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-40 h-32 ml-10 -mt-5">
        {/* <img src={manual} alt="loading..." /> */}
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={1.5} minPolarAngle={1.5} />
          <ambientLight intensity={2}/>
          <Suspense fallback={null}>
          <Instruction/>
          </Suspense>
        </Canvas>
      </div>
      <div className="flex justify-between">
        <img className="w-20 h-20 ml-32 " src={coin} alt="coin"/>
        <img className="w-20 h-20 ml-32 " src={coin} alt="coin"/>
        <img className="w-20 h-20 ml-32 " src={coin} alt="coin"/>
        <img className="w-20 h-20 ml-32 " src={coin} alt="coin"/>
        <img className="w-20 h-20 ml-32" src={coin} alt="coin"/>
      </div>
      <div className="mt-5 mr-5 border-2 border-red-500 rounded-lg">
        <p className="m-5 text-lg text-white">
        R G O R G O R G O R G O   R G O R 
        </p>
      </div>
    </div>
  );
}

export default Footer;






