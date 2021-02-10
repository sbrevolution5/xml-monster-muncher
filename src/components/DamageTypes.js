//used to denote all available damage types, for immunity/vulnerability/resistance
//should this be one section with 3 checkboxes for each type?  alternative takes up a lot of space.  
//currently only one box per type

//sending back array of 3 objects,
import React, { useState } from 'react'

const DamageTypes = () => {
    const [vulnerable, setVulnerable] = useState({
        Slashing: false,
        Piercing: false,
        Bludgeoning: false,
        Poison: false,
        Acid: false,
        Fire: false,
        Cold: false,
        Radiant: false,
        Necrotic: false,
        Lightning: false,
        Thunder: false,
        Force: false,
        Psychic: false,
    })
    const [resistance, setResistance] = useState({
        Slashing: false,
        Piercing: false,
        Bludgeoning: false,
        Poison: false,
        Acid: false,
        Fire: false,
        Cold: false,
        Radiant: false,
        Necrotic: false,
        Lightning: false,
        Thunder: false,
        Force: false,
        Psychic: false,
    })
    const [immunity, setImmunity] = useState({
        Slashing: false,
        Piercing: false,
        Bludgeoning: false,
        Poison: false,
        Acid: false,
        Fire: false,
        Cold: false,
        Radiant: false,
        Necrotic: false,
        Lightning: false,
        Thunder: false,
        Force: false,
        Psychic: false,
    })
    const typeList = ["Slashing", "Piercing", "Bludgeoning", "Poison", "Acid", "Fire", "Cold", "Radiant", "Necrotic", "Lightning", "Thunder", "Force", "Psychic"];
    return (
        <div className="form-group row">
            {typeList.map((value, index) => {
                return (
                    <div className="form-check" key={index}>
                        <label className="form-check-label" htmlFor={value + "Box"}>
                            {value}
                        </label>
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-secondary active">
                                <input type="radio" name="options" id="normal" autoComplete="off" defaultChecked /> <i className="fa fa-fist-raised" aria-hidden="true"></i>
                            </label>
                            <label className="btn btn-secondary btn-warning">
                                <input type="radio" name="options" id="resistant" autoComplete="off" /> R
                                </label>
                            <label className="btn btn-secondary btn-danger">
                                <input type="radio" name="options" id="option3" autoComplete="off" /> I
                                </label>
                            <label className="btn btn-secondary btn-info">
                                <input type="radio" name="options" id="option4" autoComplete="off" /> V
                                </label>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}
export default DamageTypes