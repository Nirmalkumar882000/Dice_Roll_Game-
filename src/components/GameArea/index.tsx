import React, { Suspense, useRef, useState,useEffect } from "react";
import { OrbitControls, RoundedBox, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Dice1 } from "./Dice1";
import { Physics, usePlane } from "@react-three/cannon";
import "./index.css"
import board from "/board/board.png"

function GameArea() {
  
  return (
    <>
      <div className="">
        <div className="w-56 h-56 sm:w-28 sm:h-24 md:w-32 md:h-28 lg:w-32 lg:h-28">
        <img src={board} alt="board"/>
        </div>
        <div className="absolute h-64 ml-9 -mt-36 sm:h-20 w-80 sm:-ml-2 sm:w-28 md:w-28 md:h-24 lg:w-28 lg:h-24">
          <Dice/>
        </div>
      </div>
    </>
  );
}

export default GameArea;







import ReactDice, { ReactDiceRef } from 'react-dice-complete'

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
      dieSize={40}
      margin={20}
    />
  )

}

// export default Dice;




// 60145625908


function Dicessss(){
  return(
    <>
    </>
  )
}