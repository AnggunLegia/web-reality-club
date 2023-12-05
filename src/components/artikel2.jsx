'use client'

import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase/page';
import { Button, Card, Footer } from 'flowbite-react';
import {   BsTrash, BsPen } from 'react-icons/bs';

function CardArtikell(){
    const [artikel, setArtikel] = useState([]);
    const artikelCollectionRef = collection(db, "artikel")

    const deleteartikel = async (id) => {
        const artikelDoc = doc (db, "artikel", id);
        await deleteDoc(artikelDoc);
    }
    useEffect(()=>{
        const getArtikel= async()=>{
            const data = await getDocs(artikelCollectionRef);
            setArtikel(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        };
        getArtikel()
    },[])
    return(
        <div className="md:m-auto sm:ml-[67px] ml-28  md:w-[1200px] sm:w-[600px] w-[400px] pt-10 pb-10
        grid gap-4">
            {artikel.map((artikel)=>{
                return(
                    <div>{""}
                        <Card
      className=" "
      
    >
      
     
    <p className="font-bold text-black  md:text-2xl sm:text-xl   text-base ">
       {artikel.Paragraf}
      </p>
     
     
      <div className='flex space-x-[890px]'>
        <button className='w-32 bg-white rounded-lg hover:bg-slate-300 border-2 border-bg-black' 
        onClick={() =>{ deleteartikel(artikel.id)}}>
                    hapus
        </button>
        <button className='w-32 bg-white rounded-lg hover:bg-slate-300 border-2 border-bg-black '>
                    <a href={`/edit_artikel?id=${artikel.id}`}>edit</a>
        </button>
     </div>
    </Card>
    
                    </div>
                )
            })}
        </div>
    )
}
export default CardArtikell;