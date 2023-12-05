import CardWithDecorativeImage from '@/components/card2'
import CardWithDecorativeImage1 from '@/components/cardalbum'
import DefaultCarousel from '@/components/carousel'
import DefaultNavbar from '@/components/navbar'
import Image from 'next/image'
export default function Home() {
    return (
      <>
      <div className='bg-bekgron3 w-screen   '>
        <DefaultNavbar/>
        <div >
        <p className='text-center md:text-9xl text-rose-700 md:pt-36 sm:pt-32 font-bold sm:text-7xl text-6xl pt-32  '>ALBUM</p>  
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
      <div className='md:flex md:items-center md:space-x-6 md:w-[1200px] md:ml-20 sm:grid sm:w-[600px] sm:gap-y-4 sm:justify-items-center  sm:pl-32 sm:pt-32 md:mr-[350px] md:pt-20 w-[400px] grid gap-y-4 justify-items-center pl-28 pt-20 '>
    <CardWithDecorativeImage1 foto={'/images/albumrcp.jpg'} judul={'Reality Club Presents...'}
    desk={"Rilis 26 Mei 2023 "} pindah={"/rcp"}
      />
    <CardWithDecorativeImage1 foto={'/images/whatdo.jpeg'} judul={'What Do You Really Know?'}
     desk={"Rilis 30 Agustus 2019"} pindah={"/whatdo"}  
     />

     <CardWithDecorativeImage1 foto={'/images/neverget.jpg'} judul={'Never Get Better'}
     desk={"Rilis 19 Agustus 2017"}  pindah={"/never"}
      
   
    />
   
    </div>
      </div>
      </>
    )
}