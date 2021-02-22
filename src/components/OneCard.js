//COPIED FROM TRAITCARD
import { Component, useState, useEffect } from "react";
const TraitCard = ({sendTraitData, eleindex, remove}) => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const callBackMethod=(value, index)=>{
        console.log('sending value: ', value)
        sendTraitData(value, index);
    }
    useEffect(()=>{ callBackMethod({title: title, text: text}, eleindex)}, [title, text])
    return (
        <div>
            {/* remove buton for each card  */}
            <div className="card text-white bg-dark mb-3 d-inline-block">
                <div className="card-header"><input type="text" className="form-control bg-dark text-light" name="title" id="traitTitle" aria-describedby="helpId" placeholder="" onChange={(e)=>{setTitle(e.target.value)}}/></div>
                <small id="helpId" className="form-text text-muted" >Name of trait</small>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="traitDescription"></label>
                        <textarea className="form-control bg-dark text-light" name="description" id="traitDescription" placeholder="describe trait here" rows="3" onChange={(e)=>{setText(e.target.value)}}></textarea>
                    </div>
                    <button type="button" className="btn btn-danger" eleindex={eleindex} onClick={(e)=>{remove(e.target.eleindex)}}>Remove Trait</button>
                </div>
            </div>
        </div>
    )
}
export default TraitCard