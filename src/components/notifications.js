import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'




// const notify1 = new Date(2021,7,30,8,16).getMinutes()
// const notifystring1 = notify1.toString()
// const notify2 = new Date(2021,7,29,18,51)
// const notifystring2 = notify2.toString()

const dateNotify = new Date()

const dateNotifyString = dateNotify.toString()



const Notify = () => {

    var notify = null
    const notify1 = new Date(2021,7,30,9,55).getMinutes()
const notifystring1 = notify1.toString()
    const notify2 = new Date(2021,7,30,8,38 ).getMinutes()
    const notifystring2 = notify2.toString() 
    const notifyCurrent = new Date().getMinutes()
    const currentDate = notifyCurrent.toString()   
    const storedData =[[notifystring1, "This is the first message"],[notifystring2,"This is the second message"]]
    
    // const [Dates,setDates] = useState([notifystring1,notifystring2])
    const [Dates,setDates] = useState([storedData[0],storedData[1]])
    const [isActive,setIsActive] = useState(true)
        
     const notification = null
    
    const count = 0
    const datesList = Dates.map((el)=> {
            if(currentDate=== el[0] ){
                notify = 'Norified'
                var indexDel = Dates.indexOf(el);
                Dates.splice(indexDel,1)
                // var updateDates = Dates.map(() => {
                console.log(Dates)
                // })
                // setDates(updateDates)
                
            }else{
                notify = 'Not notified'
            }
            return notify
        })
        console.log()
        var renderedOutput = Dates.map(item => <div> {item} </div>)
         console.log(renderedOutput)
    
        
    
    const handleShow = ()=>{
        setIsActive(true)
    }
    
    const handleHide = () =>{
        
            setIsActive(false)
        
    }
    return(
        
        <div>
            <div className={"container"}>

            {isActive && 
                Dates.map(item => <div> {item[1]} </div>)
            
            }
            
            <button onClick = {handleShow}>Show</button>
            <button onClick = {handleHide}>Hide</button>
            </div>

            <div>
                
               {datesList} 
                
            </div>

            <div>

            </div>
            
        </div>
       
        )
        }

export default Notify