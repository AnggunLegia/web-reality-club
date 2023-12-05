
'use client';

import { addDoc, collection, getDocs } from 'firebase/firestore';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { db } from '../../../lib/firebase/page';
import DefaultNavbarAdmin from '@/components/navbaradmin';

export default function InputSizing() {
 
  const artikelCollectionRef = collection( db, "artikel");
  const musikCollectionRef = collection(db, "musik");
  const konserCollectionRef = collection(db, "konser");
  const [newJudul, setNewJudul]=useState("");
  const [newLink, setNewLink]=useState("");
  const [newMenit, setNewMenit]=useState("");
  const [newParagraf, setNewParagraf]=useState("");
  const [artikel, setArtikel] = useState([]);
  const [musik, setMusik] = useState([]);
  const [konser, setKonser] = useState([]);
  const [newTempat, setNewTempat]=useState("");
  const [newMaps, setNewMaps]=useState("");
  const [newTanggal, setNewTanggal]=useState("");
  
  
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

  const createMusik = async () => {
    await addDoc(musikCollectionRef, {Judul:newJudul, Menit:newMenit, Link:newLink})
  } 
  useEffect(()=> {
    const getMusik = async() => {
      const data = await getDocs(musikCollectionRef);
      setMusik(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getMusik();
  }, []);

  const createKonser = async () => {
    await addDoc(konserCollectionRef, {Tempat:newTempat, Tanggal:newTanggal, Maps:newMaps})
  } 
  useEffect(()=> {
    const getKonser = async() => {
      const data = await getDocs(konserCollectionRef);
      setKonser(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getKonser();
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
      <div className='bg-inherit hover:bg-current pt-5 pl-5 pr-5 pb-5 border-4 rounded-lg border-teal-500  w-[600px] mt-10 pb-10 ml-[550px]'  >
        <p className='text-white text-3xl font-bold pb-3'>LAGU</p>
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
       
        
        onChange={(event) => {setNewLink(event.target.value);}}
      />
        </div>
        <div className='flex space-x-12 pt-10'>
      <Button type="reset"  className='w-[250px]'>
        Clear
      </Button> 
       <Button type="submit" className='w-[250px]'
       onClick={createMusik}> 
        Submit
      </Button>
      </div>
      </div>

      <div className='bg-inherit hover:bg-current pt-5 pl-5 pr-5 pb-5 border-4 rounded-lg border-teal-500  w-[600px] mt-10 pb-10 ml-[550px]'  >
        <p className='text-white text-3xl font-bold pb-3'>KONSER</p>
        <hr className=' h-4 '></hr>
       
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="base"
            value="TEMPAT KONSER"
            className='text-white text-xl font-bold  '
          />
        </div>
        <TextInput
          id="base"
          sizing="md"
          type="text"
          className='pb-5 '
          onChange={(event) => {setNewTempat(event.target.value);}}
          
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="TANGGAL KONSER"
            className='text-white text-xl font-bold '

          />
        </div>
        <TextInput
        id="comment"
        placeholder="cont: 21/10/2023 22:23"
        className='pb-5'
        onChange={(event) => {setNewTanggal(event.target.value);}}
      />
        </div>

        <div>
        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="MAPS"
            className='text-white text-xl font-bold '

          />
        </div>
        <TextInput
        id="comment"
       
        
        onChange={(event) => {setNewMaps(event.target.value);}}
      />
        </div>
        <div className='flex space-x-12 pt-10'>
      <Button type="reset"  className='w-[250px]'>
        Clear
      </Button> 
       <Button type="submit" className='w-[250px]'
       onClick={createKonser}> 
        Submit
      </Button>
      </div>
      </div>
    </div>
    </form>
  )
}


