//used to denote all available damage types, for immunity/vulnerability/resistance
//should this be one section with 3 checkboxes for each type?  alternative takes up a lot of space.  
//currently only one box per type
import React, { Component } from 'react'

class DamageTypes extends Component{
    render(){
        const typeList = ["Slashing", "Piercing", "Bludgeoning", "Poison", "Acid", "Fire", "Cold", "Radiant", "Necrotic", "Lightning", "Thunder", "Force", "Psychic"];
    return(
        <div>
            {typeList.map((value, index)=>{
                return(
                    <div className="form-check">
                      <label className="form-check-label" for={value+"Box"}>
                        {value}
                      </label>
                        <input type="checkbox" className="" name="" id={value+"Resistance"+"Box"} value="checkedValue" />
                        <input type="checkbox" className="" name="" id={value+"Vulnerability"+"Box"} value="checkedValue" />
                        <input type="checkbox" className="" name="" id={value+"Immunity"+"Box"} value="checkedValue" />
                    </div>
                )
            })}
        </div>
    )}

}
export default DamageTypes