import {Component, useState, useEffect} from 'react';
import TraitCard from '../components/TraitCard'
const Traits=({sendData})=> {
    const [traits, setTraits] = useState([{}])
    const addNewTrait = (data)=>{
        setTraits([...traits, data])
    }
    // problem: there are 2 ways to edit state, one that adds a "blank" trait card, and another that updates the content of that state based on the changes in the card, or removes the card if the remove button was (clicked and confirmed?).  
    const modifyTrait = ()=>{
        //find trait in state using..... index? 
        //copy array, removing trait,
        //set state to array with new trait, probably in order
        setTraits([...traits])//TODO
    }
    const cardDeleter=(index)=>{
        let traitGroup = traits.splice(index,1);
        setTraits(traitGroup)
        
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
                        <TraitCard key={index} sendTraitData={modifyTrait} eleIndex={index} value={value} remove={cardDeleter}></TraitCard>
                        )
                    })}
                </div>
        </div>
    )
}
export default Traits;