import React, {Component} from 'react';
const Skills =()=>{

    const skillList = ["Acrobatics", "AnimalHandling", "Arcana", "Athletics", "Deception", "Endurance", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "SleightOfHand", "Stealth", "Survival"]
    return(
        <div>
            {skillList.map((value,index)=>{
                //does this need a checkbox? lets remove for now
                return(
                    <div className="form-check-inline form-group" key={index}>
                        {/* <div className="form-check row col-sm-12">
                            <input type="checkbox" className="form-check-input col-sm-6" name="" id={value + "Box"} value="checkedValue" /> */}
                        <div className="input-group-prepend">
                        <span className="input-group-text" htmlFor={value + "Box"}>
                            {value}</span>
                            <input type="text" className="form-control col-xs-1 bg-dark" name="" id={value+"Mod"} aria-describedby="helpId" placeholder="+0 (default)"/>
                        </div>
                        </div>
                    // </div>
                )
            })}
        </div>
    )

    }
export default Skills