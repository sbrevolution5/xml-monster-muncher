const { Component } = require("react")

class Saves extends Component{
    render(){
        const SaveThrows=["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
        return(
            <div>
                {SaveThrows.map((value, index)=>{
                    <div className="form-check">
                        <label className="form-check-label" for={value + "SaveBox"}>
                        <input type="checkbox" className="form-check-input" name="" id={value + "SaveBox"} key={value + "SaveBox"} value="checkedValue" />
                        {value}
                        </label>
                        <div className="form-group">
                        <label for={value+"SaveMod"}></label>
                        <input type="text" className="form-control" name="" id={value+"SaveMod"} key={value+"SaveMod"} aria-describedby="helpId" placeholder="+0"/>
                        <small id="helpId" className="form-text text-muted">Mod value, ex. +4</small>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}
export default Saves;