import React from 'react';
import { Form, Input, Select, Checkbox, Relevant, Debug } from 'informed';

function ContractForm() {

  const onSubmit = ({ values }) => {
    fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    alert("Thank you for contacting us, we will reach out to you shortly.");
  };

  return (
    <div className='relative'>
        <div className='toronto bg-cover h-[160vh] sm:h-[120vh] items-center flex justify-center' id='ContractUs'>
        {/**<div className='absolute bottom-0 top-0 left-0 right-0 h-[160vh] sm:h-[120vh] bg-black/70 z-[2]' />**/}
            <div className='flex-row'>
                <h1 className='text-5xl sm:text-5xl text-center text-white/75 mt-5 mb-10 font-serif'>CONTRACT US</h1>
                  <div className='w-[80vw] h-[100vh] sm:h-[82vh] sm:w-[30vw] font-serif bg-gradient-to-tl from-slate-900 to-gray-500 justify-start items-start  sm:mt-5 sm:ml-20 text-black/75 shadow-2xl rounded-2xl p-10'>
                  <Form onSubmit={onSubmit} action='/api/mail' method='post'>
                    <h1 className='text-white/75 text-xl mb-2'>Name</h1>
                    <Input name="name" placeholder="Full Name" className='flex mb-10 w-[15vw] text-l rounded-md p-1' />
                    <h1 className='text-white/75 text-xl mb-2'>Email</h1>
                    <Input name="email" type="email" placeholder='xxxx@email.com' className='flex mb-10 w-[15vw] text-l rounded-md p-1'/>
                    <h1 className='text-white/75 text-xl mb-2'>Phone Number (optional)</h1>
                    <Input name="phone" formatter="+1 (###)-###-####" placeholder='+1 (###)-###-####' className='flex mb-10 w-[15vw] text-l rounded-md p-1'/>
                    <h1 className='text-white/75 text-xl mb-2'>Website Description</h1>
                    <Input name="description" placeholder="Give us a brief overview of your vision" className='flex mb-10 w-[25vw] h-[15vh] text-l rounded-md p-3' />
                    <button type="submit" className='rounded-full bg-slate-500 w-[8vw] h-[4vh] font-bold text-l text-white/75'>Submit</button>
                  </Form>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default ContractForm