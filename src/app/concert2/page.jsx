import CardWithDecorativeImage from '@/components/card2'
import DefaultDropdown from '@/components/dropdown'
import CardKonser from '@/components/konser'
import DefaultNavbar from '@/components/navbar'
import Image from 'next/image'
export default function Home() {
    return (
      <>
      <div className='bg-bekgron3 w-screen  '>
      <DefaultNavbar/>
        <div className='pt-36 flex justify-end pr-20'>
            <DefaultDropdown/>
        </div>
      <p className='text-center md:text-9xl text-rose-700 md:pt-12 sm:pt-32 font-bold sm:text-5xl text-5xl pt-20 '>Concert Schedule 2023</p>
      <div className='pt-16 md:pl-40 sm:pr-5 pb-24 sm:pl-5  pr-10 pl-14 '>

        <div className='md:grid md:grid-cols-3 md:gap-4 md:justify-item-center 
        sm:grid sm:grid-cols-2 sm:gap-4 sm:justify-item-center grid  gap-y-2 justify-item-center  '>
          <CardKonser/>
        

        </div>
        </div>
  
      </div>
      </>
    )
}