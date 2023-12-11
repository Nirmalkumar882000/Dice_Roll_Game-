import React, { Suspense } from 'react'
import img from "/coins/Coin.png"
import settings from "/dice/settings.gif"
import timer from "/dice/timer.gif"

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Settings } from './Settings'
import { Clockloop } from './Clockloop'


function Header() {
  return (
    <div className='container flex flex-row justify-between ml-80'>
      <div className='flex -ml-36'>
        <div className='h-32 ml-10 -mt-5'>
          {/* <img className='w-16 h-16' src={timer} alt='loading...'/> */}
          <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={1.5} minPolarAngle={1.5}/>
        <ambientLight intensity={1}/>
        <Suspense>
         <Clockloop/>
        </Suspense>
       </Canvas>
        </div>
        <div className='text-2xl text-white mt-7 -ml-28'>
        10.00
        </div>
      </div>
      <div className='mt-5 text-2xl text-white ml-60'>
        Dice Game
      </div>
      <div className='flex mt-5 '>
        <div className=' mt-0.5 mr-2'>
          <img className='w-12 h-12 ' src={img} alt='img'/>
        </div> 
        <div className='text-white'>
          <p className='mt-4 text-lg '>
          1400000
          </p>
        </div>
      </div>
      <div className='h-24 mt-1 -mr-72'>
       {/* <img className='w-16 h-16' src={settings} alt='loading...'/> */}
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
