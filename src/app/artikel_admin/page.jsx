
'use client';

import { addDoc, collection, getDocs } from 'firebase/firestore';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { db } from '../../../lib/firebase/page';
import DefaultNavbarAdmin from '@/components/navbaradmin';
import CardArtikell from '@/components/artikel2';

export default function InputSizing() {
 
  const artikelCollectionRef = collection( db, "artikel");
  const [newParagraf, setNewParagraf]=useState("");
  const [artikel, setArtikel] = useState([]);
 
  
  const createArtikel = async () => {
    await addDoc(artikelCollectionRef, {Paragraf:newParagraf})
  } 
  useEffect(()=> {
    const getArtikel = async() => {
      const data = await getDocs(artikelCollectionRef);
      setArtikel(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getArtikel();
  }, []);

  
  return (
    <form>
    <div className='bg-bekgron3 w-screen'>
      <DefaultNavbarAdmin/>
      <div className='  '>
    <div className="grid grid-cols-2   ">
      <div className='bg-inherit hover:bg-current mt-32  ml-[550px] pt-5 pl-5 pr-5 pb-5 border-4 rounded-lg border-teal-500 w-[600px] '  >
        <p className='text-white text-3xl font-bold pb-3'>Artikel</p>
        <hr className=' h-4 '></hr>
       
     
        
      <div>
        <div className="mb-2 block">
          <Label
          required
            htmlFor="large"
            value="ISI ARTIKEL"
            className='text-white text-xl font-bold '

          />
        </div>
        <Textarea
        id="comment"
        placeholder="Leave a comment..."
        
        onChange={(event) => {setNewParagraf(event.target.value);}}
        rows={6}
      />
        </div>
        <div className='flex space-x-12 pt-10'>
      <Button type="reset"  className='w-[250px]'>
        Clear
      </Button> 
       <Button type="submit" className='w-[250px]'
       onClick={createArtikel}> 
        Submit
      </Button>
      </div>
      </div>
        </div>
      </div>
      <hr className='my-10'></hr>
      <div className=''>
        <p className='text-center md:text-4xl text-rose-700 md:pb-5 sm:pb-5 font-bold sm:text-2xl text-xl pb-5'>LIST KONSER</p>
        <CardArtikell/>
      </div>
    </div>
    </form>
  )
}


