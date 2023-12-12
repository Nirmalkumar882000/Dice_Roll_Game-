import React, { Suspense, useRef } from "react";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import dice from "/dice/dice.png";
import { Canvas, useFrame } from "@react-three/fiber";

import { Dice1 } from "./Dice1";

function GameArea() {
  return (
    <>
      <div className="h-64 border-8 rounded-lg w-96 border-sky-500 bg-sky-300 shadow-2xl shadow-sky-500/50">
        <div className="h-64 w-80 ">
          <Canvas>
            <ambientLight intensity={2}/>
            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={1.5} minPolarAngle={1.5}/>
            <Suspense fallback={null}>
            <Dice1 position={[1,0,0.5]}/>
             <Dice1 position={[-1,0,0]}/>
            </Suspense>
           
          </Canvas> 
        </div>
      </div>
    </>
  );
}

export default GameArea;
  


// function Box (props){
//   const ref=useRef()
//   useFrame((state,delta)=>{
//     ref.current.rotation.x += delta * 1
//     ref.current.rotation.y += delta * 1
//     ref.current.rotation.z += delta * 1
//   })

//   return(
//     <mesh ref={ref} {...props} scale={1.5}>
//       <boxGeometry/>
//       <meshNormalMaterial/>
//     </mesh>
//   )
// }













// <Canvas style={{ height: 600, width: 600 }}>
//       <pointLight position={[5, 5, 5]} />
//       <RoundedBox args={[3, 3, 0.25]} radius={0.1}>
//         <meshLambertMaterial attach="material" color={"grey"} />
//       </RoundedBox>
//       <OrbitControls />
//       <Stats />
//     </Canvas>  