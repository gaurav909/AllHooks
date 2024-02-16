import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count,setCount]=useState(0)
    




   
    
    useEffect(()=>{
        const fetchData= async()=>{
            const fetchApi = await fetch('https://jsonplaceholder.typicode.com/todos')
            const result = await fetchApi.json()

            // console.table(result)
        }
        
        fetchData()
      
        console.log("UseEffect is Running")
     

    },[])
  return (
    <div>
        <h1>{count}</h1>
   
        <button onClick={()=>setCount(count+1)}>Incerease</button>
    </div>
  )
}

export default UseEffectHook