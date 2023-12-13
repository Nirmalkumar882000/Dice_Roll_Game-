import React, { Suspense, useRef, useState } from "react";
import { OrbitControls, RoundedBox, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Dice1 } from "./Dice1";
import { Physics, usePlane } from "@react-three/cannon";

function GameArea() {
  
  return (
    <>
      <div className="h-5/6 border-8 rounded-lg shadow-2xl  border-sky-500 bg-sky-300 shadow-sky-500/50">
        <div className="h-5/6 w-80 ">
          <Canvas>
            <ambientLight intensity={2} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={0.5}
              minPolarAngle={0.5}
            />
            <Suspense fallback={null}>
              <Physics>
            <Ground position={[0,-2,-10]}/>
                <Dice1 position={[1, 0, 0]} />
                <Dice1 position={[-1, 0, 0]} />
              </Physics>
            </Suspense>
          </Canvas>
        </div>
        
        {/* Profile Model */}
        
      </div>
    </>
  );
}

export default GameArea;

function Ground(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh
    ref={ref}
      scale={5}
      receiveShadow
      {...props}
      rotation={[0 * Math.PI, 0, 0]}
      
    >
      <planeGeometry dispose={false} />
      <meshBasicMaterial color={"#7DD3FC"} />
    </mesh>
  );
}




// <Canvas style={{ height: 600, width: 600 }}>
//       <pointLight position={[5, 5, 5]} />
//       <RoundedBox args={[3, 3, 0.25]} radius={0.1}>
//         <meshLambertMaterial attach="material" color={"grey"} />
//       </RoundedBox>
//       <OrbitControls />
//       <Stats />
//     </Canvas>
