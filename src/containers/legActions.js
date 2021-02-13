import {Component, useState, useEffect} from 'react';
import ActionCard from '../components/ActionCard'
const Legactions=({sendData})=> {
    const [legactions, setLegactions] = useState([{}])
    const addNewLegAction = (data)=>{
        setLegactions([...legactions, data])
    }
    // problem: there are 2 ways to edit state, one that adds a "blank" action card, and another that updates the content of that state based on the changes in the card, or removes the card if the remove button was (clicked and confirmed?).  
    const modifyLegAction = (data, index)=>{
        let newLegactions = [...legactions]
        newLegactions[index] = data
        setLegactions([...newLegactions])//TODO
    }
    const cardDeleter=(index)=>{
        let legActionGroup = [...legactions]
        legActionGroup.splice(index,1);
        console.log(legActionGroup);
        setLegactions(legActionGroup);
        }
    const callBackMethod=(value)=>{
        sendData("legActions", value);
    }
    useEffect(()=>{callBackMethod(legactions)}, [legactions])

    return(
        <div>
            <button type="button" className="btn btn-success" onClick={(e)=>{addNewAction({title: "", text: ""})}}>Add Action</button>
             <div className="card-deck">
                
                {legactions.map((value, index)=>{
                    return (
                        <ActionCard key={index} sendActionData={modifyAction} eleindex={index} value={value} remove={cardDeleter}></ActionCard>
                        )
                    })}
                </div>
        </div>
    )
}
export default Legactions;