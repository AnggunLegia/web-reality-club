
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
    

  
 
  const [newJudul, setNewJudul]=useState("");
  const [newLink, setNewLink]=useState("");
  const [newMenit, setNewMenit]=useState("");
  const [newDeskripsi, setNewDeskripsi]=useState("");
  const [downloadURL, setDownloadURL] = useState('')
  const [newStok, setNewStok]=useState("");
  const [loading, setLoading] = useState(false)
  const [img, setImg] = useState('')
  const [coba, setCoba] = useState([]);
 
  

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
    const upCoba = doc (db, "coba", id);
    await updateDoc(upCoba, {Judul:newJudul, Link:newLink, Menit:newMenit, Deskripsi:newDeskripsi, Asset:downloadURL, Stok:newStok})
    alert("success")
    

  } 
  useEffect(()=> { let data1 = [];
    const cobaCollectionRef = doc (db, "coba", id);
    const getCoba = async() => {
      const data = await getDoc(cobaCollectionRef);
      data1.push(data.data());
      setNewJudul(data1[0].Judul)
      setNewLink(data1[0].Link)
      setNewMenit(data1[0].Menit)
      setNewDeskripsi(data1[0].Deskripsi)
      setDownloadURL(data1[0].Asset)
      setNewStok(data1[0].Stok)


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
            value="Harga"
            className='text-white text-xl font-bold '

          />
        </div>
        <TextInput
        id="comment"
        placeholder="cont: idr 200"
        type='number'
        className='pb-5'
        value={newMenit}
        onChange={(event) => {setNewMenit(event.target.value);}}
      />
        </div>
        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="Deskripsi Barang"
            className='text-white text-xl font-bold '

          />
        </div>
        <div>
        <TextInput
        id="comment"
        placeholder="cont: 2:32"
       value={newDeskripsi}
        className='pb-5'
        onChange={(event) => {setNewDeskripsi(event.target.value);}}
      />
        </div>

        <div className="mb-2 block">
          <Label
          
            htmlFor="large"
            value="Stok Barang"
            className='text-white text-xl font-bold '

          />
        </div>
        <div>
        <TextInput
        id="comment"
        placeholder="100"
       value={newStok}
        className='pb-5'
        onChange={(event) => {setNewStok(event.target.value);}}
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


