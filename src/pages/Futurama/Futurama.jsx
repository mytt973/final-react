import { Title,Article,Paragraph } from "@/components"
import { useState, useEffect } from "react";

function Futurama() {
    const [characterList, setCharactersList]=useState(null)
    const [character, setCharacter]=useState(null);
    const [loading, setLoading]=useState(null);
    const [error, setError]=useState(null);

    const returnRandomCharacter = (actualArray)=>{
        return actualArray[Math.floor(Math.random() * actualArray.length)]
    }

    const fetchCharacter=async()=>{
        setLoading(true);
        setError(null);
        try{
            const response = await fetch("https://api.sampleapis.com/futurama/characters");
            if(!response.ok){//res==200
                throw new Error ("La réponce de l'api n'est pas ok.")
            }
            const data= await response.json();
            setCharactersList(data);
            const randomCharacter=returnRandomCharacter(data);
            setCharacter(randomCharacter);
            setLoading(false);
            //

        } catch(error){
            setError("Erreur lors de la récupération du personage");
            setLoading(false);
        }

    }

        useEffect(()=>{
            if(!characterList){
                fetchCharacter();
        }
        },[characterList])


  return (
    <>
    fdg        <button onClick={()=> !characterList? fetchCharacter(): setCharacter(returnRandomCharacter(characterList))}>
            New personnage
        </button>
{loading && (
    <Article>

        <Title
        title="Chargement des donées"
        level="h2"/>
        <Paragraph>
            Les données sont en cours de récupération...
        </Paragraph>


    </Article>
)}
{error && (
    <Article>
        <Title/>
        <Paragraph>
            une erreur à été detecter
        </Paragraph>
        <Paragraph>
            Détail  : {error}
        </Paragraph>
    </Article>
)}
{character && (
    <Article>
    
        <Title
        title={`${character.name.first} ${character.name.middle} ${character.name.last}`}
        level="h3"/>
        <img src= {character.images.main} alt={character.name.first}/>
        <Paragraph>
            <strong>age</strong>: {character.age.toLowerCase() !== "unknown" ? character.age:"Inconu"}
        </Paragraph>
        <Paragraph>
            <strong>gender</strong>: {character.gender}
        </Paragraph>
        <Paragraph>
            <strong>Espèce</strong>: {character.species}
        </Paragraph>
        <Paragraph>
            <strong>Occupation</strong> : {character.occupation}
        </Paragraph>
        {character.homePlanet &&(
            <Paragraph>
                <strong>Planet</strong> : {character.homePlanet}
            </Paragraph>
           )}
        <Paragraph>
              <strong>Expretion</strong> : {character.sayings[Math.floor(Math.random()*character.sayings.length)]}
        </Paragraph>

       <ul>{character.sayings.map(
                (saying,index)=>(
                    <li key={index}>{saying}</li>
                )
            )}
        </ul>       
    </Article>
)}

    </>
  )
}

export default Futurama;