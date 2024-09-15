import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const CardResponse = ({res}) => {
    const [showDetails,setShowDetails]=useState(false)
  return (
    <div style={{display: 'flex',justifyContent: 'space-between',width: '100%'}}>
        {  !showDetails &&
        (
           <>
           <p>{res.name}</p>
           <IoIosArrowDown onClick={() => {setShowDetails((prev) => !prev)}}/>
           </>
        )
        }
        {
          showDetails && (
            <div style={{display: 'flex',justifyContent: 'space-between',width: '100%'}}>
            <div>

            </div>
            <IoIosArrowUp onClick={() => {setShowDetails((prev) => !prev)}}/>
            </div>
          ) 
        }
        
    </div>
  )
}

export default CardResponse
