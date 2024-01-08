
'use client';

import { addDoc, collection, getDocs } from 'firebase/firestore';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { db, storage} from '../../../lib/firebase/page';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { v4 } from 'uuid';
import DefaultNavbarAdmin from '@/components/navbaradmin';
import CardMusik from '@/components/musik';
import CardMusik1 from '@/components/musik2';
import CardCoba from '@/components/coba';
import CardUp from '@/components/upcom_admin';

export default function InputSizing() {
 
  
  const upcomingCollectionRef = collection(db, "upcoming");
 
 
  const [downloadURL, setDownloadURL] = useState('')
  const [loading, setLoading] = useState(false)
  const [img, setImg] = useState('')
  const [upcoming, setUpcoming] = useState([]);
 
  
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
  

  const createCoba = async () => {
    await addDoc(upcomingCollectionRef,
      {
      
       Asset: downloadURL,
       
      })
      alert("success")
      
  } 
 
  useEffect(()=> {
    const getCoba = async() => {
      const data = await getDocs(upcomingCollectionRef);
      setUpcoming(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
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
       onClick={createCoba}> 
        Submit
      </Button>
      </div>
      </div>
      <hr className='my-10'></hr>
      <div className=''>
        <p className='text-center md:text-4xl text-rose-700 md:pb-5 sm:pb-5 font-bold sm:text-2xl text-xl pb-5'>LIST UPCOMING</p>
        <CardUp/>
      </div>
        </div>
      </div>
   
   
   
    </form>
  )
}


