
'use client';

import { addDoc, collection, getDocs } from 'firebase/firestore';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { db, storage } from '../../../lib/firebase/page';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import DefaultNavbarAdmin from '@/components/navbaradmin';
import CardKonser from '@/components/konser';
import CardKonser1 from '@/components/konser_admin';

export default function InputSizing() {
 
  
  const konserCollectionRef = collection(db, "konser");
 
  const [konser, setKonser] = useState([]);
  const [newTempat, setNewTempat]=useState("");
  const [newMaps, setNewMaps]=useState("");
  const [newTanggal, setNewTanggal]=useState("");
  const [newDeskripsi, setNewDeskripsi]=useState("");
  const [newStok, setNewStok]=useState("");
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
  

  const createKonser = async () => {
    await addDoc(konserCollectionRef,
      {
        Tempat:newTempat, 
        Tanggal:newTanggal, 
        Maps:newMaps,
       Deskripsi:newDeskripsi,
       Asset: downloadURL,
       Stok: newStok
      })
      
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
     
        
     <div className='pt-32 pb-10'>
        

      <div className='bg-inherit hover:bg-current pt-5 pl-5 pr-5  border-4 rounded-lg border-teal-500  w-[600px] mt-10 pb-10 ml-[550px]'  >
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
            value="Stok Barang"
            className='text-white text-xl font-bold '

          />
        </div>
        <TextInput
        id="comment"
        placeholder="cont: 2:32"
        className='pb-5'
        onChange={(event) => {setNewStok(event.target.value);}}
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
       onClick={createKonser}> 
        Submit
      </Button>
      </div>
      </div>
      <hr className='my-10'></hr>
      <div className=''>
        <p className='text-center md:text-4xl text-rose-700 md:pb-5 sm:pb-5 font-bold sm:text-2xl text-xl pb-5'>LIST KONSER</p>
        <CardKonser1/>
      </div>
    </div>
    </div>
   
    </form>
  )
}


