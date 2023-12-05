'use client'

import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase/page';
import { Card } from 'flowbite-react';


function CardArtikel(){
    const [artikel, setArtikel] = useState([]);
    const artikelCollectionRef = collection(db, "artikel")

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
      className=" bg-inherit  border-transparent"
      
    >
      
     
    <p className="font-bold text-white  md:text-2xl sm:text-xl   text-base text-justify ">
       {artikel.Paragraf}
      </p>
     
    </Card>
    
                    </div>
                )
            })}
        </div>
    )
}
export default CardArtikel;