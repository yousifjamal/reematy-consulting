
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const OurWork = () => {
  return (
    <div className='bg-gradient-to-br from-black to-slate-600 h-[160vh] sm:h-[120vh] items-center flex justify-center' id='OurWork'>
        <div className='flex-row'>
          <h1 className='text-5xl sm:text-7xl text-center text-white/75 mt-5 mb-10 font-serif'>OUR WORK</h1>
            <div className='h-[140vh] sm:h-[90vh] w-[80vw] bg-gradient-to-br from-slate-900 to-gray-500 flex-row text-white/75 justify-center items-center shadow-2xl rounded-2xl text-center p-10'>

              
              <h3 className='font-serif text-white/75 text-center flex text-5xl mb-5 ml-7'>Jess' Pet Products</h3>
            <div className='flex-row sm:flex'>
              
                <Carousel autoPlay={true} interval={6000} showThumbs={false} infiniteLoop={true} className='h-[30vh] w-[60vw] sm:h-[30vh] sm:w-[40vw] '>
                  <div>
                    <Image src="/static/jesimg/JessPets1.jpg" className="sm:p-7" width={400} height={400} />
                    <p className='legend'>Jess' Pet Products Homepage</p>
                  </div>
                  <div>
                    <Image src="/static/jesimg/JessPets2.jpg" className="sm:p-7" width={400} height={400} />
                    <p className='legend'>Sliding Carousel & Interactive Product Page</p>
                  </div>
                  <div>
                    <Image src="/static/jesimg/JessPets3.jpg" className="sm:p-7" width={400} height={400} />
                    <p className='legend'>Fully Functional Cart-Checkout System</p>
                  </div>
                  <div>
                    <Image src="/static/jesimg/JessPets4.jpg" className="sm:p-7"  width={400} height={400} />
                    <p className='legend'>Customized Payment Redirection (using Stripe)</p>
                  </div>
                </Carousel>

                <div className='w-[60vw] h-[90vh] sm:h-[70vh] sm:w-[30vw] font-serif bg-gradient-to-tl from-slate-900 to-gray-500 sm:mt-5 sm:ml-20 text-white/75 justify-center items-center shadow-2xl rounded-2xl text-center p-10'>
                  <h2 className=' sm:text-5xl mb-10 underline'> Features</h2>
                  <div className=' sm:text-l text-start'>
                    <p className='mb-10'>- Mobile responsive & ECommerce capable </p>
                    <p className='mb-10'>- Client dashboard making the homepage banner, products and promotions completely customizable</p>
                    <p className='mb-10'>- Lead generating search engine optimization</p>
                    <p className='mb-10'>- Fully integrated payment processor making it easy for customers to purchase</p>
                    <p className='mb-10'>- Variable shipping rates and location-specific tax-rates</p>
                  </div>
                </div>

              </div>
                
            </div>
            
        </div>
      </div>
  )
}

export default OurWork