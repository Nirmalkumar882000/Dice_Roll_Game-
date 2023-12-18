import React, { useEffect, useRef } from 'react'
import ReactDice, { ReactDiceRef } from 'react-dice-complete'
import { Canvas, useFrame } from "@react-three/fiber";

const Dice = () => {

  const reactDice = useRef<ReactDiceRef>(null)

  const rollDone = (totalValue: number, values: number[]) => {
    console.log('individual die values array:', values)
    console.log('total dice value:', totalValue)
  }

  useEffect(()=>{
    rollAll()
  },[])

  const rollAll = () => {
    reactDice.current?.rollAll([6,3])
  }

  return (
    <ReactDice
      numDice={2}
      ref={reactDice}
      rollDone={rollDone}
    />
  )

}

// export default Dice;




export const Dices=()=>{
  return(
    <Canvas>
      <mesh>
      <Dice/>
      </mesh>
    </Canvas>
   
  
  )
}
