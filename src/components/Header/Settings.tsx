

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Settings(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/glb/settings.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(()=>{
    actions.Animation.play()
  },[])

  return (
    <group ref={group} {...props} dispose={null} scale={2}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.39}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Gear_0" position={[0, 0, 2]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.material} />
              </group>
              <group name="Gear001_1" position={[0, 0.684, 1.879]}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.material} />
              </group>
              <group name="Gear002_2" position={[0, 1.286, 1.532]}>
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.material} />
              </group>
              <group name="Gear003_3" position={[0, 1.732, 1]}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.material} />
              </group>
              <group name="Gear004_4" position={[0, 1.97, 0.347]}>
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.material} />
              </group>
              <group name="Gear005_5" position={[0, 1.97, -0.347]}>
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.material} />
              </group>
              <group name="Gear006_6" position={[0, 1.732, -1]}>
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.material} />
              </group>
              <group name="Gear007_7" position={[0, 1.286, -1.532]}>
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.material} />
              </group>
              <group name="Gear008_8" position={[0, 0.684, -1.879]}>
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.material} />
              </group>
              <group name="Gear009_9" position={[0, 0, -2]}>
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.material} />
              </group>
              <group name="Gear010_10" position={[0, -0.684, -1.879]}>
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.material} />
              </group>
              <group name="Gear011_11" position={[0, -1.286, -1.532]}>
                <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.material} />
              </group>
              <group name="Gear012_12" position={[0, -1.732, -1]}>
                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.material} />
              </group>
              <group name="Gear013_13" position={[0, -1.97, -0.347]}>
                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.material} />
              </group>
              <group name="Gear014_14" position={[0, -1.97, 0.347]}>
                <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.material} />
              </group>
              <group name="Gear015_15" position={[0, -1.732, 1]}>
                <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.material} />
              </group>
              <group name="Gear016_16" position={[0, -1.286, 1.532]}>
                <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.material} />
              </group>
              <group name="Gear017_17" position={[0, -0.684, 1.879]}>
                <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.material} />
              </group>
              <group name="Circle018_37" scale={[4.1, 1, 4.1]}>
                <group name="Torus_36" rotation={[0, 0, Math.PI / 2]} scale={[1, 0.244, 0.244]}>
                  <mesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.material_1} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/settings.glb')
