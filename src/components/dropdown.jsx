'use client';

import { Dropdown } from 'flowbite-react';

export default function DefaultDropdown() {
  return (
    <>
    <div className='bg-inherit hover:bg-black border-2  border-rose-700 text-white h-14 w-32 pl-7 pt-3.5 rounded-lg'>
    <Dropdown label="TAHUN" inline >
          <Dropdown.Item href='/concert'>2023</Dropdown.Item>
          <Dropdown.Item>2024</Dropdown.Item>
          <Dropdown.Item>2025</Dropdown.Item>
         
      </Dropdown>
      
      
          </div>
          </>
  )
}


