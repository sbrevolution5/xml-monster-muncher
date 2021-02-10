import Conditions from '../components/Conditions';
import DamageTypes from '../components/DamageTypes';
import Saves from '../components/Saves';
import Skills from '../components/Skills';
import Stats from '../components/stats';
import Traits from './Traits';
import Actions from './Actions';
import ChallengeRating from '../components/ChallengeRating';
const { render } = require("@testing-library/react")
const { Component } = require("react")

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            stats: {
                str: 10,
                dex: 10,
                con: 10,
                int: 10,
                wis: 10,
                cha: 10,
            },
            hp: '',
            ac: '',
            languages: '',
            size: '',
            alignment: '',
            speed: '',
            challengeRating: '',
            // we may not need the checked value for saving throws, as if it is blank, it won't be added
           // the same probably goes for skills, an empty string will signify it not working
            savingThrows: {
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
            skills: {
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
            conditionImmunities: {
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
            traits: [],
            actions: [],
            description: "",
            environment: ""


        }
        this.handleChange = this.handleChange.bind(this);
        this.render = this.render.bind(this);
        this.getDataFromStats = this.getDataFromStats.bind(this);
        this.getDataFromSaves = this.getDataFromSaves.bind(this);
        this.getDataFromSkills = this.getDataFromSkills.bind(this);
        this.getDataFromDamageTypes = this.getDataFromDamageTypes.bind(this)
    }
    //gets data sent from stats via prop, assigns to state.stats
    getDataFromStats(data) {
        this.setState({stats: data})
    }
    getDataFromSaves(data) {
        this.setState({savingThrows: data})
    }
    getDataFromSkills(data) {
        this.setState({skills: data})
    }
    getDataFromDamageTypes(data) {
        //this one will need some data processing
    }
    getDataFromChallengeRating(data){
        this.setState({challengeRating: data});
    }
    //overwrites value in state for each element.
    handleChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form>
                <div className="form-group row">
                    <div className="col-sm-4">
                        <label htmlFor="nameInput">Name</label>
                        <input type="text" id="nameInput" placeholder="creature name" name="name" value={this.state.name} onChange={this.handleChange} className="form-control bg-dark" />
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="typeInput">Type</label>
                        <input type="text" id="typeInput" placeholder="Humanoid, monstrosity, etc" name="type" value={this.state.type} onChange={this.handleChange} className="form-control bg-dark"></input>
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="sizeInput">Size</label>
                        <input type="text" id="sizeInput" placeholder="Small, Medium, Large, Huge" name="size" value={this.state.size} onChange={this.handleChange} className="form-control bg-dark"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-4">
                        <label htmlFor="alignmentInput">Alignment</label>
                        <input type="text" id="alignmentInput" placeholder="Lawful good, neutral evil, ect." name="alignment" value={this.state.alignment} onChange={this.handleChange} className="form-control bg-dark"></input>
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="hpInput">hp</label>
                        <input type="text" id="hpInput" placeholder="optional: can be done automatically from stats" name="hp" value={this.state.hp} onChange={this.handleChange} className="form-control bg-dark"></input>
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="armorInput">AC</label>
                        <input type="text" id="armorInput" placeholder="12, light armor" name="ac" value={this.state.ac} onChange={this.handleChange} className="form-control bg-dark"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-4">
                        <label htmlFor="speedInput">Speed</label>
                        <input type="text" id="speedInput" placeholder=" walk 30 ft., fly 50 ft. " name="speed" value={this.state.speed} onChange={this.handleChange} className="form-control bg-dark"></input>
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="nameInput">Languages</label>
                        <input type="text" id="nameInput" placeholder="Common, Elvish, Abyssal." name="languages" value={this.state.languages} onChange={this.handleChange} className="form-control bg-dark"></input>
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="senseInput"> Senses </label>
                        <input type="text" id="senseInput" placeholder="Darkvision 60 ft." name="Senses" value={this.state.Senses} onChange={this.handleChange} className="form-control bg-dark"></input>
                    </div>
                </div>
                <ChallengeRating state={this.state} value={this.state.stats} sendData={this.getDataFromChallengeRating}></ChallengeRating>
                <hr></hr>
                {/* This.handlechange will be executed from within stats each method within needs to use it.  It will be passed the state to update the displayed value.  alternatively, what if Stats had a value prop, which equals state.stats
                
                sendData should be child object
                */}
                <Stats state={this.state} value={this.state.stats} sendData={this.getDataFromStats}></Stats>
                <div>
                    <label>
                        Saving Throws
                    </label>
                    <Saves onChange={this.handleChange} state={this.state}></Saves>
                </div>
                <div>
                    <label>
                        Skills
                    </label>
                    <Skills onChange={this.handleChange} state={this.state}></Skills>
                </div>
                passive Perception calculated by 10+perception(Wis)
                challenge rating
                <div>
                    <label>
                        <i className="fa fa-fist-raised" aria-hidden="true"></i>= normal, R= Resistance, I= immunity, V=Vulnerability
                    </label>
                    <DamageTypes onChange={this.handleChange} state={this.state}></DamageTypes>
                </div>
                <div>
                    <label>
                        Condition Immunities
                    </label>
                    <Conditions onChange={this.handleChange} state={this.state}></Conditions>
                </div>
                <h3>Traits</h3>
                <Traits onChange={this.handleChange} state={this.state}></Traits>
                <h3>Actions</h3>
                <Actions onChange={this.handleChange} state={this.state}></Actions>
                <div>
                    <div className="form-group">
                        <label htmlFor="description"></label>
                        <textarea className="form-control" name="description" id="description" rows="3" placeholder="relevant description here" ></textarea>
                        {/* commented out because it broke rendering in textarea onChange={this.handleChange} value={this.state.description}*/}
                    </div>
                </div>
                <div className="">
                    <label htmlFor="environmentInput"> Environment </label>
                    <input type="text" id="senseInput" placeholder="Mountain, hills, etc." name="environment" value={this.state.environment} onChange={this.handleChange} className="form-control bg-dark"></input>
                </div>
            </form>
        )
    }
}
export default Form;