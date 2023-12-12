

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ccoin(props) {
  const { nodes, materials } = useGLTF('/glb/ccoin.glb')
  return (
    <group {...props} dispose={null} scale={20}>
      <mesh geometry={nodes.Coin01__0.geometry} material={materials['Scene_-_Root']} />
    </group>
  )
}

useGLTF.preload('/glb/ccoin.glb')
