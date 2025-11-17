'use client'
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import("lottie-react"), {ssr: false});

import Model from '@/../public/3DModels/Animation - 1741080472567.json';
import { useMemo } from 'react';


export const Contact3D = () => {
    const model = useMemo(() => Model, [])
    return(
        <>
            <Lottie animationData={model} loop={true} style={{width:'400px',height:'400px'}} />
        </>
    )
}
