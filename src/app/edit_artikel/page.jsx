
'use client';

import { addDoc, collection, getDoc, doc, updateDoc } from 'firebase/firestore';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { db } from '../../../lib/firebase/page';
import DefaultNavbarAdmin from '@/components/navbaradmin';
import CardMusik from '@/components/musik';
import CardMusik1 from '@/components/musik2';
import CardCoba from '@/components/coba';
import { useSearchParams } from 'next/navigation';

export default function InputSizing() {
 
    const searchParams = useSearchParams();
    const id = searchParams.get("id")
    

  
 
  const [newParagraf, setNewParagraf]=useState("");
 
  const [artikel, setArtikel] = useState([]);
 
  

  
    
  const createCoba = async (e) => {
    e.preventDefault();
    const upArtikel = doc (db, "artikel", id);
    await updateDoc(upArtikel, {Paragraf:newParagraf})
    alert("success")

  } 
  useEffect(()=> { let data1 = [];
    const artikelCollectionRef = doc (db, "artikel", id);
    const getArtikel = async() => {
      const data = await getDoc(artikelCollectionRef);
      data1.push(data.data());
      setNewParagraf(data1[0].Paragraf)
      

    };
    getArtikel();
  }, []);

 
  return (
    
     <form>
    <div className='bg-bekgron3 w-screen h-screen'>
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
        value={newParagraf}
        onChange={(event) => {setNewParagraf(event.target.value);}}
        rows={6}
      />
        </div>
        <div className='flex space-x-12 pt-10'>
      <Button type="reset"  className='w-[250px]'>
        Clear
      </Button> 
      <Button type="submit" className='w-[250px]'
       onClick={createCoba}  > 
       Update
      </Button>
      </div>
      </div>
        </div>
      </div>
     
        </div>
     
     </form>
   
   
  
  )
}


