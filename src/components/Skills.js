import React, {Component, useState} from 'react';
const Skills =()=>{

    const [acrobatics, setAcrobatics] = useState("");
    const [animalHandling, setAnimalHandling] = useState("");
    const [arcana, setArcana] = useState("");
    const [athletics, setAthletics] = useState("");
    const [deception, setDeception] = useState("");
    const [history, setHistory] = useState("");
    const [insight, setInsight] = useState("");
    const [intimidation, setIntimidation] = useState("");
    const [investigation, setInvestigation] = useState("");
    const [medicine, setMedicine] = useState("");
    const [nature, setNature] = useState("");
    const [perception, setPerception] = useState("");
    const [performance, setPerformance] = useState("");
    const [persuasion, setPersuasion] = useState("");
    const [religion, setReligion] = useState("");
    const [slightOfHand, setslightOfHand] = useState("");
    const [stealth, setStealth] = useState("");
    const [survival, setSurvival] = useState("");
    
    const skillList = ["Acrobatics", "AnimalHandling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "SleightOfHand", "Stealth", "Survival"]
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