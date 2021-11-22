import react from "react";
// import { useState, useEffect } from "react";
import {motion} from "framer-motion";

const Modal = ({selectedImage, setSelectedImage}) => {
    const handleCLick = (e) =>{
        if(e.target.classList.contains('backdrop')){
        setSelectedImage(null)
        }
    }
    // const sel

    // useEffect(()=>{

    // },[selectedImage])
    return (
        <motion.div className="backdrop" onClick={handleCLick} initial={{opacity:0}} animate={{opacity:1}}>
            <motion.img src={selectedImage} alt="enlarged" initial={{y:"-100vh"}} animate={{y:0}}/>
        </motion.div>
    )
}

export default Modal