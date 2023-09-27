import {motion, useInView, useAnimation} from "framer-motion"
import { useEffect, useRef } from 'react'

export default function contractConfirm(){
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    
    const mainControls = useAnimation();

    useEffect( () => {
        if(isInView){
        //animate
        mainControls.start("visible");
        }
    }, [isInView]);

    return(
        <>
            <div ref={ref} className='bg-gradient-to-br from-black to-slate-600 h-screen items-center flex justify-center'>
                <motion.div
                variants={{
                hidden: {opacity:0,y:-100},
                visible: {opacity:1,y:0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:1.5,delay:0.25}}>
                    <div className='h-[40vh] ms:h-[50vh] w-[60vw] bg-gradient-to-br from-slate-900 to-gray-500 flex-row text-white/75 justify-center items-center shadow-2xl rounded-2xl text-center p-10'>
                        <h1 className='text-xl ms:text-3xl  sm:text-5xl font-extrabold text-center mt-5 mb-10 font-serif'>Thank You</h1>
                        <h3 className="text-m ms:text-l sm:text-3xl text-gray-400">We will be in contact shortly to discuss our plan to maxamize your business potential.</h3>
                    </div>
                </motion.div>
            </div>
        </>
        
    );
}