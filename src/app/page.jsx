'use client'
import CardArtikel from '@/components/artikel'
import AudioPlayer1 from '@/components/upcom_admin'
import AudioPlayer from '@/components/audioplay'
import Card from '@/components/card'
import CardWithDecorativeImage from '@/components/card2'
import Card2 from '@/components/card2'
import DefaultCarousel from '@/components/carousel'
import Image from 'next/image'
import DefaultNavbar from '@/components/navbar'
import { motion } from "framer-motion"



export default function Home() {

 
  
  return (
    <>
  <div className='bg-bekgron3 w-screen  '>
    <DefaultNavbar/>
  

   <div className='md:h-[500px] sm:h-[400px] h-[300px] '>
   <DefaultCarousel foto1={'/images/konser3.jpeg'} foto2={'/images/rc20.jpeg'} foto3={'/images/rcc17.jpg'}/>
   </div>
   <div className='md:ml-[450px] md:mt-20 sm:mt-10 mt-7 sm:pl-[320px] pl-[255px]'>

   
   <div className='bg-transparent rounded hover:bg-black active:bg-black border-2 bg-border-white md:w-40 md:h-24 md:mt-20 sm:w-28 sm:h-[63px] sm:mt-10focus:ring focus:ring-violet-300 w-28 h-[63px]' >
   <div className='md:p-8 md:pl-[45px] sm:p-[15px] sm:pl-[21px] p-[15px] pl-[21px]'>
   <a class=" text-white text-2xl " href='/about2' >
  Profile
</a>
</div>
</div>

   
    
    </div>
    <div>
      <div className='md:pl-[180px] sm:pl-[70px] pl-[110px]  pt-10'>
      <p className='text-white md:text-4xl sm:text-3xl text-3xl '>
        POPULER
      </p>
        <p className='text-white md:text-3xl sm:text-2xl text-2xl  py-5'>1. Anything You Want</p>
       <AudioPlayer src="/musik/lgu1.mp3"/>
       <p className='text-white md:text-3xl sm:text-2xl text-2xl  py-5'>2. Am I Bothering You?</p>
       <AudioPlayer src="/musik/lgu2.mp3"/>
       <p className='text-white md:text-3xl sm:text-2xl text-2xl  py-5'>3. Alexandra</p>
       <AudioPlayer src="/musik/lgu3.mp3"/>
       <p className='text-white md:text-3xl sm:text-2xl text-2xl  py-5'>4. Is It The Answer</p>
       <AudioPlayer src="/musik/lgu4.mp3"/>
       <p className='text-white md:text-3xl sm:text-2xl text-2xl  py-5'>5. Love Epiphany</p>
       <AudioPlayer src="/musik/lgu5.mp3"/>
     
      </div>
      
    </div>
    
    <div className='md:flex md:items-center md:space-x-4 sm:grid-cols-2 sm:items-center sm:gap-x-14 sm:gap-y-4  sm:ml-[39px] ml-[90px]  md:w-[1200px] sm:w-[600px] w-[400px] md:mt-10  sm:mt-10 mt-10 grid gap-2 pl-6 md:pl-[140px] '>
    <CardWithDecorativeImage foto={'/images/album.jpg'} judul={'ALBUM'}
    pindah={"/about"} 
    />
    <CardWithDecorativeImage foto={'/images/konser1.jpeg'} judul={'CONCERT'}
      pindah={"/concert"}  />
     <CardWithDecorativeImage foto={'/images/IWIWYJ.jpg'} judul={'MERCH'}
      pindah={"/merch"}
   
   
    />
   
    </div>
    </div>
    
    </>
  )
}
