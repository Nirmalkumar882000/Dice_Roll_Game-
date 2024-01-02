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







const ModalText = () => {

  return(
    <div className="modal-text">
      <h3 >PROFILE</h3>
      <div className='flex flex-row flex-wrap ml-10 overflow-auto h-96 no-scrollbar sm:h-32 md:h-40 lg:h-32 2xl:h-60 xl:h-40'>
      
      {Array(100) 
          .fill(null)
          .map((_, index) => (
            <motion.div className="mt-5 ml-5 truncate hover:text-clip w-80 sm:w-20 lg:w-20 2xl:w-20 sm:mt-5 sm:ml-3 md:w-16 sm:h-20 md:ml-3 md:mt-3 lg:mt-0"
            animate={{
              borderRadius: ['10%', '50%', '10%'],
              rotate: [360, 0, 0],
              backgroundColor: ['var(--bg-color-1)', 'var(--bg-color-2)'],
            }}
            transition={{
              duration: 3,
              yoyo: Infinity,
            }} 
            >
             <div className='w-20 h-20 border-2 rounded-full border--100 sm:w-14 sm:h-14 md:w-14 md:h-14 '> </div>
             <div className='ml-4 sm:ml-1 md:ml-2'>hell0 {index}</div>
            </motion.div>
          ))}
      </div>
    </div>
  )
}
    
  
    