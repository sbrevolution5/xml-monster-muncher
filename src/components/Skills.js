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

    const skillList = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Slight Of Hand", "Stealth", "Survival"]
    const skillSet = [setAcrobatics, setAnimalHandling, setArcana, setAthletics, setDeception, setHistory, setInsight, setIntimidation, setInvestigation, setMedicine, setNature, setPerception, setPerformance, setPersuasion, setReligion, setSlightOfHand, setStealth, setSurvival]
    const callBackMethod=(value)=>{
        sendData("skills", value);
    }   
    useEffect(()=>{callBackMethod({Acrobatics: acrobatics, AnimalHandling: animalHandling, Arcana: arcana, Athletics: athletics, Deception: deception, History: history, Insight: insight, Intimidation: intimidation, Investigation: investigation, Medicine: medicine, Nature: nature, Perception: perception, Performance: performance, Persuasion: persuasion, Religion: religion, SlightOfHand: sleightOfHand, Stealth: stealth, Survival: survival})},[acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival])
    return(
        <div>
            {skillList.map((value,index)=>{
                return(
                    <div className="form-check-inline form-group" key={index}>
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-dark text-light" htmlFor={value + "Box"}>
                                    {value}
                                </span>
                                <input type="text" className="form-control col-xs-1 bg-dark text-light" name="" id={value+"Mod"} aria-describedby="helpId" placeholder="+0 (default)" onChange={e=>skillSet[index](e.target.value)}/>
                            </div>
                        </div>
                    // </div>
                )
            })}
        </div>
    )

}
export default Skills