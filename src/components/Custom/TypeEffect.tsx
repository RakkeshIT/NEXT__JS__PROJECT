import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

interface TypePropse {
    texts: string[];
}

const TextTyping: React.FC<TypePropse> = ({ texts }) => {
    const [text] = useTypewriter({
        words: texts,
        loop: 0,
        deleteSpeed: 50,
        typeSpeed: 50,
        delaySpeed: 1500,
    });
    return (
        <h3 className='text-xl md:text-2xl lg:text-3xl mt-6 ms-2'>
            {text}
            <Cursor cursorColor="cyan" />
        </h3>
    )
}

export default TextTyping;