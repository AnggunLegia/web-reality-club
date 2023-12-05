
'use client';

import { addDoc, collection, getDocs } from 'firebase/firestore';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { db } from '../../../lib/firebase/page';
import { storage } from '../../../lib/firebase/page';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import DefaultNavbarAdmin from '@/components/navbaradmin';
import CardMusik from '@/components/musik';
import CardMusik1 from '@/components/musik2';
import CardCoba from '@/components/coba';

export default function InputSizing() {
 
  
  const cobaCollectionRef = collection(db, "coba");
 
  const [newJudul, setNewJudul]=useState("");
  const [newLink, setNewLink]=useState("");
  const [newMenit, setNewMenit]=useState("");
  const [newDeskripsi, setNewDeskripsi]=useState("");
  const [newImageUpload, setNewImageUpload]=useState("");
  const [coba, setCoba] = useState([]);
 
  
  
  

  const createCoba = async () => {
    await addDoc(cobaCollectionRef,
      {
       Judul:newJudul,
       Menit:newMenit, 
       Link:newLink, 
       Deskripsi:newDeskripsi
      })
      
  } 
  const upImg = () => {
    if(newImageUpload == null) return;
      const imageRef = (storage, `images/${newImageUpload + v4}`);
      uploadBytes(imageRef, newImageUpload).then(() =>{ 
        alert("data uploaded")
      }
      );
  }
  useEffect(()=> {
    const getCoba = async() => {
      const data = await getDocs(cobaCollectionRef);
      setCoba(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getCoba();
  }, []);

 
  return (
    <form>
    <div className='bg-bekgron3 w-screen '>
     
       <DefaultNavbarAdmin/>
     
        
      <div className='pt-32 pb-10'>
        
      <div className='bg-inherit hover:bg-teal-500 pt-5 pl-5 pr-5 pb-5 border-4 rounded-lg border-teal-500  w-[600px]   ml-[550px]'  >
        <p className='text-white text-3xl font-bold pb-3'>Merch</p>
        <hr className=' h-4 '></hr>
       
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="base"
            value="Nama Barang"
            className='text-white text-xl font-bold  '
          />
        </div>
        <TextInput
          id="base"
          sizing="md"
          type="text"
          className='pb-5 '
          onChange={(event) => {setNewJudul(event.target.value);}}
          
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="Harga Barang"
            className='text-white text-xl font-bold '

          />
        </div>
        <TextInput
        id="comment"
        placeholder="cont: 2:32"
        className='pb-5'
        onChange={(event) => {setNewMenit(event.target.value);}}
      />
        </div>

        <div>
        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="Deskripsi Barang"
            className='text-white text-xl font-bold '

          />
        </div>
        <TextInput
        id="comment"
        placeholder="cont: 2:32"
        className='pb-5'
        onChange={(event) => {setNewDeskripsi(event.target.value);}}
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
       
        
        onChange={(event) => {setNewLink(event.target.value);}}
      />
        </div>
        
        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="File Foto"
            className='text-white text-xl font-bold '
            />

          <input type='file' 
          onChange={(event) => {setNewImageUpload(event.target.files);}}
          />
      </div>

        <div className='flex space-x-12 pt-10'>
      <Button type="reset"  className='w-[250px]'>
        Clear
      </Button> 
       <Button type="submit" className='w-[250px]'
       onClick={upImg}> 
        Submit
      </Button>
      </div>
      </div>
      <hr className='my-10'></hr>
      <div className=''>
        <p className='text-center md:text-4xl text-rose-700 md:pb-5 sm:pb-5 font-bold sm:text-2xl text-xl pb-5'>LIST coba</p>
        <CardCoba/>
      </div>
        </div>
      </div>
   
   
   
    </form>
  )
}


