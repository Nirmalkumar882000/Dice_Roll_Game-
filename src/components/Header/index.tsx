import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Settings } from "./Settings";
import { Clockloop } from "./Clockloop";
import { Coin } from "./Coin";
import "./index.css";
import Model from "./Model";

function Header() {
  const [settings, setSettings] = useState(false);
  const handleClose = () => setSettings(false);
  const handleOpen = () => setSettings(true);

  return (
    <div className="container flex flex-row justify-between ml-80 sm:ml-32 md:-ml-10 lg:-ml-12 2xl:-ml-0">

      <div className="flex -ml-36 sm:ml-5 md:ml-7 lg:ml-5 2xl:ml-0"> 

        <div className="h-32 ml-10 -mt-5 sm:h-14 sm:-mt-3 sm:w-14 sm:-ml-32 md:h-16 md:w-16 md:-mt-3 lg:w-16 lg:h-16 lg:-mt-3 2xl:h-32 2xl:ml-14 2xl:-mt-8 ">
          {/* Clock */}
          <Canvas>
            <Environment preset="city" />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={1.5}
              minPolarAngle={1.5}
            />
            <ambientLight intensity={2} />
            <Suspense>
              <Clockloop />
            </Suspense>
          </Canvas>
        </div>
        <div className="text-2xl text-white mt-7 -ml-28 sm:text-xs sm:mt-2 sm:-ml-2 md:mt-2 md:-ml-2 md:text-sm lg:text-sm lg:mt-2 lg:-ml-2 2xl:text-3xl 2xl:-ml-28 2xl:mt-2">
          10.00
        </div>
      </div>

      {/* Titles */}

      <div className="mt-5 text-2xl text-white ml-72 sm:text-lg sm:ml-5 sm:mt-2 md:ml-32 md:mt-2 md:mr-5 lg:ml-24 lg:mt-2 lg:mr-5 2xl:text-4xl 2xl:mt-2 2xl:ml-60 ">
        DiceGame
      </div>

          {/* Coins Image */}

      <div className="flex mt-5 sm:mt-2 sm:-ml-14 md:mt-2 md:-ml-14 lg:-ml-14 lg:mt-2 2xl:mt-5 ">
        <div className="h-16 sm:h-8 md:h-8 lg:h-8 lg:w-8 2xl:w-16 2xl:h-16 2xl:-mt-4 ">


          <Canvas>
            <Environment preset="city" />
            <Suspense fallback={null}>
              <ambientLight intensity={2} />
              <Coin />
            </Suspense>
          </Canvas>
        </div>

        {/* balance coins */}

        <div className="text-white">
          <p className="mt-4 text-lg -ml-28 sm:mt-2 sm:text-xs sm:-ml-32 md:-ml-32 md:text-sm md:mt-2 lg:text-sm lg:ml-2 lg:mt-1 2xl:mt-1 2xl:-ml-0 2xl:text-2xl">
            14000000
          </p>
        </div>
      </div>


      {/* Setting Images */}


      <div className="h-24 mt-1 -mr-72 sm:h-8 sm:w-8 sm:mr-32 sm:mt-2 md:h-10 md:w-10 md:mr-20 md:mt-2 lg:w-10 lg:h-10 lg:mt-2 lg:-mr-10 2xl:h-24 2xl:w-24 2xl:-mr-20 2xl:-mt-2">
        <Canvas onClick={handleOpen}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={1.5}
            minPolarAngle={1.5}
          />
          <ambientLight intensity={2} />
          <Suspense>
            <Settings rotation-x={1} rotation-y={1} />
          </Suspense>
        </Canvas>
      </div>

      {/* Settings Model */}

      {settings && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center focus:outline-none backdrop-blur-sm hover:backdrop-blur-lg">
            <Model handleClose={handleClose} />
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
