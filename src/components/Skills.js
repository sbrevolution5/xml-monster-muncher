import React, {Component, useState, useEffect} from 'react';
const Skills =({sendData})=>{

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
    const [sleightOfHand, setSlightOfHand] = useState("");
    const [stealth, setStealth] = useState("");
    const [survival, setSurvival] = useState("");

    const skillList = ["Acrobatics", "AnimalHandling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "SlightOfHand", "Stealth", "Survival"]
    const skillSet = [setAcrobatics, setAnimalHandling, setArcana, setAthletics, setDeception, setHistory, setInsight, setIntimidation, setInvestigation, setMedicine, setNature, setPerception, setPerformance, setPersuasion, setReligion, setSlightOfHand, setStealth, setSurvival]
    const callBackMethod=(value)=>{
        sendData(value);
    }   
    useEffect(()=>{callBackMethod({Acrobatics: acrobatics, AnimalHandling: animalHandling, Arcana: arcana, Athletics: athletics, Deception: deception, History: history, Insight: insight, Intimidation: intimidation, Investigation: investigation, Medicine: medicine, Nature: nature, Perception: perception, Performance: performance, Persuasion: persuasion, Religion: religion, SlightOfHand: sleightOfHand, Stealth: stealth, Survival: survival})},[acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival])
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
                                    {value}
                                </span>
                                <input type="text" className="form-control col-xs-1 bg-dark" name="" id={value+"Mod"} aria-describedby="helpId" placeholder="+0 (default)" onChange={e=>skillSet[index](e.target.value)}/>
                            </div>
                        </div>
                    // </div>
                )
            })}
        </div>
    )

}
export default Skills