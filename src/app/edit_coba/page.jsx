
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
    

  
 
  const [newJudul, setNewJudul]=useState("");
  const [newLink, setNewLink]=useState("");
  const [newMenit, setNewMenit]=useState("");
  const [coba, setCoba] = useState([]);
 
  

  
    
  const createCoba = async (e) => {
    e.preventDefault();
    const upCoba = doc (db, "coba", id);
    await updateDoc(upCoba, {Judul:newJudul, Link:newLink, Menit:newMenit})
    

  } 
  useEffect(()=> { let data1 = [];
    const cobaCollectionRef = doc (db, "coba", id);
    const getCoba = async() => {
      const data = await getDoc(cobaCollectionRef);
      data1.push(data.data());
      setNewJudul(data1[0].Judul)
      setNewLink(data1[0].Link)
      setNewMenit(data1[0].Menit)


    };
    getCoba();
  }, []);

 
  return (
    <form>
    <div className='bg-bekgron3 w-screen '>
     
       <DefaultNavbarAdmin/>
     
        
      <div className='pt-32 pb-10'>
        
      <div className='bg-inherit hover:bg-current pt-5 pl-5 pr-5 pb-5 border-4 rounded-lg border-teal-500  w-[600px]   ml-[550px]'  >
        <p className='text-white text-3xl font-bold pb-3'>coba</p>
        <hr className=' h-4 '></hr>
       
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="base"
            value="JUDUL LAGU"
            className='text-white text-xl font-bold  '
          />
        </div>
        <TextInput
          id="base"
          sizing="md"
          type="text"
          value={newJudul}
          className='pb-5 '
          onChange={(event) => {setNewJudul(event.target.value);}}
          
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="MENIT LAGU"
            className='text-white text-xl font-bold '

          />
        </div>
        <TextInput
        id="comment"
        placeholder="cont: 2:32"
        className='pb-5'
        value={newMenit}
        onChange={(event) => {setNewMenit(event.target.value);}}
      />
        </div>

        <div>
        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="Link"
            className='text-white text-xl font-bold '

          />
        </div>
        <TextInput
        id="comment"
       value={newLink}
        
        onChange={(event) => {setNewLink(event.target.value);}}
      />
        </div>
        <div className='flex space-x-12 pt-10'>
      <Button type="reset"  className='w-[250px]'>
        Clear
      </Button> 
       <Button type="submit" className='w-[250px]'
       onClick={createCoba}  > 
        <a href='/merch_admin'>Update</a>
      </Button>
      </div>
      </div>
      <hr className='my-10'></hr>
     
        </div>
      </div>
   
   
   
    </form>
  )
}


