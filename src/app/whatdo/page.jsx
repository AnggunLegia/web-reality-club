import DefaultCard from '@/components/card'
import CardWithDecorativeImage from '@/components/card2'
import DefaultNavbar from '@/components/navbar'
import Image from 'next/image'
export default function Home() {
    return (
      <>
      <div className='bg-bekgron3 w-screen  '>
        <DefaultNavbar/>
        <div className='md:w-[1200px] md:pt-24 md:m-auto border-x-4 border-rose-700 sm:w-[600px] w-[450px] sm:pt-20  sm:ml-[68px] ml-20    '>
          <img src="/images/whatdo.jpeg" className=' md:ml-[270px] md:w-[550px] sm:w-[450px] sm:pl-40 w-[350px] md:pt-24 sm:pt-16 pt-16 pl-28 '/>
          <p className='text-white  md:text-3xl md:font-bold md:ml-64 md:pt-5 md:pb-10 sm:text-2xl sm:font-bold sm:ml-40 sm:pt-5 sm:pb-7 text-xl font-bold ml-28 pt-5 pb-10'>What Do you Really Know?<br/>
          <span className='text-xl'>Rilis 30 Agustus 2019</span>
          </p>
          <div className='md:grid md:grid-cols-2 md:gap-4 md:justify-item-center md:pl-40  sm:grid sm:gap-4 sm:item-center sm:pl-[100px] grid  gap-4 item-center pl-7'>
        <DefaultCard judul={" Prologue"} desk={"1:11"}
         pindah={"https://open.spotify.com/intl-id/track/2QfJ7I5W9mdYifVF6McNUU?si=bade2b2127df4e00"}/>
        <DefaultCard judul={"SSR"} desk={"4:01"} 
        pindah={"https://open.spotify.com/intl-id/track/5Tx2Oy7fXHFGo02NNjrQ9H?si=3bb4096c86a44f0e"}/>
        <DefaultCard judul={"All Alone All Things Were Wrong"} desk={"2:07"} 
        pindah={"https://open.spotify.com/intl-id/track/6eLlNmpRh4J1aZgj8JFQIN?si=44f03cbee6d5463b"}/>
        <DefaultCard judul={"Caught In A Trap"} desk={"5:47"} 
        pindah={"https://open.spotify.com/intl-id/track/0kzwZHvAJBi3H98XcNwWOb?si=c4e38351be3c4544"}/>
        <DefaultCard judul={"The Rush"} desk={"3:30"}
        pindah={"https://open.spotify.com/intl-id/track/0Qw9pVQFPIgvP9AiesHpjp?si=8474cb51f81f4c5e"}/>
        <DefaultCard judul={"Vita o morte"} desk={"3:52"}
        pindah={"https://open.spotify.com/intl-id/track/4viScKX0uPafgZRptJPKYu?si=0ad3e6aa9aa947bf"}/>
        <DefaultCard judul={"Telenovia"} desk={"5:21"}
        pindah={"https://open.spotify.com/intl-id/track/0HA0Z2c9zzDB5WrpngtqxY?si=005e6ade8cf94f75"}/>
        <DefaultCard judul={"On My Own, Again"} desk={"3:43"}
        pindah={"https://open.spotify.com/intl-id/track/3xyy7itTi50FxN4mNCotzZ?si=a92bb2776f674d88"}/>
        <DefaultCard judul={"Alexandra"} desk={"3:58"}
        pindah={"https://open.spotify.com/intl-id/track/7JFFMicliyVArHQgwEqVBS?si=a74e7a50e65e4d73"}/>
        <DefaultCard judul={"A Sorrowful Reunion"} desk={"4:19"}
        pindah={"https://open.spotify.com/intl-id/track/31eH7YKLDKMHIZhsNAn0JI?si=1082f4261b474e6c"}/>
          <DefaultCard judul={"2112"} desk={"5:56"}
          pindah={"https://open.spotify.com/intl-id/track/7osNJxvZ6YkvgpxJlC3ta6?si=ccca3fa21699404c"}/>
          </div>
        
        </div>
     {/* <div className='pt-32 grid gap-2 justify-item-center'>
    <CardWithDecorativeImage foto={'/images/albumrcp.jpg'} judul={'Reality Club Presents...'}
    desk={"Rilis 26 Mei 2023 "} pindah={"/fat"} w={400} h={150}
      />
   
   </div> */}
    </div>
      
      </>
    )
}