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

        <div className='md:grid md:grid-cols-4 md:gap-x-4 md:justify-item-center md:mr-32
        sm:grid sm:grid-cols-2 sm:gap-4 sm:justify-item-center sm:pl-14 grid  gap-y-4 pl-32 justify-item-center  '>
         {/* <CardWith judul={"IWIWYJ TEE"} desk={"IDR 200.000"} foto={"/images/IWIWYJ.jpg"} w={250} h={100}/>
         <CardWith judul={"IWIWYJ TEE"} desk={"IDR 200.000"} foto={"/images/IWIWYJ.jpg"} w={250} h={100}/>
         <CardWith judul={"IWIWYJ TEE"} desk={"IDR 200.000"} foto={"/images/IWIWYJ.jpg"} w={250} h={100}/>
         <CardWith judul={"IWIWYJ TEE"} desk={"IDR 200.000"} foto={"/images/IWIWYJ.jpg"} w={250} h={100}/>
         <CardWith judul={"IWIWYJ TEE"} desk={"IDR 200.000"} foto={"/images/IWIWYJ.jpg"} w={250} h={100}/>
         <CardWith judul={"IWIWYJ TEE"} desk={"IDR 200.000"} foto={"/images/IWIWYJ.jpg"} w={250} h={100}/>
         <CardWith judul={"IWIWYJ TEE"} desk={"IDR 200.000"} foto={"/images/IWIWYJ.jpg"} w={250} h={100}/>
         <CardWith judul={"IWIWYJ TEE"} desk={"IDR 200.000"} foto={"/images/IWIWYJ.jpg"} w={250} h={100}/> */}
         <CardMerch/>
        </div>
        </div>
        </div>
     
   
      
      </>
    )
}