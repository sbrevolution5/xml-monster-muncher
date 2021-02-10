import {Component, useState, useEffect} from 'react';
import ActionCard from '../components/ActionCard'
const Actions=()=> {
    const [actions, setActions] = useState([])
    const addNewAction = ()=>{

    }
    return(
        <div>
            <button type="button" className="btn btn-success" onClick={addNewAction}>Add Action</button>
            <ActionCard></ActionCard>
        </div>
    )
}
export default Actions;