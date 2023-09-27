import React from 'react';
import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';
import {motion, useInView, useAnimation} from "framer-motion"
import { useEffect, useRef } from 'react'
import Router, { useRouter } from 'next/router';

function ContractForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  
  const mainControls = useAnimation();

  const router = useRouter();

  useEffect( () => {
    if(isInView){
      //animate
      mainControls.start("visible");
    }
  }, [isInView]);

  const onSubmit = async ({ values }) => {
    await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    router.push('/contractConfirm');
  };

  return (
    <div className='relative'>
        <div ref={ref} className='toronto bg-cover h-[160vh] sm:h-[120vh] items-center flex justify-center' id='ContractUs'>
        {/**<div className='absolute bottom-0 top-0 left-0 right-0 h-[160vh] sm:h-[120vh] bg-black/70 z-[2]' />**/}
          <motion.div
              variants={{
                hidden: {opacity:0,y:100},
                visible: {opacity:1,y:0}
              }}
              initial="hidden"
              animate={mainControls}
              transition={{duration:1,delay:0.25}}>
              <div className='flex-row'>
                  <h1 className='text-5xl sm:text-5xl text-center text-white/75 mt-5 mb-10 font-serif'>CONTRACT US</h1>
                    <div className='w-[80vw] h-[79vh] sm:h-[82vh] sm:w-[30vw] font-serif bg-gradient-to-tl from-slate-900 to-gray-500 justify-start items-start  sm:mt-5 sm:ml-20 text-black/75 shadow-2xl rounded-2xl p-10'>
                    <Form onSubmit={onSubmit} action='/api/mail' method='post'>
                      <h1 className='text-white/75 text-xl mb-2'>Name</h1>
                      <Input name="name" placeholder="Full Name" className='flex mb-10 w-[50vw] sm:w-[15vw] text-l rounded-md p-1' />
                      <h1 className='text-white/75 text-xl mb-2'>Email</h1>
                      <Input name="email" type="email" placeholder='xxxx@email.com' className='flex mb-10 w-[50vw] sm:w-[15vw] text-l rounded-md p-1'/>
                      <h1 className='text-white/75 text-xl mb-2'>Phone Number (optional)</h1>
                      <Input name="phone" formatter="+1 (###)-###-####" placeholder='+1 (###)-###-####' className='flex mb-10 w-[50vw] sm:w-[15vw] text-l rounded-md p-1'/>
                      <h1 className='text-white/75 text-xl mb-2'>Website Description</h1>
                      <Input name="description" placeholder="Give us a brief overview of your vision" className='flex mb-10 w-[50vw] sm:w-[25vw] h-[15vh] text-l rounded-md p-3' />
                      <button type="submit" className='rounded-full bg-slate-500 w-[50vw] h-[5vh] sm:w-[8vw] smLh-[4vh] font-bold text-l text-white/75'>Submit</button>
                    </Form>
                    </div>
              </div>
            </motion.div>
        </div>
    </div>
  )
}

export default ContractForm