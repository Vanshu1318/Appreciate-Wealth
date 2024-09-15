import React, { useEffect, useState } from 'react'
import './ChatBot1.css'
import fruitsAll from '../data'
import { IoIosArrowDown } from "react-icons/io";
import CardResponse from './CardResponse';
const ChatBot1 = () => {
    const [prompt,setPrompt]=useState('')
    const [data,setData]=useState([])
    const [fruits,setFruits]=useState(false)
    const [conversation,setConversation]=useState([])
    const [notFound,setNotFound]=useState(false);
   
    const [filteredFruits,setFilteredFruits]=useState(fruitsAll)
    
    function handlePrompt(){
        
        if(prompt && prompt.toLowerCase().includes('fruits')){
            setFruits(true);
            setConversation((prev) => [...prev,{prompt,response: fruitsAll}])
        }
        else{
            const filterFruit=fruitsAll.filter((fruit) => 
                 (fruit.name).toLowerCase().includes(prompt.toLowerCase())
            
            )
            if(filterFruit.length === 0){
               
               setFruits(true);
               setFilteredFruits(filterFruit);
            setConversation((prev) => [...prev,{prompt,response: filterFruit}])
            }
            else{
            setFruits(true);
            setFilteredFruits(filterFruit);
            setConversation((prev) => [...prev,{prompt,response: filterFruit}])
            }
            
        }
        
        setPrompt('')
    }
   
  return (
    <div className='main-container'>
        <div className='content'>
            <div className='messages'>
                
            {
                conversation.map((con) => (
                    <div>
                        <div className='cardPrompt '>
                            {con.prompt}
                        </div>
                        <div className=''>
                             {
                               
                                con.response.length === 0 &&  
                                <div className='cardResponse'><p>Fruit not found</p>
                                </div>
                             }
                             {
                             con.response.length != 0 && con.response.map((res) => (
                                <div className='cardResponse'>
                                  <CardResponse res={res}/>
                                </div>
                             ))}
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        <div className='input-prompt'>
            
            <div className='chat'>
                <input type='text'  value={prompt} onChange={(e) => {
                    e.preventDefault();
                    setPrompt(e.target.value)
                }} placeholder='  Search all fruits or by name of fruits'/>
                <button className='btn' onClick={handlePrompt}>send</button>
            </div>
        </div>
    </div>
  )
}

export default ChatBot1
