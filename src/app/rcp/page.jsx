import DefaultCard from '@/components/card'
import CardWithDecorativeImage from '@/components/card2'
import DefaultNavbar from '@/components/navbar'
import Image from 'next/image'
export default function Home() {
    return (
      <>
      <div className='bg-bekgron3 w-screen  '>
        <DefaultNavbar/>
        <div className='md:w-[1200px] md:pt-24 md:m-auto border-x-4 border-rose-700 sm:w-[600px] w-[450px] sm:pt-20  sm:ml-[68px] ml-20   '>
          <img src="/images/albumrcp.jpg" className=' md:ml-[270px] md:w-[550px] sm:w-[450px] sm:pl-40 w-[350px] md:pt-24 sm:pt-16 pt-16 pl-28'/>
          <p className='text-white  md:text-3xl md:font-bold md:ml-64 md:pt-5 md:pb-10 sm:text-2xl sm:font-bold sm:ml-40 sm:pt-5 sm:pb-7 text-xl font-bold ml-28 pt-5 pb-10'>Reality Club Presents...<br/>
          <span className='text-xl'>Rilis 26 Mei 2023</span>
          </p>
          <div className='md:grid md:grid-cols-2 md:gap-4 md:item-center md:pl-40 sm:grid sm:gap-4 sm:item-center sm:pl-[100px] grid  gap-4 item-center pl-7'>
        <DefaultCard judul={" I Wish I Was Your Joke"} desk={"3:39"} 
        pindah={"https://open.spotify.com/intl-id/track/1hEagxrA2r5DULTkVI39PN?si=6591cbe0c109490b"}/>
        <DefaultCard judul={"You Let Her Go Again"} desk={"3:29"} 
        pindah={"https://open.spotify.com/intl-id/track/7EO5zCgU4F4V7KwQdo5YmL?si=898d5a3bf782474b"}/>
        <DefaultCard judul={"Dancing In The Breeze Alone"} desk={"4:27"}
        pindah={"https://open.spotify.com/intl-id/track/78fp7XYvYCax8WWAwYfVAX?si=33db680eae6f4015"}/>
        <DefaultCard judul={"Tell Me I'm Wrong"} desk={"4:26"}
        pindah={"https://open.spotify.com/intl-id/track/3uoa1LmPR3b1y9sYMO12Br?si=00936ec986d546c1"}/>
        <DefaultCard judul={"Desire"} desk={"4:09"}
        pindah={"https://open.spotify.com/intl-id/track/2GShV72kbbfxu86ovzaKxt?si=d5fb4ded74954dba"}/>
        <DefaultCard judul={"Arrowhead Man"} desk={"3:00"}
        pindah={"https://open.spotify.com/intl-id/track/3mEKtJyfnlcMHGgqNdHwsw?si=07b1ad07a43644bd"}/>
        <DefaultCard judul={"Am I Bothering You?"} desk={"3:45"}
        pindah={"https://open.spotify.com/intl-id/track/4XEJR0jb29elGda86cL0IK?si=e7fad5a0f5094f16"}/>
        <DefaultCard judul={"Anything You Want"} desk={"3:56"}
        pindah={"https://open.spotify.com/intl-id/track/0EDgUNdoWnRslGw6epuJY9?si=c8c823a5974c446c"}/>
        <DefaultCard judul={"Four Summer"} desk={"2:32"}
        pindah={"https://open.spotify.com/intl-id/track/4uqeKoMtmbl1FTlRMdXKx5?si=790200f570bb437d"}/>
        <DefaultCard judul={"Love Epiphany"} desk={"5:38"}
        pindah={"https://open.spotify.com/intl-id/track/3HEfLSVUo9rxdD0JxbLAUU?si=9435ad022b844d71"}/>
         
          </div>
        </div>
     
    </div>
      
      </>
    )
}