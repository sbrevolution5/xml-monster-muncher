import  React, { Component } from 'react';

class Saves extends Component{
    // handleBoxChecked = (e)=>{

    // }
    render(){
        const saveThrows=["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
        return(
            <div className="form-group row">
                {saveThrows.map((value,index)=>{
                  //no check boxes, empty box means no change from base stats
                    return(
                        <div className="form-check" key={index}>
                          <label className="form-check-label" htmlFor={value + "Box"}>
                            {value}
                          </label>
                          <div className="form-group">
                            <label htmlFor={value+"Mod"}></label>
                            <input type="text" className="form-control bg-dark" name="" id={value+"Mod"} aria-describedby="helpId" placeholder="+0"/>
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