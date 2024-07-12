import React from 'react'
import{ Card,Toogle }from '@/components'
import { useState } from 'react';

import * as locData from '@/utils/LocalData/LocalData.jsx'
export default function Exo2() {

    const [info,setInfo]=useState({nom:"default",content:"content default"});
    const [datas,setDatas]=useState(null);

    async function getInfo(){
        try{
            const response = await fetch("https://api.quotable.io/random");
            const data= await response.json();
            setInfo({nom:data.author,content:data.content})       
            if(!response.ok){//res==200
                throw new Error ("La réponce de l'api n'est pas ok.")
            }        
    } catch(erreur){
        console.log(erreur);
    }
}

 const save=()=>{
    locData.setData("save",JSON.stringify(info))
    
    
    
 }
 const get=()=>{
 
    console.log(JSON.parse( localStorage.getItem("save")));
    setDatas(JSON.parse( localStorage.getItem("save")))
 }


  return (
    <>Exo2

    
    
    
    <div>
        <Card 
        source={`ggr`} 
        title={info.nom}>
            {info.content}
        </Card>
  <div >
  <button onClick={get}>console</button>
  <button onClick={getInfo}>Next</button>
  <button onClick={save}>Next</button>
    </div>
     </div>
    
    <div>
        <Toogle data={"in"}>bien de bonsoir  </Toogle>
    </div>

    </>
  )
}
