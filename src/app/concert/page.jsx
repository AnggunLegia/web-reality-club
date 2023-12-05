import CardWithDecorativeImage from '@/components/card2'
import Image from 'next/image'
export default function Home() {
    return (
      <>
      <div className='bg-bekgron3 w-screen  '>
      <p className='text-center md:text-9xl text-rose-700 md:pt-36 sm:pt-32 font-bold sm:text-5xl text-4xl pt-20 '>Concert Schedule</p>
      <div className='grid grid-cols-3 gap-y-7 w-[1200px] justify-items-center m-auto pt-32'>

    <CardWithDecorativeImage foto={'/images/mei2.png'} judul={'Mei 2023'}
    desk={"Rilis 26 Mei 2023 "} pindah={"/mei"} w={400} h={150}
      />
    <CardWithDecorativeImage foto={'/images/juni.png'} judul={'Juni 2023'}
     desk={"Rilis 30 Agustus 2019"} w={400} h={150} pindah={"/whatdo"}  
     />

     <CardWithDecorativeImage foto={'/images/juli.png'} judul={'JUli 2023'}
     desk={"Rilis 19 Agustus 2017"} w={400} h={150} pindah={"/never"}
    />
    <CardWithDecorativeImage foto={'/images/agustus.png'} judul={'Agustus 2023'}
     desk={"Rilis 19 Agustus 2017"} w={400} h={150} pindah={"/never"}/>

    <CardWithDecorativeImage foto={'/images/september.png'} judul={'September 2023'}
     desk={"Rilis 19 Agustus 2017"} w={400} h={150} pindah={"/never"}/>

    <CardWithDecorativeImage foto={'/images/september.png'} judul={'September 2023'}
     desk={"Rilis 19 Agustus 2017"} w={400} h={150} pindah={"/never"}/>
    </div>
  
      </div>
      </>
    )
}