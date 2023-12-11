

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Character(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/glb/charcter.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(()=>{
    console.log(actions)
    // actions.Run.play()
    actions.Walk.play()

  },[])

  return (
    <group ref={group} {...props} dispose={null} scale={1.2}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name="Rogue" position={[0, 0, 0.166]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Rogue_1" geometry={nodes.Rogue_1.geometry} material={materials.Skin} skeleton={nodes.Rogue_1.skeleton} />
            <skinnedMesh name="Rogue_2" geometry={nodes.Rogue_2.geometry} material={materials.UnderShirt} skeleton={nodes.Rogue_2.skeleton} />
            <skinnedMesh name="Rogue_3" geometry={nodes.Rogue_3.geometry} material={materials.Pants} skeleton={nodes.Rogue_3.skeleton} />
            <skinnedMesh name="Rogue_4" geometry={nodes.Rogue_4.geometry} material={materials.Shirt} skeleton={nodes.Rogue_4.skeleton} />
            <skinnedMesh name="Rogue_5" geometry={nodes.Rogue_5.geometry} material={materials.Detail} skeleton={nodes.Rogue_5.skeleton} />
            <skinnedMesh name="Rogue_6" geometry={nodes.Rogue_6.geometry} material={materials.Boots} skeleton={nodes.Rogue_6.skeleton} />
          </group>
          <skinnedMesh name="Rogue001" geometry={nodes.Rogue001.geometry} material={materials['Material.006']} skeleton={nodes.Rogue001.skeleton} position={[0, 0, 0.166]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/charcter.glb')
