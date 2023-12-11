

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Dice1(props) {
  const { nodes, materials } = useGLTF('/glb/dice1.glb')
  const mesh=useRef()
  useFrame((state,delta)=>{
    mesh.current.rotation.x += delta * 1
    mesh.current.rotation.y += delta * 1
    mesh.current.rotation.z += delta * 1
  })

  return (
    <group ref={mesh} {...props} dispose={null} scale={0.8}>
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
