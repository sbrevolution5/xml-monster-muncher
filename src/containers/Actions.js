import {Component} from 'react';
import ActionCard from '../components/ActionCard'
export default class Actions extends Component{
    render(){
        return(
            <div>
                <button type="button" class="btn btn-success">Add Action</button>
                <ActionCard></ActionCard>
            </div>
        )
    }
}