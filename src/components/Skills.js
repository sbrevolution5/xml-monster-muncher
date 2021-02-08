import React, {Component} from 'react';
class Skills extends Component{
    render(){

        const skillList = ["Acrobatics", "AnimalHandling", "Arcana", "Athletics", "Deception", "Endurance", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "SleightOfHand", "Stealth", "Survival"]
        return(
            <div>
                {skillList.map((value,index)=>{
                    return(
                        <div className="form-inline">
                        <div className="form-check row col-sm-12">
                          <label className="form-check-label" for={value + "Box"}>
                            <input type="checkbox" className="form-check-input col-sm-6" name="" id={value + "Box"} value="checkedValue" />
                            {value}
                          </label>
                            <input type="text" className="form-control col-xs-1 bg-dark" name="" id={value+"Mod"} aria-describedby="helpId" placeholder="+0"/>
                        </div>
                        </div>
                    )
                })}
            </div>
        )

    }
}
export default Skills