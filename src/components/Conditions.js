import { Component } from "react";

// should be collapsable, with a number to show how many conditions are checked while it is collapsed. 
const Conditions = ({sendData}) => {

    const conditionList = ["Blinded", "Charmed", "Deafened", "Exhaustion", "Frightened", "Grappled", "Incapacitated", "Invisible", "Paralyzed", "Petrified", "Poisoned", "Prone", "Restrained", "Stunned", "Unconscious",]


    return (
        <div className="row">
            {conditionList.map((value, index) => {
                //buttons need to be toggleable!
                return (
                    <div className="form-group-btn" key={index}>
                        <button type="button" className="btn btn-toggle btn-secondary" data-toggle={value + "button"} aria-pressed="false" name="" id={value + "Btn"}>
                            {value}
                        </button>
                    </div>
                )
            }
            )}
        </div>
    )
}
export default Conditions