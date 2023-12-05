'use client';

import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/firebase/page';
import { useState } from 'react';


export default function InputSizing() {
  const {push} = useRouter();

 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    signInWithEmailAndPassword(auth, email, password).then((useCredential)=>{
      
    push('/admin')
    }
    ).catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorCode)
    });
    e.preventDefault();
  }
  return (
  

    <div>
    <form onSubmit={onSubmit}>
    <div className='bg-bekgron4 bg-cover w-screen h-screen'>
      <div className='w-[600px]  m-auto   pt-44'>
    <div className="flex max-w-md flex-col gap-4 m-auto ">
      <div className='bg-inherit hover:bg-current pt-5 pl-5 pr-5 pb-5 border-4 rounded-lg border-teal-500 opacity-100'  >
        <p className='text-white text-3xl font-bold pb-3'>Login</p>
        <hr className=' h-4 '></hr>
       
      <div>
        <div className="mb-2 block">
        <Label
            htmlFor="email"
            value="Your email"
            className='text-white text-xl font-bold  '
           
          />
        </div>
        <TextInput
          id="email"
          placeholder="name@flowbite.com"
          required
          type="email"
          className='pb-5'
          
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password"
            value="Your password"
            className='text-white text-xl font-bold  '
          />
        </div>
        <TextInput
          id="password"
          required
          type="password"
         
          className='pb-5'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <Button type="submit">
        Submit
      </Button>
          </div>
      </div>
      </div>
        </div>
      
    
    </form>
    </div>
  )
}


