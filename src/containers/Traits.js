import React, { Component } from 'react';
import TraitCard from '../components/TraitCard';

export default class Traits extends Component{
    //retrieve array of current traits

    render() {
        return (
        <div>
            <button type="button" class="btn btn-success">Add Trait</button>

            <TraitCard></TraitCard>
        </div>
        )
    }
}
