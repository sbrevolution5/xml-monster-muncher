import  React, { Component } from 'react';

class Saves extends Component{
    handleBoxChecked = (e)=>{

    }
    render(){
        const saveThrows=["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
        return(
            <div>
                {saveThrows.map((value,index)=>{
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
export default Saves;