import React from 'react';
import team from "../assets/images/team.jpeg"
import team2 from '../assets/images/WhatsApp_Image_2023-10-24_at_5.27.13_AM-removebg-preview.png'
import team3 from '../assets/images/WhatsApp_Image_2023-10-24_at_5.27.19_AM-removebg-preview.png'
import team4 from '../assets/images/WhatsApp_Image_2023-10-24_at_5.27.24_AM-removebg-preview.png'

const Team = () => {
    return (
        <div  class="relative isolate overflow-hidden items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols drop-out  lg:px-6 sm:py-32" id='services'>
            <div className=' '>
               <h1 className='text-2xl font-Paytone leading-relaxed text-emerald-900 md:text-4xl lg:text-4xl'>Meet our Tutor</h1>
                
            </div>
            <div className='md:grid md:grid-cols-2 xl:grid-cols-3 relative'>
                
               
                 
                  <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                   <img src={team} alt="" />
                </div>
                    
                
               
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>John Busayo</h3>
                    <p className='font-Poppins text-sm '>Internet of Thing (IoT)</p >
                </div>
               
    
            </div>
            <div className='md:grid md:grid-cols-2 xl:grid-cols-3 relative'>
                
               
                 
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                 <img src={team2} alt="" />
              </div>
                  
              
             
              <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                  
                  <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Adebayo Ore</h3>
                  <p className='font-Poppins text-sm '>Devop Engineer</p >
              </div>
             
  
          </div>
          <div className='md:grid md:grid-cols-2 xl:grid-cols-3 relative'>
                
               
                 
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                 <img src={team3} alt="" />
              </div>
                  
              
             
              <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                  
                  <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Timilehin Samson</h3>
                  <p className='font-Poppins text-sm '>Website / App Developer</p >
              </div>
             
  
          </div>
          <div className='md:grid md:grid-cols-2 xl:grid-cols-3 relative'>
                
               
                 
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                 <img src={team4} alt="" />
              </div>
                  
              
             
              <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                  
                  <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Jeremiah Omosefe</h3>
                  <p className='font-Poppins text-sm '>AI / machine Learning</p >
              </div>
             
  
          </div>
            
           
        </div>
    
    )
}

export default Team