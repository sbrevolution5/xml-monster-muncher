import {Component, useState, useEffect} from 'react';
import TraitCard from '../components/TraitCard'
const Traits=({sendData})=> {
    const [traits, setTraits] = useState([{}])
    const addNewTrait = (data)=>{
        setTraits([...traits, data])
    }
    // problem: there are 2 ways to edit state, one that adds a "blank" trait card, and another that updates the content of that state based on the changes in the card, or removes the card if the remove button was (clicked and confirmed?).  
    const modifyTrait = (data, index)=>{
        let newTraits = [...traits]
        newTraits[index] = data
        setTraits([...newTraits])//TODO
    }
    const cardDeleter=(index)=>{
        let traitGroup = [...traits]
        traitGroup.splice(index,1);
        console.log(traitGroup);
        setTraits(traitGroup);
        }
    const callBackMethod=(value)=>{
        sendData("traits", value);
    }
    useEffect(()=>{callBackMethod(traits)}, [traits])

    return(
        <div>
            <button type="button" className="btn btn-success" onClick={(e)=>{addNewTrait({title: "", text: ""})}}>Add Trait</button>
             <div className="card-deck">
                
                {traits.map((value, index)=>{
                    return (
                        <TraitCard key={index} sendTraitData={modifyTrait} eleindex={index} value={value} remove={cardDeleter}></TraitCard>
                        )
                    })}
                </div>
        </div>
    )
}
export default Traits;