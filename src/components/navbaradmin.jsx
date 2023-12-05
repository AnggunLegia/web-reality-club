'use client';
import Image from "next/image"


import { Navbar } from 'flowbite-react';

export default function DefaultNavbarAdmin() {
  return (
    <Navbar
      
     
      className="bg-transparent w-screen p-8 fixed z-40"
    >
      <Navbar.Brand
       
        href=""
      >
        <img
          alt="Flowbite React Logo"
          className="mr-2 ml-3"
          src="/images/logorc1.png"width={110} height={95}
        />
        {/* <span className="self-center whitespace-nowrap text-3xl font-bold text-rose-700"
          Reality Club </span> */}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          
          href="/admin"
          className=" text-white text-2xl"
        >
          
            Home
          
        </Navbar.Link>
        <Navbar.Link
         
         className=" text-white text-2xl"
          href="/musik_admn"
        >
          
           Music
          
        </Navbar.Link>
        <Navbar.Link href="/merch_admin" className=" text-white text-2xl">
          Merch
        </Navbar.Link>
        <Navbar.Link href="/koser_admin" className=" text-white text-2xl">
          Concert
        </Navbar.Link>
        <Navbar.Link href="/artikel_admin" className="mr-20  text-white text-2xl">
          Artikel
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


