'use client'
import Lottie from "lottie-react";
import Model from '@/../public/3DModels/Animation - 1741080472567.json';


export const Contact3D = () => {
    return(
        <>
            <Lottie animationData={Model} loop={true} style={{width:'400px',height:'400px'}}/>
        </>
    )
}
