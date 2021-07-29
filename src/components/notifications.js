import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'




const notify1 = new Date(2021,7,29,18,51)
const notifystring1 = notify1.toString()
const notify2 = new Date(2021,7,29,18,51)
const notifystring2 = notify2.toString()

const dateNotify = new Date()

const dateNotifyString = dateNotify.toString()



const Notify = () => {

    var notify = null
    
    const [dates,setDates] = useState([notifystring1,notifystring2])
    const [isActive,setIsActive] = useState(true)
        
     const notification = null
       
    console.log(dates)
     if(dates[0]===dates[1]){
         notify = 'Norified'
     }else{
         notify = 'Not notified'
     }
    
    const handleShow = ()=>{
        setIsActive(true)
    }
    
    const handleHide = () =>{
        
            setIsActive(false)
        
    }
    return(
        
        <div>
            <div className={"container"}>

            {isActive && <>
            <div>{notifystring1}</div>
            <div>{notifystring2}</div>
            </>
            }
            
            <button onClick = {handleShow}>Show</button>
            <button onClick = {handleHide}>Hide</button>
            </div>

            <div>
                
               {notify} 
                
            </div>
            
        </div>
       
        )
        }

export default Notify