import { Component } from "react";

// should be collapsable, with a number to show how many conditions are checked while it is collapsed. 
class Conditions extends Component{
    render(){
        const conditionList = ["Blinded", "Charmed", "Deafened", "Exhaustion", "Frightened", "Grappled", "Incapacitated", "Invisible", "Paralyzed", "Petrified", "Poisoned", "Prone", "Restrained", "Stunned", "Unconscious",]
        return(
        <div>
            <h4>Condition Immunities</h4>
        </div>
        )}
}
export default Conditions