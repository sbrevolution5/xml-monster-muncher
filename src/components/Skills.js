import React, {Component} from 'react';
class Skills extends Component{
    render(){

        const skillList = ["Acrobatics", "AnimalHandling", "Arcana", "Athletics", "Deception", "Endurance", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "SleightOfHand", "Stealth", "Survival"]
        return(
            <div>
                {skillList.map((value,index)=>{
                    return(
                        <div className="form-check">
                          <label className="form-check-label" for={value + "Box"}>
                            <input type="checkbox" className="form-check-input" name="" id={value + "Box"} value="checkedValue" />
                            {value}
                          </label>
                          <div className="form-group">
                            <label for={value+"Mod"}></label>
                            <input type="text" className="form-control" name="" id={value+"Mod"} aria-describedby="helpId" placeholder="+0"/>
                            <small id="helpId" className="form-text text-muted">Mod value, ex. +4</small>
                          </div>
                        </div>
                    )
                })}
            </div>
        )

    }
}
export default Skills