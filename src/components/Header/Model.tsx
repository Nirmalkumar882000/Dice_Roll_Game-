import React from 'react'
import {motion} from "framer-motion"


const flip = {
    hidden: {
      transform: "scale(0) rotateX(-360deg)",
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      transform: " scale(1) rotateX(0deg)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      transform: "scale(0) rotateX(360deg)",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };


function Model({handleClose}) {
    
  return (
    <motion.div
    onClick={(e) => e.stopPropagation()}
      className="modal orange-gradient"
      variants={flip}
      initial="hidden"
      animate="visible"
      exit="exit" 
    >
      <ModalText/>
      <button onClick={handleClose}>Close</button>
    </motion.div>
  )
}

export default Model




const ModalText = () => (
    <div className="modal-text">
      <h3>Rules </h3>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam labore, totam
        expedita voluptates tempore asperiores sequi, alias cum veritatis, minima dolor iste similique
        eos id. Porro, culpa? Officiis, placeat?
      </h5>
    </div>
  );

