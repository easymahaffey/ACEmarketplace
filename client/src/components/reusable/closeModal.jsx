import React from "react";

const CloseModal = ({openModal, setOpenModal})=>{

    const handleClose = ()=>{
        setOpenModal(false)
    }

    return(
        <>
         <div className="close-btn" onClick={handleClose}>X</div>
        </>
    )
}

export default CloseModal