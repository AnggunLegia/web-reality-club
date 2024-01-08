'use client'

import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase/page';
import { Card, Footer, Button } from 'flowbite-react';
import {   BsTrash, BsPen } from 'react-icons/bs';
import { FooterIcon } from 'flowbite-react/lib/esm/components/Footer/FooterIcon';

function CardUp(){
    const [upcoming, setUpcoming] = useState([]);
    const upcomingCollectionRef = collection(db, "upcoming");

 const deleteCoba = async (id) => {
   
        const upcomingDoc = doc (db, "upcoming", id);
        await deleteDoc(upcomingDoc);
    };
    
    useEffect(()=>{
        const getUpcoming= async()=>{
            const data = await getDocs(upcomingCollectionRef);
            setUpcoming(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        };
        getUpcoming()
    },[])

   
    return(
       
        <div className=' grid grid-cols-3 gap-4 m-auto w-[1400px]'>
            {upcoming.map((upcoming)=>{
                return(
                    <div>{""}
                        <Card

    className="  bg-white hover:bg-slate-300 flex flex-col justify-between p-5 rounded-lg items-start "
    
    >
      
      <img src={upcoming.Asset} className='md:w-[200px] sm:w-[300px] w-[400px]'/>
    
     
     <div className='flex space-x-24'>
        <button className='w-32 bg-white rounded-lg hover:bg-slate-300 border-2 border-bg-black' 
        onClick={() =>{ deleteCoba(upcoming.id)}}>
                    hapus
        </button>
        <button className='w-32 bg-white rounded-lg hover:bg-slate-300 border-2 border-bg-black'>
        <a href={`/edit_admin?id=${upcoming.id}`}>edit</a>
        </button>
     </div>
      
    
    </Card>
    
                    </div>
                )
            })}
        </div>
    )
}
export default CardUp;