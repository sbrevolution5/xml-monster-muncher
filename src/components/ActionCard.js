import { Component, useState, useEffect } from "react";
const ActionCard = ({sendActionData, eleindex, remove}) => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const callBackMethod=(value)=>{
        sendActionData(value);
    }
    useEffect(()=>{ callBackMethod({title: title, text: text})}, [title, text])
    return (
        <div>
            {/* remove buton for each card  */}
            <div className="card text-white bg-dark mb-3 d-inline-block">
                <div className="card-header"><input type="text" className="form-control bg-dark text-light" name="title" id="actionTitle" aria-describedby="helpId" placeholder="" onChange={(e)=>{setTitle(e.target.value)}}/></div>
                <small id="helpId" className="form-text text-muted" >Name of action</small>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="actionDescription"></label>
                        <textarea className="form-control bg-dark text-light" name="description" id="actionDescription" placeholder="describe action here" rows="3" onChange={(e)=>{setText(e.target.value)}}></textarea>
                    </div>
                    <button type="button" className="btn btn-danger" eleindex={eleindex} onClick={(e)=>{remove(e.target.eleindex)}}>Remove Action</button>
                </div>
            </div>
        </div>
    )
}
export default ActionCard