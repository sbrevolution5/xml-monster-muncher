import React, {Component} from 'react';
class Skills extends Component{
    render(){

        const skillList = ["Acrobatics", "AnimalHandling", "Arcana", "Athletics", "Deception", "Endurance", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "SleightOfHand", "Stealth", "Survival"]
        return(
            <div>
                {skillList.map((value,index)=>{
                    return(
                        <div class="form-check">
                          <label class="form-check-label" for={value + "Box"}>
                            <input type="checkbox" class="form-check-input" name="" id={value + "Box"} value="checkedValue" />
                            {value}
                          </label>
                          <div class="form-group">
                            <label for={value+"Mod"}></label>
                            <input type="text" class="form-control" name="" id={value+"Mod"} aria-describedby="helpId" placeholder="+0"/>
                            <small id="helpId" class="form-text text-muted">Mod value, ex. +4</small>
                          </div>
                        </div>
                    )
                })}
            </div>
        )

    }
}
export default Skills