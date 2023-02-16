import React, { useEffect, useState,useRef } from "react"
const Counter=()=>{
  const[sec,Setsec]=useState("")
  var value=useRef(0);
  function handleDecrement(){
     value.current=setInterval(()=>{
        Setsec(sec=>sec-1)
      },1000)
  }
  useEffect(()=>{
    if(sec<=0){
      clearInterval(value.current)
    }
  },[sec])
  return(
    
    <div>
        <input type="number" id="timecount" onChange={(e)=>Setsec(e.target.value)} onKeyDown={(e)=>{
          if(e.key==="Enter"){
            handleDecrement()
          }
        }}/>
        <p id="currenttime">{sec}</p>
    </div>
  )
}
export default Counter