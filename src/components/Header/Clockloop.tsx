

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Clockloop(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/glb/clockloop.glb')
  const { actions } = useAnimations(animations, group)


  useEffect(()=>{
    console.log(actions)
    actions.Animation.play()
  },[])


  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Circle_0" position={[-0.001, 0.03, -0.027]} rotation={[Math.PI / 2, 0, 0]} scale={0.522}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
              </group>
              <group name="minute_1" position={[0.008, 0.036, 0.042]} rotation={[0, 0, -0.436]}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Material.001']} />
              </group>
              <group name="numbers_2" position={[0.006, 0.036, 0.014]} rotation={[Math.PI / 2, -0.635, 0]} scale={[0.192, 0.192, 0.286]}>
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Material.001']} />
              </group>
              <group name="hour_3" position={[0.008, 0.035, 0.031]} rotation={[0, 0, -0.122]}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Material.001']} />
              </group>
              <group name="Circle004_4" position={[-0.001, 0.03, -0.009]} rotation={[Math.PI / 2, 0, 0]} scale={0.522}>
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Material.001']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/clockloop.glb')
