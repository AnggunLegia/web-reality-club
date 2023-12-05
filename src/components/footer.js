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
              href="#"
              icon={BsTiktok}
              className='text-white '
            />
      <Footer.Icon
              href="#"
              icon={BsTwitter}
              className='text-white '
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className='text-white '
            />
            <Footer.Icon
              href="#"
              icon={BsYoutube}
              className='text-white '
            />
             <Footer.Icon
              href="#"
              icon={BsSpotify}
              className='text-white '
            />
          
            </div>
    </Footer>
  )
}


