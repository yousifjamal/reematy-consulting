import React, {useState, useEffect} from 'react';
import {AiOutlineBars, AiOutlineClose} from 'react-icons/ai';
import Link from 'next/link';
import {motion} from "framer-motion"

const NavBar = () => {

    const [nav, setNav] = useState(false);
    const [colour, setColour] = useState('transparent');

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColour = () =>{
            if (window.scrollY >= 60){
                setColour('#161D26');
            }else{
                setColour('transparent');
            }
        };
        window.addEventListener('scroll', changeColour);
    }, []);


  return (
    
    <div style={{ background: `${colour}` }} className='fixed left-0 top-0 w-full z-10 p-6 ease-in duration-1000 rounded-b-xl shadow-2xl'>
        <div className='max-w-[2000px] m-auto flex justify-between items-center p-4 text-white/75'>
            <motion.div
            variants={{
            hidden: {opacity:0,x:-75},
            visible: {opacity:1,x:0}
            }}
            initial="hidden"
            animate="visible"
            transition={{duration:1,delay:0.25}}>
                <Link href="/"><h1 className='font-serif text-l sm:text-3xl'>Reematy Consulting Inc.</h1></Link>
            </motion.div>
            <ul className='hidden sm:flex '>
                <Link href="/" ><li className='p-4 text-2xl hover:text-gray-500'>Home</li></Link>
                <Link href="#OurWork" ><li className='p-4 ml-5 text-2xl hover:text-gray-500'>Our Work</li></Link>
                <Link href="#ContractUs" ><li className='p-4 ml-5 text-2xl hover:text-gray-500'>Contract Us</li></Link>
            </ul>

            {/*Mobile Menu Button*/}
            <div className='block sm:hidden z-10' onClick={handleNav}>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineBars size={20}/>}
            </div>

            {/*Mobile Menu*/}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/90 text-center ease-in duration-300 ' : 
            'sm:hidden absolute top-[-1000%] left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/90 text-center ease-in duration-300'}>
                <ul>
                    <Link href="/" onClick={handleNav}><li className='text-5xl p-4 mb-10 hover:text-gray-500'>Home</li></Link>
                    <Link href="#OurWork" onClick={handleNav}><li className='text-5xl p-4 mb-10 hover:text-gray-500'>Our Work</li></Link>
                    <Link href="#ContractUs" onClick={handleNav}><li className='text-5xl p-4 mb-10 hover:text-gray-500'>Contract Us</li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar