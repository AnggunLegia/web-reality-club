import DefaultCard from '@/components/card'
import CardWithDecorativeImage from '@/components/card2'
import CardMusik from '@/components/musik'
import DefaultNavbar from '@/components/navbar'
import Image from 'next/image'
export default function Home() {
    return (
      <>
      <div className='bg-bekgron3 w-screen  '>
        <DefaultNavbar/>
      <div >
        <p className='text-center md:text-9xl text-rose-700 md:pt-36 sm:pt-32 font-bold sm:text-7xl text-5xl pt-32 '>ALL SONG</p>  
        </div>
        <div className='pt-10 flex pl-20 justify-center mr-20 space-x-6 '>
          <a className=' text-white text-2xl hover:text-blue-800' href='/about'>
            Album
          </a>
          <a className=" text-white text-2xl hover:text-blue-800" href='/songs'>
            Song
          </a>
          <a  className=" text-white text-2xl hover:text-blue-800" href='/'>
            Lyrics
          </a>
        </div>
   <div className='pt-16 md:pl-40 sm:pr-5 pb-24 sm:pl-5  pr-10 pl-14 '>

        <div className='md:grid md:grid-cols-3 md:gap-4 md:justify-item-center 
        sm:grid sm:grid-cols-2 sm:gap-4 sm:justify-item-center grid  gap-y-2 justify-item-center  '>
          <CardMusik/>
        

        </div>
        </div>
        </div>
     
   
      
      </>
    )
}