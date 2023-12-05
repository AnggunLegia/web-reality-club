
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
    

  
 
  const [newTempat, setNewTempat]=useState("");
  const [newMaps, setNewMaps]=useState("");
  const [newTanggal, setNewTanggal]=useState("");
  const [konser, setKonser] = useState([]);
 
  

  
    
  const createCoba = async (e) => {
    e.preventDefault();
    const upKonser = doc (db, "konser", id);
    await updateDoc(upKonser, {Tempat:newTempat, Maps:newMaps, Tanggal:newTanggal})
    alert("success")
  } 
  useEffect(()=> { let data1 = [];
    const konserCollectionRef = doc (db, "konser", id);
    const getKonser = async() => {
      const data = await getDoc(konserCollectionRef);
      data1.push(data.data());
      setNewTempat(data1[0].Tempat)
      setNewMaps(data1[0].Maps)
      setNewTanggal(data1[0].Tanggal)


    };
    getKonser();
  }, []);

 
  return (
    <form>
    <div className='bg-bekgron3 w-screen '>
     
       <DefaultNavbarAdmin/>
     
        
      <div className='pt-32 pb-10'>
        
      <div className='bg-inherit hover:bg-current pt-5 pl-5 pr-5 pb-5 border-4 rounded-lg border-teal-500  w-[600px]   ml-[550px]'  >
        <p className='text-white text-3xl font-bold pb-3'>Konser</p>
        <hr className=' h-4 '></hr>
       
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="base"
            value="Tempat"
            className='text-white text-xl font-bold  '
          />
        </div>
        <TextInput
          id="base"
          sizing="md"
          type="text"
          value={newTempat}
          className='pb-5 '
          onChange={(event) => {setNewTempat(event.target.value);}}
          
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="Tanggal"
            className='text-white text-xl font-bold '

          />
        </div>
        <TextInput
        id="comment"
        placeholder="cont: 2:32"
        className='pb-5'
        value={newTanggal}
        onChange={(event) => {setNewTanggal(event.target.value);}}
      />
        </div>

        <div>
        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="Maps"
            className='text-white text-xl font-bold '

          />
        </div>
        <TextInput
        id="comment"
       value={newMaps}
        
        onChange={(event) => {setNewMaps(event.target.value);}}
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
      <hr className='my-10'></hr>
     
        </div>
      </div>
   
   
   
    </form>
  )
}


