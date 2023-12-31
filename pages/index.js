import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Promise from '../components/Promise'
import OurWork from '../components/OurWork'
import ContractForm from '../components/ContractForm'
import Link from 'next/link'
import {motion, useInView, useAnimation} from "framer-motion"
import { useEffect, useRef } from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  
  const mainControls = useAnimation();

  useEffect( () => {
    if(isInView){
      //animate
    }
  }, {isInView});

  return (
    <>
      <Head>
        <title>Reematy Consulting</title>
        <meta name="google-site-verification" content="Dv2_pM9QIqU6lqXHmhQKGLZx5G7HdeUddFApgS_o11I" />
        <meta name="description" content="Optimizing Outreach - Creating Commerce.Elevate Your Online Presence with Expert Website Building Services
Looking for a niche website-building company to create a unique online presence? Look no further! We specialize in crafting custom websites tailored to your specific industry, ensuring you stand out in the digital world. Boost your brand's visibility and credibility with our SEO-friendly designs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/rc-logo.png" />
      </Head>
      {/*Landing Page*/}
      <div className='toronto bg-cover flex items-center justify-center min-h-screen bg-fixed bg-center shadow-2xl'>
      <div className='absolute top-0 left-0 bottom-0 right-0 min-h-screen bg-black/70 z-[2]' />
        <motion.div
        variants={{
          hidden: {opacity:0,y:75},
          visible: {opacity:1,y:0}
        }}
        initial="hidden"
        animate="visible"
        transition={{duration:2,delay:0.25}}
        className='z-[2]'>
          <div className='text-white/75  p-5 z-[2] font-mono font-bold'>
            <h1 className='text-4xl sm:text-6xl  mb-3'>Website Development</h1>
            <h4 className='text-l sm:text-xl mb-3'>Optimizing Outreach - Creating Commerce </h4>

            <Link href='#ContractUs'>
            <button className='border-solid border-4 border-neutral-50 p-3 animate-pulse'>Contract Now.</button>
            </Link>

          </div>
        </motion.div>
      </div> 
      <Promise/>
      <OurWork/>
      <ContractForm/>
    </>
  )
}
