import DefaultCard from '@/components/card'
import CardWithDecorativeImage from '@/components/card2'
import CardWith from '@/components/card3'
import CardMerch from '@/components/merch'
import CardMusik from '@/components/musik'
import DefaultNavbar from '@/components/navbar'
import Image from 'next/image'
export default function Home() {
  
    return (
      <>
      <div className='bg-bekgron3 w-screen  '>
        <DefaultNavbar/>
      <div >
        <p className='text-center md:text-9xl text-rose-700 md:pt-36 sm:pt-32 font-bold sm:text-7xl text-5xl pt-24 '>MERCHANDISE</p>  
        </div>

   <div className='pt-16 md:pl-40 sm:pr-5 pb-10 sm:pl-5  pr-10 pl-14 '>

        <div >
         <CardMerch/>
        </div>
        </div>
        </div>
     
   
      
      </>
    )
}