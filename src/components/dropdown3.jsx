'use client';

import { Dropdown } from 'flowbite-react';

export default function DefaultDropdown1() {
  return (
    <>
    <div className='bg-inherit hover:bg-black border-2  border-rose-700 text-white h-14 w-32 pl-7 pt-3.5 rounded-lg'>
    <Dropdown label="Album" inline >
          <Dropdown.Item href='/about'>Album</Dropdown.Item>
          <Dropdown.Item href='/songs'>Songs</Dropdown.Item>
          
         
      </Dropdown>
      
      
          </div>
          </>
  )
}


