import react from "react";
// import { useState, useEffect } from "react";

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
        <div className="backdrop" onClick={handleCLick}>
            <img src={selectedImage} alt="enlarged"/>
        </div>
    )
}

export default Modal