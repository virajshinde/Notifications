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
    const notify2 = new Date(2021,7,30,11,28 ).getMinutes()
    const notifystring2 = notify2.toString()
    const notifyCurrent = new Date().getMinutes()
    const currentDate = notifyCurrent.toString()    

    const [Dates,setDates] = useState([notifystring1,notifystring2])
    const [isActive,setIsActive] = useState(true)
        
     const notification = null
    
    
    const datesList = Dates.map((el)=> {
            if(currentDate=== el ){
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
    
    // console.log(dates)
    //  if(dates[0]===dates[1]){
    //      notify = 'Norified'
    //  }else{
    //      notify = 'Not notified'
    //  }
    
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
                Dates.map(item => <div> {item} </div>)
            
            }
            
            <button onClick = {handleShow}>Show</button>
            <button onClick = {handleHide}>Hide</button>
            </div>

            <div>
                
               {datesList} 
                
            </div>
            
        </div>
       
        )
        }

export default Notify