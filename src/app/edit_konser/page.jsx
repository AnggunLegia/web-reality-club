
'use client';

import { addDoc, collection, getDoc, doc, updateDoc } from 'firebase/firestore';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { db, storage } from '../../../lib/firebase/page';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
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
  const [newDeskripsi, setNewDeskripsi]=useState("");
  const [newStok, setNewStok]=useState("");
  const [newHarga, setNewHarga]=useState("");
  const [downloadURL, setDownloadURL] = useState('')
  const [loading, setLoading] = useState(false)
  const [img, setImg] = useState('')
  
  
 

  
  
  const handleSelectedFile = (filee) => {
    const files = filee.files
    if (files && files[0].size < 10000000) {
        setImg(files[0])
        try {
            console.log(files)
            if (files) {
                setLoading(true)
                const name = files[0].name
                const imgRef = ref(storage, `files/${name}`)
                const uploadTask = uploadBytesResumable(imgRef, files[0])

                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        console.log(progress)
                    },
                    (error) => {
                        alert(error.message)
                    },
                    () => {

                        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                            //url is download url of file
                            console.log(url)
                            setDownloadURL(url)
                            setLoading(false)
                        })
                    },
                )
            } else {
                alert("error")
            }




        } catch (error) {
            console.error("An error occured", error);
        }

        console.log(files[0])
    } else {
        alert('File size to large')
    }
}
 
  

  
    
  const createCoba = async (e) => {
    e.preventDefault();
    const upKonser = doc (db, "konser", id);
    await updateDoc(upKonser, {
      Tempat:newTempat, Maps:newMaps, Tanggal:newTanggal, Deskripsi:newDeskripsi, Asset:downloadURL, Stok:newStok, Harga: newHarga})
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
      setNewDeskripsi(data1[0].Deskripsi)
      setDownloadURL(data1[0].Asset)
      setNewStok(data1[0].Stok)


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

        <div>
        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="Deskripsi Tiket"
            className='text-white text-xl font-bold '

          />
        </div>
        <TextInput
        id="comment"
       value={newDeskripsi}
        
        onChange={(event) => {setNewDeskripsi(event.target.value);}}
      />
        </div>

        <div>
        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="Stok Tiket"
            className='text-white text-xl font-bold '

          />
        </div>
        <TextInput
        id="comment"
       value={newStok}
        
        onChange={(event) => {setNewStok(event.target.value);}}
      />
        </div>

        <div>
        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="Harga Tiket"
            className='text-white text-xl font-bold '

          />
        </div>
        <TextInput
        id="comment"
        type='number'
       value={newHarga}
        
        onChange={(event) => {setNewHarga(event.target.value);}}
      />
        </div>

        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="File Foto"
            className='text-white text-xl font-bold '
            />

          <input type='file' 
           className='rounded-lg text-white'
           
          onChange={(files) => handleSelectedFile(files.target)}
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


