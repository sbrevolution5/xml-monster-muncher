//used to denote all available damage types, for immunity/vulnerability/resistance
//should this be one section with 3 checkboxes for each type?  alternative takes up a lot of space.  
//currently only one box per type
import React, { Component } from 'react'

class DamageTypes extends Component {
    render() {
        const typeList = ["Slashing", "Piercing", "Bludgeoning", "Poison", "Acid", "Fire", "Cold", "Radiant", "Necrotic", "Lightning", "Thunder", "Force", "Psychic"];
        return (
            <div className="form-group row">
                {typeList.map((value, index) => {
                    return (
                        <div className="form-check">
                            <label className="form-check-label" for={value + "Box"}>
                                {value}
                            </label>
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-secondary active">
                                    <input type="radio" name="options" id="option1" autocomplete="off" checked=""/> 
                                </label>
                                <label class="btn btn-secondary">
                                    <input type="radio" name="options" id="option2" autocomplete="off" /> R
                                </label>
                                <label class="btn btn-secondary">
                                    <input type="radio" name="options" id="option3" autocomplete="off" /> I
                                </label>
                                <label class="btn btn-secondary">
                                    <input type="radio" name="options" id="option4" autocomplete="off" /> V
                                </label>
                            </div>

                        </div>
                    )
                })}
            </div>
        )
    }

}
export default DamageTypes