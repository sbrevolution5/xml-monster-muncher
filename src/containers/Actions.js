import {Component, useState, useEffect} from 'react';
import ActionCard from '../components/ActionCard'
const Actions=({sendData})=> {
    const [actions, setActions] = useState([{}])
    const addNewAction = (data)=>{
        setActions([...actions, data])
    }
    // problem: there are 2 ways to edit state, one that adds a "blank" action card, and another that updates the content of that state based on the changes in the card, or removes the card if the remove button was (clicked and confirmed?).  
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
            <button type="button" className="btn btn-success" onClick={(e)=>{addNewAction({title: "", text: ""})}}>Add Action</button>
                {actions.map((value, index)=>{
                    return <ActionCard key={index} sendActionData={modifyAction} index={index} value={value}></ActionCard>
                })}
        </div>
    )
}
export default Actions;