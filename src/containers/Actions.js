import {Component, useState, useEffect} from 'react';
import ActionCard from '../components/ActionCard'
const Actions=({sendData})=> {
    const [actions, setActions] = useState([{}])
    const addNewAction = ()=>{
        setActions([...actions, {/*whatever the action template is*/}])
    }
    const callBackMethod=(value)=>{
        sendData(value);
    }
    useEffect(()=>{callBackMethod(actions)}, [actions])
    
    return(
        <div>
            <button type="button" className="btn btn-success" onClick={addNewAction}>Add Action</button>
                {actions.map((value, index)=>{
                    <ActionCard></ActionCard>
                })}
        </div>
    )
}
export default Actions;