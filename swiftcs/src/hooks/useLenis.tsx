'use client'
import Lenis from "lenis";
import { useEffect } from "react";


export const UseLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1,
            easing: (t) => 1 - Math.pow(1-t,3),
            smoothWheel:true,
        })
        const update = (time:number) => {
            lenis.raf(time);
            requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        return () => {
            lenis.destroy();
        };
    }, []);

}