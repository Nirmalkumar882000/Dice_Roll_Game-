

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {useBox} from "@react-three/cannon"

export function Dice1(props) {
  const { nodes, materials } = useGLTF('/glb/dice1.glb')
  

  const [ref, api] = useBox(() => ({
    mass: 0.1,
    position: [0, 0.2, 0],
    allowSleep: false, // if i keep this to true in will still be asleep when i want to reroll the dice :(
    sleepSpeedLimit: 1,
    args: [0.22, 0.22, 0.22],
    material: {
      friction: 1,
      restitution: 1
    }
  }));

  
  const rerollDice = () => {
    api.velocity.set(-1, 0, 0);
    api.angularVelocity.set(
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10)
    );
    api.rotation.set(2, 3, 1);
    api.position.set(2, 8, -3);
  };

  useEffect(()=>{
    rerollDice()
  },[])






  return (
    <group {...props}  dispose={null} scale={1} onClick={rerollDice} ref={ref} >
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube_body_0.geometry} material={materials.body} />
          <mesh geometry={nodes.Cube_body_0_1.geometry} material={materials.body} />
          <mesh geometry={nodes.Cube_body_0_2.geometry} material={materials.body} />
          <mesh geometry={nodes.Cube_body_0_3.geometry} material={materials.body} />
          <mesh geometry={nodes.Cube_body_0_4.geometry} material={materials.body} />
          <mesh geometry={nodes.Cube_body_0_5.geometry} material={materials.body} />
          <mesh geometry={nodes.Cube_body_0_6.geometry} material={materials.body} />
          <mesh geometry={nodes.Cube_body_0_7.geometry} material={materials.body} />
          <mesh geometry={nodes.Cube_Whole_0.geometry} material={materials.Whole} />
          <mesh geometry={nodes.Cube_Whole_0_1.geometry} material={materials.Whole} />
          <mesh geometry={nodes.Cube_Whole_0_2.geometry} material={materials.Whole} />
          <mesh geometry={nodes.Cube_Whole_0_3.geometry} material={materials.Whole} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/dice1.glb')
