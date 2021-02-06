import Conditions from '../components/Conditions';
import Stats from '../components/stats'
const { render } = require("@testing-library/react")
const { Component } = require("react")

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            type: '',
            stats: {
                str: 10,
                dex: 10,
                con: 10,
                int: 10,
                wis: 10,
                cha: 10
            },
            health: '',
            ac: '',
            languages: '',
            size: '',
            alignment: '',
            speed: '',
            challengeRating: '',
            savingThrows:{
                str: {
                    checked: false,
                    mod: '',
                },
                dex: {
                    checked: false,
                    mod: '',
                },
                con: {
                    checked: false,
                    mod: '',
                },
                int: {
                    checked: false,
                    mod: '',
                },
                wis: {
                    checked: false,
                    mod: '',
                },
                cha: {
                    checked: false,
                    mod: '',
                }
            },
            skills:{
                Athletics: {
                    checked: false,
                    mod: '',
                },
                Acrobatics: {
                    checked: false,
                    mod: '',
                },
                SleightOfHand: {
                    checked: false,
                    mod: '',
                },
                Stealth: {
                    checked: false,
                    mod: '',
                },
                Arcana: {
                    checked: false,
                    mod: '',
                },
                History: {
                    checked: false,
                    mod: '',
                },
                Investigation: {
                    checked: false,
                    mod: '',
                },
                Nature: {
                    checked: false,
                    mod: '',
                },
                Religion: {
                    checked: false,
                    mod: '',
                },
                AnimalHandling: {
                    checked: false,
                    mod: '',
                },
                Insight: {
                    checked: false,
                    mod: '',
                },
                Medicine: {
                    checked: false,
                    mod: '',
                },
                Perception: {
                    checked: false,
                    mod: '',
                },
                Survival: {
                    checked: false,
                    mod: '',
                },
                Deception: {
                    checked: false,
                    mod: '',
                },
                Intimidation: {
                    checked: false,
                    mod: '',
                },
                Performance: {
                    checked: false,
                    mod: '',
                },
                Persuasion: {
                    checked: false,
                    mod: '',
                },
            },
            vulnerabilities: {
                Slashing: false,
                Piercing: false,
                Bludgeoning: false,
                Poison: false,
                Acid: false,
                Fire: false,
                Cold: false,
                Radiant: false,
                Necrotic: false,
                Lightning: false,
                Thunder: false,
                Force: false,
                Psychic: false,
            },
            resistances: {
                Slashing: false,
                Piercing: false,
                Bludgeoning: false,
                Poison: false,
                Acid: false,
                Fire: false,
                Cold: false,
                Radiant: false,
                Necrotic: false,
                Lightning: false,
                Thunder: false,
                Force: false,
                Psychic: false,
            },
            immunities: {
                Slashing: false,
                Piercing: false,
                Bludgeoning: false,
                Poison: false,
                Acid: false,
                Fire: false,
                Cold: false,
                Radiant: false,
                Necrotic: false,
                Lightning: false,
                Thunder: false,
                Force: false,
                Psychic: false,
            },
            conditionImmunities:{
                Blinded: false,
                Charmed: false,
                Deafened: false,
                Exhaustion: false,
                Frightened: false,
                Grappled: false,
                Incapacitated: false,
                Invisible: false,
                Paralyzed: false,
                Petrified: false,
                Poisoned: false,
                Prone: false,
                Restrained: false,
                Stunned: false,
                Unconscious: false,

            },
            traits: {},
            actions: {},
            description: {},

            
        }
    }
    render(){
        return(
            <form>
                <div className="form-group">
                    <label for="nameInput">Name</label>
                    <input type="text" id="nameInput" placeholder="creature name" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label for="typeInput">Type</label>
                    <input type="text" id="typeInput" placeholder="Humanoid, monstrosity, etc" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label for="sizeInput">Size</label>
                    <input type="text" id="sizeInput" placeholder="Small, Medium, Large, Huge" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label for="alignmentInput">Alignment</label>
                    <input type="text" id="alignmentInput" placeholder="Lawful good, neutral evil, ect." className="form-control"></input>
                </div>
                <div className="form-group">
                    <label for="hpInput">hp</label>
                    <input type="text" id="hpInput" placeholder="optional: can be done automatically from stats" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label for="armorInput">AC</label>
                    <input type="text" id="armorInput" placeholder="12, light armor" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label for="speedInput">Speed</label>
                    <input type="text" id="speedInput" placeholder=" walk 30 ft., fly 50 ft. " className="form-control"></input>
                </div>
                <Stats></Stats>
                <div>
                    <label>
                    Saving Throws
                    </label>
                    <p>under construction</p>
                </div>
                <div>
                    <label>
                    Skills
                    </label>
                    <p>under construction</p>
                </div>
                saves all optional, checkbox and modifier for each.
                skills all optional, checkbox and modifier for each.
                passive Perception calculated by 10+perception(Wis)
                <div className="form-group">
                    <label for="nameInput">Languages</label>
                    <input type="text" id="nameInput" placeholder="Common, Elvish, Abyssal." className="form-control"></input>
                </div>
                challenge rating
                <div>
                    <label>
                    Resists
                    </label>
                    <p>under construction</p>
                </div>
                <div>
                    <label>
                    Immunities
                    </label>
                    <p>under construction</p>
                </div>
                <div>
                    <label>
                    Vulnerabilities
                    </label>
                    <p>under construction</p>
                </div>
                <div>
                    <label>
                    Condition Immunities
                    </label>
                    <Conditions></Conditions>
                </div>
                <div>
                    <label for="senseInput">
                    Senses
                    </label>
                    <input type="text" id="senseInput" placeholder="Darkvision 60 ft." className="form-control"></input>
                </div>
                traits
                <p>allow adding of aditional traits,</p>
                actions
                <p>allow adding of additional actions.</p>
                <div>
                    <label for="descriptionInput">
                    description
                    </label>
                    <input type="textbox" id="descriptionInput" placeholder="Lore and interesting descriptors go here" className="b4-text"/>
                </div>
                environment

            </form>
        )
    }
}
export default Form;