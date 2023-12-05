import DefaultCard from '@/components/card'
import CardWithDecorativeImage from '@/components/card2'
import DefaultNavbar from '@/components/navbar'
import Image from 'next/image'
export default function Home() {
    return (
      <>
      <div className='bg-bekgron3 w-screen  '>
        <DefaultNavbar/>
        <div className='md:w-[1200px] md:pt-24 md:m-auto border-x-4 border-rose-700 sm:w-[600px] w-[450px] sm:pt-20  sm:ml-[68px] ml-24   '>
          <img src="/images/neverget.jpg" className='md:ml-[270px] md:w-[550px] sm:w-[450px] sm:pl-40 w-[350px] md:pt-24 sm:pt-16 pt-16 pl-28  '/>
          <p className='text-white  md:text-3xl md:font-bold md:ml-64 md:pt-5 md:pb-10 sm:text-2xl sm:font-bold sm:ml-40 sm:pt-5 sm:pb-7 text-xl font-bold ml-28 pt-5 pb-10'>Never Get Better<br/>
          <span className='text-xl'>Rilis 19 Agustus 2017</span>
          </p>
          <div></div>
          <div className='md:grid md:grid-cols-2 md:gap-4 md:justify-item-center md:pl-40  sm:grid sm:gap-4 sm:item-center sm:pl-[100px] grid  gap-4 item-center pl-7'>
        <DefaultCard judul={"Elastic Hearts"} desk={"4:35"} 
        pindah={"https://open.spotify.com/intl-id/track/2rdH7BXiRjH4X4vkuC16wh?si=dc78429a98a6430f"}/>
        <DefaultCard judul={"Things I Don't Know"} desk={"3:21"} 
        pindah={"https://open.spotify.com/intl-id/track/3RAVemnJvlgVIq66d8kuZv?si=72e295eb3e274c46"}/>
        <DefaultCard judul={"Shouldn't End This Way"} desk={"4:36"} 
        pindah={"https://open.spotify.com/intl-id/track/6aEA0igm0nLtMmEpaTVEpB?si=2b6055f0896b45f9"}/>
        <DefaultCard judul={"Cursive Curses"} desk={"2:51"} 
        pindah={"https://open.spotify.com/intl-id/track/4jfgIZMTHMLNgcZES4SzXm?si=1d156941428343bd"}/>
        <DefaultCard judul={"Fatal Attraction"} desk={"3:30"} 
        pindah={"https://open.spotify.com/intl-id/track/5GzTwBYBMuS1KXH8kenSmi?si=8222dc4f34dc4d21"}/>
        <DefaultCard judul={"Hesitation"} desk={"5:12"} 
        pindah={"https://open.spotify.com/intl-id/track/741L9IpAPc0Q6L0CEABtoD?si=0d0afe972e034c86"}/>
        <DefaultCard judul={"Okay"} desk={"5:24"} 
        pindah={"https://open.spotify.com/intl-id/track/6vJ3ttHdgg3o3UZ1f9myvq?si=c3ee423895f04f15"}/>
        <DefaultCard judul={"Mentors"} desk={"4:45"} 
        pindah={"https://open.spotify.com/intl-id/track/1Tw1xj7IL5dLgJyUY2JE02?si=99456545936d4fa6"}/>
        <DefaultCard judul={"A Graceful Retreat"} desk={"4:28"} 
        pindah={"https://open.spotify.com/intl-id/track/01dFpOht9VCld9wWnEiCjV?si=26d074ab6eda456e"}/>
        <DefaultCard judul={"For Lack Of A Better Word"} desk={"4:50"} 
        pindah={"https://open.spotify.com/intl-id/track/3MX6gYqhrTm8X6uS5Shykt?si=261def3e26ed41cc"}/>
        <DefaultCard judul={"Is It The Answer?"} desk={"3:50"} 
        pindah={"https://open.spotify.com/intl-id/track/4H8TBfbdupkrEtj4y01JtO?si=6d881b93f2fb4a80"}/>
        <DefaultCard judul={"Never Get Better"} desk={"5:20"} 
        pindah={"https://open.spotify.com/intl-id/track/7y3WxqDMyYGeZoEyjU6KpF?si=c5842645f9904516"}/> <DefaultCard judul={"Epilogue"} desk={"3:10"} 
          pindah={"https://open.spotify.com/intl-id/track/757ZhuXB9E19yKqpCKrWqN?si=3941600a11fe4967"}/>
          </div>
          
         
          </div>
        </div>
     
    
      
      </>
    )
}