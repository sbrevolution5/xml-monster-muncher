//THIS IS CURRENTLY COPIED FROM CARD, NEEDS TO BE GENERIC
import {Component, useState, useEffect} from 'react';
import OneCard from '../components/OneCard'
const CardSet=({sendData, type})=> {
    const [cards, setCards] = useState([{}])
    const addNewCard = (data)=>{
        setCards([...cards, data])
    }
    // problem: there are 2 ways to edit state, one that adds a "blank" card card, and another that updates the content of that state based on the changes in the card, or removes the card if the remove button was (clicked and confirmed?).  
    const modifyCard = (data, index)=>{
        let newCards = [...cards]
        newCards[index] = data
        setCards([...newCards])//TODO
    }
    const cardDeleter=(index)=>{
        let cardGroup = [...cards]
        cardGroup.splice(index,1);
        console.log(cardGroup);
        setCards(cardGroup);
        }
    const callBackMethod=(value)=>{
        sendData(type, value);
    }
    useEffect(()=>{callBackMethod(cards)}, [cards])

    return(
        <div>
            <button type="button" className="btn btn-success" onClick={(e)=>{addNewCard({title: "", text: ""})}}>Add {type}</button>
             <div className="card-deck">
                
                {cards.map((value, index)=>{
                    return (
                        <OneCard type={type} key={index} sendCardData={modifyCard} eleindex={index} value={value} remove={cardDeleter}></OneCard>
                        )
                    })}
                </div>
        </div>
    )
}
export default CardSet;