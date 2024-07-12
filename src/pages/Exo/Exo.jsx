
import{ Card }from '@/components'
import { useState, useEffect} from 'react'

export default function Exo() {
    const [Img,setImg]=useState(null);
    const [info,setInfo]=useState(null);


    async function getList(){
        try{
            const response = await fetch("https://api.quotable.io/random");
            const data= await response.json();
            setInfo(data)       
            if(!response.ok){//res==200
                throw new Error ("La réponce de l'api n'est pas ok.")
            }        
    } catch(erreur){
        console.log(erreur);
    } setEffect() 
}


      function  setEffect(){
        const srci= Img=="https://placebear.com/g/"?"https://placebear.com/":"https://placebear.com/g/";
        console.log();
        setImg(`${srci}`);
        console.log(Img);
    }

const toAddRandom=()=>{
    
}


useEffect(()=>{
    if(!info){
        getList();    
}
},[info])


  return (
    <>
        <Card source={`${Img}${Math.floor(Math.random()*1000)}/${Math.floor(Math.random()*1000)}`} title={info?.author}>{info && info.content}</Card>
  <div >
  <button onClick={setEffect}>sitation</button>
  <button onClick={getList}>Message</button>
    </div>
     </>
  )
}
