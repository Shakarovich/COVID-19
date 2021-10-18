import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function Lottie () {

    const container = useRef(null)

    useEffect (() => {
        lottie.loadAnimation({
            container: container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('./lottie.json')
        })
    }, [])

    return (
        <div ref={container}>
            
        </div>
    )
}
export default Lottie;