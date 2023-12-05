import CardArtikel from '@/components/artikel'
import CardArtikell from '@/components/artikel2'
import DefaultCard from '@/components/card'
import CardWithDecorativeImage from '@/components/card2'
import CardMusik from '@/components/musik'
import CardMusik1 from '@/components/musik2'
import Image from 'next/image'
export default function Home() {
  
    return (
      <>
      <div className='bg-bekgron3 w-screen  '>
      <div className='bg-bekgron2  md:w-screen sm:w-screen w-screen md:h-[550px] sm:h-80 bg-cover h-48  '>
    <p className='text-center md:text-9xl text-rose-700 md:pt-64 sm:pt-48 font-bold sm:text-5xl text-4xl pt-20 '>ALL SONG</p>
   </div>
   <div className='pt-24  pr-20 pb-24 pl-36  '>

        <div className='md:grid md:grid-cols-3 md:gap-4 md:justify-item-center 
        sm:grid sm:grid-cols-2 sm:gap-4 sm:justify-item-center md:grid md:grid-cols-3 md:gap-4 md:justify-item-center  '>
          <CardMusik1/>
          
          </div>
         <CardArtikell/>
        </div>
     </div>
   
      
      </>
    )
}