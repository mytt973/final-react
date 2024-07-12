import React from 'react'
import Section from "../Section/Section.jsx"
import Card from '../Card/Card'
export default function ArrayCard() {
  const arr=[{
    title:"Bailey",
    description:"so^gbehgerghzogzr^ghg^z"
  },{
    title:"Bailey",
    description:"so^gbehgerghzogzr^ghg^z"
  },{
    title:"Bailey",
    description:"so^gbehgerghzogzr^ghg^z"
  },{
    title:"Bailey",
    description:"so^gbehgerghzogzr^ghg^z"
  }]
  return (
  <>
  {arr.map(element=>{return(
    <Section title={element.title}>
      <Card>{element.description}</Card>
    </Section>)
  })}
    
  </>
  )
}
