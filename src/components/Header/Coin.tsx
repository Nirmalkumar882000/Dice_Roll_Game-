

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Coin(props) {
  const { nodes, materials } = useGLTF('/glb/coin.glb')
  const ref=useRef()
  useFrame((state,delta)=>{
    ref.current.rotation.x += delta *1
    ref.current.rotation.y += delta *1
    ref.current.rotation.z += delta *1


  },[])
  return (
    <group ref={ref} {...props} dispose={null} scale={8}>
      <mesh geometry={nodes.Coin.geometry} material={materials.Gold} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/glb/coin.glb')
