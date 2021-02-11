import { Component, useState} from "react";

// should be collapsable, with a number to show how many conditions are checked while it is collapsed. 
const Conditions = ({sendData}) => {
    const [blinded, setBlinded] = useState(false)
    const [charmed, setCharmed] = useState(false)
    const [deafened, setDeafened] = useState(false)
    const [exhaustion, setExhaustion] = useState(false)
    const [frightened, setFrightened] = useState(false)
    const [grappled, setGrappled] = useState(false)
    const [incapacitated, setIncapacitated] = useState(false)
    const [invisible, setInvisible] = useState(false)
    const [paralyzed, setParalyzed] = useState(false)
    const [poisoned, setPoisoned] = useState(false)
    const [petrified, setPetrified] = useState(false)
    const [prone, setProne] = useState(false)
    const [restrained, setRestrained] = useState(false)
    const [stunned, setStunned] = useState(false)
    const [unconscious, setUnconscious] = useState(false)


    const conditionList = ["Blinded", "Charmed", "Deafened", "Exhaustion", "Frightened", "Grappled", "Incapacitated", "Invisible", "Paralyzed", "Petrified", "Poisoned", "Prone", "Restrained", "Stunned", "Unconscious",]
    const conditionSet = [setBlinded, setCharmed, setDeafened, setExhaustion, setFrightened, setGrappled, setIncapacitated, setInvisible, setParalyzed, setPetrified, setPoisoned, setProne, setRestrained, setStunned, setUnconscious]
    const conditionVar = [blinded, charmed, deafened, exhaustion, frightened, grappled, incapacitated, invisible, paralyzed, petrified, poisoned, prone, restrained, stunned, unconscious]

    return (
        <div className="row">
            {conditionList.map((value, index) => {
                //buttons need to be toggleable!
                return (
                    <div className="form-group-btn" key={index}>
                        <button type="button" className="btn btn-toggle btn-secondary" data-toggle={value + "button"} aria-pressed="false" name="" id={value + "Btn"} value={conditionVar[index]} onClick={(e) => conditionSet[index](!e.target.value)}>
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