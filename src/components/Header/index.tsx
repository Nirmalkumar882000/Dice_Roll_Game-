import React, { Suspense } from 'react'
import img from "/coins/Coin.png"

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Text, Text3D } from '@react-three/drei'
import { Settings } from './Settings'
import { Clockloop } from './Clockloop'
import { Coin } from './Coin'



function Header() {
  return (
    <div className='container flex flex-row justify-between ml-80'>
      <div className='flex -ml-36'>
        <div className='h-32 ml-10 -mt-5'>
          <Canvas>
            <Environment preset='city'/>
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={1.5} minPolarAngle={1.5}/>
        <ambientLight intensity={2}/>
        <Suspense>
         <Clockloop/>
        </Suspense>
       </Canvas>
        </div>
        <div className='text-2xl text-white mt-7 -ml-28'>
        10.00
        </div>
      </div>
      <div className='mt-5 text-2xl text-white ml-72'>
        Dice Game
      </div>
      <div className='flex mt-5 '>
        <div className='h-16'>
          <Canvas>
            <Environment preset='city'/>
            <Suspense fallback={null}>
              <ambientLight intensity={2}/>
              <Coin/>
            </Suspense>
          </Canvas>
        </div> 
        <div className='text-white'>
          <p className='mt-4 text-lg -ml-28 '>
          1400000
          </p>
        </div>
      </div>
      <div className='h-24 mt-1 -mr-72'>
       <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={1.5} minPolarAngle={1.5}/>
        <ambientLight intensity={2}/>
        <Suspense>
           <Settings rotation-x={1} rotation-y={1}/>
        </Suspense>
       </Canvas>
      </div>
    </div>
  )
}

export default Header
