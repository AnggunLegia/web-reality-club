'use client';

import { Footer } from 'flowbite-react';
import {  BsInstagram, BsTwitter, BsYoutube, BsTiktok, BsSpotify } from 'react-icons/bs';

export default function DefaultFooter() {
  return (
    <Footer container className='bg-black w-screen rounded-none '>
      <Footer.Copyright
        by="Anggun™"
        href="#"
        year={2023}
        className='text-white text-center pl-20 '
      />
      <div className=" mt-4 text-white flex items-center space-x-6 sm:mt-0 sm:justify-center mr-20">
      <Footer.Icon
              href="https://www.tiktok.com/@realityclubofficial?_t=8iOro9ijegE&_r=1"
              icon={BsTiktok}
              className='text-white '
            />
      <Footer.Icon
              href="https://x.com/reality_club?t=eVG0POQ3ABe_RzRWT6Jv5g&s=08"
              icon={BsTwitter}
              className='text-white '
            />
            <Footer.Icon
              href="https://www.instagram.com/realityclub?igsh=MmVlMjlkMTBhMg=="
              icon={BsInstagram}
              className='text-white '
            />
            <Footer.Icon
              href="https://youtube.com/@REALITYCLUB?si=WXconP9Y-JZcUq0p"
              icon={BsYoutube}
              className='text-white '
            />
             <Footer.Icon
              href="https://open.spotify.com/artist/1DjZI46mVZZZYmmmygRnTw?si=nR-7PQGzQzat1VL8MjeK0g"
              icon={BsSpotify}
              className='text-white '
            />
          
            </div>
    </Footer>
  )
}


