//used to denote all available damage types, for immunity/vulnerability/resistance
//should this be one section with 3 checkboxes for each type?  alternative takes up a lot of space.  
//currently only one box per type

//sending back array of 3 objects,
import React, { useState, useEffect } from 'react'

const DamageTypes = ({ sendData }) => {
    const [slashing, setSlashing] = useState("none")
    const [piercing, setPiercing] = useState("none")
    const [bludgeoning, setBludgeoning] = useState("none")
    const [poison, setPoison] = useState("none")
    const [acid, setAcid] = useState("none")
    const [fire, setFire] = useState("none")
    const [cold, setCold] = useState("none")
    const [radiant, setRadiant] = useState("none")
    const [necrotic, setNecrotic] = useState("none")
    const [lightning, setLightning] = useState("none")
    const [thunder, setThunder] = useState("none")
    const [force, setForce] = useState("none")
    const [psychic, setPsychic] = useState("none")
    const [nonmagical, setNonmagical] = useState("none")
    const typeList = ["Slashing", "Piercing", "Bludgeoning", "Poison", "Acid", "Fire", "Cold", "Radiant", "Necrotic", "Lightning", "Thunder", "Force", "Psychic", "Nonmagical"];
    const setDamage = [setSlashing, setPiercing, setBludgeoning, setPoison, setAcid, setFire, setCold, setRadiant, setNecrotic, setLightning, setThunder, setForce, setPsychic, setNonmagical];
    const callBackMethod = (value) => {
        sendData(value);
    }
    useEffect(() => {
        callBackMethod({
            Slashing: slashing,
            Piercing: piercing,
            Bludgeoning: bludgeoning,
            Poison: poison,
            Acid: acid,
            Fire: fire,
            Cold: cold,
            Radiant: radiant,
            Necrotic: necrotic,
            Lightning: lightning,
            Thunder: thunder,
            Force: force,
            Psychic: psychic,
            Nonmagical: nonmagical,
        })
    }, [slashing, piercing, bludgeoning, poison, acid, fire, cold, radiant, necrotic, lightning, thunder, force, psychic, nonmagical])
    return (
        <div className="form-group row">
            {typeList.map((value, index) => {
                return (
                    <div className="form-check form-check-inline" key={index} id={value+"Radio"} onChange={(e) => { setDamage[index](e.target.value) }}>
                        <label className="form-check-label" htmlFor={value + "Box"}>
                            {value}
                        </label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name={"inlineRadioOptions"+value} id={value + "inlineRadio1"} value="none" defaultChecked></input>
                            <label className="form-check-label" htmlFor="inlineRadio1"><i className="fa fa-fist-raised" aria-hidden="true"></i></label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name={"inlineRadioOptions"+value} id={value + "inlineRadio2"} value="resistant"></input>
                            <label className="form-check-label" htmlFor="inlineRadio2">R</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name={"inlineRadioOptions"+value} id={value + "inlineRadio3"} value="immune"></input>
                            <label className="form-check-label" htmlFor="inlineRadio3">I</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name={"inlineRadioOptions"+value} id={value + "inlineRadio4"} value="vulnerable"></input>
                            <label className="form-check-label" htmlFor="inlineRadio4">V</label>
                        </div>


                    </div>
                )
            })}
        </div>
    )
}
export default DamageTypes