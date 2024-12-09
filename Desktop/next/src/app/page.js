'use client'

import axios from "axios"
import { useEffect, useState } from "react"

const Hom = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
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
          <h2>{davlat.title}</h2>
          <p>{davlat.body}</p>
        </div>
      ))
    }
  </div>
  )
}
export default Hom