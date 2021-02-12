import {Component, useState, useEffect} from 'react';
import ActionCard from '../components/ActionCard'
const Actions=({sendData})=> {
    const [actions, setActions] = useState([{}])
    const addNewAction = (data)=>{
        setActions([...actions, data])
    }
    const modifyAction = ()=>{
        //find action in state using..... index? 
        //copy array, removing action,
        //set state to array with new action, probably in order
        setActions([...actions])//TODO
    }
    const callBackMethod=(value)=>{
        sendData(value);
    }
    useEffect(()=>{callBackMethod(actions)}, [actions])
    
    return(
        <div>
            <button type="button" className="btn btn-success" onClick={addNewAction}>Add Action</button>
                {actions.map((value, index)=>{
                    <ActionCard key={index} sendActionData={modifyAction}></ActionCard>
                })}
        </div>
    )
}
export default Actions;