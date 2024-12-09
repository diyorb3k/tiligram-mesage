'use client'

import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

const Hom = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response)=>{
      setData(response.data)
    })
    .catch((error)=>{
console.log('xatolik',error)
    })
  })
  return (
    <div className="container mx-auto px-5 py-10" >
    {
      data.map((davlat) => (
        <div key={davlat.id}>
 <Image 
        src={davlat.url}
        alt="Tashqi manba rasm"
        width={600}
        height={400}
      />      
          <h2>{davlat.title}</h2>
          <p>{davlat.body}</p>
        </div>
      ))
    }
  </div>
  )
}
export default Hom