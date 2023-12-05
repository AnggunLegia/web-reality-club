'use client'

import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase/page';
import { Card } from 'flowbite-react';


function CardKonser1(){
    const [konser, setKonser] = useState([]);
    const konserCollectionRef = collection(db, "konser")

    const deletekonser = async (id) => {
        const konserDoc = doc (db, "konser", id);
        await deleteDoc(konserDoc);
    }
    useEffect(()=>{
        const getKonser= async()=>{
            const data = await getDocs(konserCollectionRef);
            setKonser(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        };
        getKonser()
    },[])
    return(
       
        <div className=' md:grid md:grid-cols-3 md:gap-4 md:m-auto md:w-[1400px] sm:grid sm:grid-cols-2 sm:gap-4 sm:w-[700px] w-[500px] grid  gap-y-2 '>
            {konser.map((konser)=>{
                return(
                    <div>{""}
                        <div

      className="  bg-white hover:bg-slate-300 flex flex-col justify-between p-5 rounded-lg items-start h-32"
      href={konser.Maps}
    >
      
     
    <p className=" font-bold tracking-tight text-gray  md:text-2xl sm:text-xl line-clamp-2  text-base ">
       {konser.Tempat}
      </p>
      <p className="font-normal text-gray-700 ">
       {konser.Tanggal}
      </p>

      <div className='flex space-x-36'>
        <button className='w-32 bg-white rounded-lg hover:bg-slate-300 border-2 border-bg-black' 
        onClick={() =>{ deletekonser(konser.id)}}>
                    hapus
        </button>
        <button className='w-32 bg-white rounded-lg hover:bg-slate-300 '>
                    <a href={`/edit_konser?id=${konser.id}`}>edit</a>
        </button>
     </div>
    </div>


    
                    </div>
                )
            })}
        </div>
    )
}
export default CardKonser1;