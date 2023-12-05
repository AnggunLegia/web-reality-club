import DefaultCard from '@/components/card'
import CardWithDecorativeImage from '@/components/card2'
import CardMusik from '@/components/musik'
import Image from 'next/image'
export default function Home() {
    return (
      <>
      <div className='bg-bekgron3 w-screen  '>
      <div >
        <p className='text-center md:text-9xl text-rose-700 md:pt-36 sm:pt-32 font-bold sm:text-5xl text-4xl pt-18 '>MEI</p>  
        </div>
        
   <div className='pt-16 md:pl-80 sm:pr-5 pb-24 sm:pl-5  pr-10 pl-14 '>

        <div className='md:grid md:grid-cols-2 md:gap-x-4 md:justify-item-center 
        sm:grid sm:grid-cols-2 sm:gap-4 sm:justify-item-center grid  gap-y-2 justify-item-center  '>
         <DefaultCard judul={"ROAfest, Jakarta"} desk={"19/05/2023 22:45"} pindah={"https://maps.app.goo.gl/thscQ5ykbu85UzUj9"}/>
         <DefaultCard judul={"ROAfest, Jakarta"} desk={"19/05/2023 22:45"}/>
         <DefaultCard judul={"ROAfest, Jakarta"} desk={"19/05/2023 22:45"}/>
         <DefaultCard judul={"ROAfest, Jakarta"} desk={"19/05/2023 22:45"} />

        </div>
        </div>
        </div>
     
   
      
      </>
    )
}