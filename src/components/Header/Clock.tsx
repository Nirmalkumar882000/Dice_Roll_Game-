

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Clock(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/glb/clock.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="adca83930ede4e249d335b26905d820ffbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Minute_Hand" position={[-2.198, 16.342, -0.71]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Minute_Hand_Black_0" geometry={nodes.Minute_Hand_Black_0.geometry} material={materials.Black} />
                  <mesh name="Minute_Hand_Yellow_Emission_0" geometry={nodes.Minute_Hand_Yellow_Emission_0.geometry} material={materials.Yellow_Emission} />
                </group>
                <group name="Hour_Hand" position={[-2.198, 16.342, -0.71]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Hour_Hand_Black_0" geometry={nodes.Hour_Hand_Black_0.geometry} material={materials.Black} />
                  <mesh name="Hour_Hand_Yellow_Emission_0" geometry={nodes.Hour_Hand_Yellow_Emission_0.geometry} material={materials.Yellow_Emission} />
                </group>
                <group name="Decorative_Sticks" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Decorative_Sticks_Yellow_Metallic_(Base)_0" geometry={nodes['Decorative_Sticks_Yellow_Metallic_(Base)_0'].geometry} material={materials.Yellow_Metallic_Base} />
                  <mesh name="Decorative_Sticks_Yellow_Metallic_(Base)_0_1" geometry={nodes['Decorative_Sticks_Yellow_Metallic_(Base)_0_1'].geometry} material={materials.Yellow_Metallic_Base} />
                  <mesh name="Decorative_Sticks_Yellow_Metallic_(Base)_0_2" geometry={nodes['Decorative_Sticks_Yellow_Metallic_(Base)_0_2'].geometry} material={materials.Yellow_Metallic_Base} />
                  <mesh name="Decorative_Sticks_Yellow_Metallic_(Base)_0_3" geometry={nodes['Decorative_Sticks_Yellow_Metallic_(Base)_0_3'].geometry} material={materials.Yellow_Metallic_Base} />
                </group>
                <group name="Decoration_Spheres" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Decoration_Spheres_DecorSphereMat_0" geometry={nodes.Decoration_Spheres_DecorSphereMat_0.geometry} material={materials['Decor.Sphere.Mat']} />
                  <mesh name="Decoration_Spheres_DecorSphereMat_0_1" geometry={nodes.Decoration_Spheres_DecorSphereMat_0_1.geometry} material={materials['Decor.Sphere.Mat']} />
                  <mesh name="Decoration_Spheres_DecorSphereMat_0_2" geometry={nodes.Decoration_Spheres_DecorSphereMat_0_2.geometry} material={materials['Decor.Sphere.Mat']} />
                  <mesh name="Decoration_Spheres_DecorSphereMat_0_3" geometry={nodes.Decoration_Spheres_DecorSphereMat_0_3.geometry} material={materials['Decor.Sphere.Mat']} />
                  <mesh name="Decoration_Spheres_DecorSphereMat_0_4" geometry={nodes.Decoration_Spheres_DecorSphereMat_0_4.geometry} material={materials['Decor.Sphere.Mat']} />
                  <mesh name="Decoration_Spheres_DecorSphereMat_0_5" geometry={nodes.Decoration_Spheres_DecorSphereMat_0_5.geometry} material={materials['Decor.Sphere.Mat']} />
                  <mesh name="Decoration_Spheres_DecorSphereMat_0_6" geometry={nodes.Decoration_Spheres_DecorSphereMat_0_6.geometry} material={materials['Decor.Sphere.Mat']} />
                  <mesh name="Decoration_Spheres_DecorSphereMat_0_7" geometry={nodes.Decoration_Spheres_DecorSphereMat_0_7.geometry} material={materials['Decor.Sphere.Mat']} />
                  <mesh name="Decoration_Spheres_DecorSphereMat_0_8" geometry={nodes.Decoration_Spheres_DecorSphereMat_0_8.geometry} material={materials['Decor.Sphere.Mat']} />
                </group>
                <group name="Clock_base" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Clock_base_Yellow_Metallic_(Base)_0" geometry={nodes['Clock_base_Yellow_Metallic_(Base)_0'].geometry} material={materials.Yellow_Metallic_Base} />
                </group>
                <group name="IMG_Hours" position={[-2.198, 16.342, -0.71]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="IMG_Hours_IMG_Hours_0" geometry={nodes.IMG_Hours_IMG_Hours_0.geometry} material={materials.IMG_Hours} />
                </group>
                <group name="Glass_" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Glass__Glass_Shader_0" geometry={nodes.Glass__Glass_Shader_0.geometry} material={materials.Glass_Shader} />
                </group>
                <group name="Rivet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Rivet_Material_0" geometry={nodes.Rivet_Material_0.geometry} material={materials.Material} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/clock.glb')
