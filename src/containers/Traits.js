import {Component, useState, useEffect} from 'react';
import TraitCard from '../components/TraitCard'
const Traits=({sendData})=> {
    const [traits, setTraits] = useState([{}])
    const addNewTrait = (data)=>{
        setTraits([...traits, data])
    }
    // problem: there are 2 ways to edit state, one that adds a "blank" Trait card, and another that updates the content of that state based on the changes in the card, or removes the card if the remove button was (clicked and confirmed?).  
    const modifyTrait = ()=>{
        //find Trait in state using..... index? 
        //copy array, removing Trait,
        //set state to array with new Trait, probably in order
        setTraits([...traits])//TODO
    }
    const callBackMethod=(value)=>{
        sendData(value);
    }
    useEffect(()=>{callBackMethod(traits)}, [traits])

    return(
        <div>
            <button type="button" className="btn btn-success" onClick={(e)=>{addNewTrait({title: "", text: ""})}}>Add Trait</button>
             <div class="card-deck">
                
                {traits.map((value, index)=>{
                    return (
                        <TraitCard key={index} sendTraitData={modifyTrait} index={index} value={value}></TraitCard>
                        )
                    })}
                </div>
        </div>
    )
}
export default Traits;