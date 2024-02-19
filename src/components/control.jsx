'use client'

import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase/page';
import { Card, Footer, Button } from 'flowbite-react';
import {   BsTrash, BsPen } from 'react-icons/bs';
import { FooterIcon } from 'flowbite-react/lib/esm/components/Footer/FooterIcon';
import { useSearchParams } from 'next/navigation';



    
   

function CardMusikggh(){
    const searchParams = useSearchParams();
    const id = searchParams.get("id")
    const musikCollectionRef = collection(db, "musik");
 
    const [newJudul, setNewJudul]=useState("");
    const [newLink, setNewLink]=useState("");
    const [newMenit, setNewMenit]=useState("");
    const [newLirik, setNewLirik]=useState("");
    const [musik, setMusik] = useState([]);

 const deleteMusik = async (id) => {
        const musikDoc = doc (db, "musik", id);
        await deleteDoc(musikDoc);
    };
    
    useEffect(()=> { let data1 = [];
        const musikCollectionRef = doc (db, "musik", id);
        const getMusik = async() => {
          const data = await getDoc(musikCollectionRef);
          data1.push(data.data());
          setNewJudul(data1[0].Judul)
          setNewLink(data1[0].Link)
          setNewMenit(data1[0].Menit)
          setNewLirik(data1[0].Lirik)
    
    
        };
        getMusik()
    },[])

   
    return(
       
        <div className=' grid grid-cols-3 gap-4 m-auto w-[1400px]'>
            {musik.map((musik)=>{
                return(
                    <div>{""}
                        <Card

      className=" "
      href={musik.Link}
    >
      
     
    <p className=" font-bold tracking-tight text-gray  md:text-2xl sm:text-xl   text-base "
    defaultValue= {newJudul}
    >
     
      </p>
      <p className="font-normal text-gray-700 "
       defaultValue= {newMenit}
      >
      
      </p>
     <pre className="font-normal text-black text-lg " 
      defaultValue= {newLirik}
     >
     
     </pre>
     <div className='flex space-x-36'>
        <button className='w-32 bg-white rounded-lg hover:bg-slate-300 border-2 border-bg-black' 
        onClick={()=>{ deleteMusik(musik.id)}} >
                    hapus
        </button>
        <button className='w-32 bg-white rounded-lg hover:bg-slate-300 '>
                    <a  href={`/edit_musik?id=${musik.id}`}>edit</a>
        </button>
     </div>
      
    
    </Card>
    
                    </div>
                )
            })}
        </div>
    )
}
export default CardMusikggh;