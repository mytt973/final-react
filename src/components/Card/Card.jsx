import React from 'react'
import Paragraph from "../Paragraph/Paragraph"
import {Article,Title} from "../"
import"./Card.css"
export default function Card({ children, title, source}) {
  return (
<Article>
 
  
    <Title
    title={title}
    level="h2"/>
 <div className='test wrapper'>
  <div className='one'>
  <img width={200} height={200} src={source} alt='not no work'/></div>
<div className='two'>
  <Paragraph>
    {children}
  </Paragraph>
  </div>

  </div>
</Article>

  )
}
