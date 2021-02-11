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
            senses: '',
            savingThrows: {
                str: '',
                dex: '',
                con: '',
                int: '',
                wis: '',
                cha: '',
            },
            skills: {
                Athletics: '',
                Acrobatics: '',
                SleightOfHand: '',
                Stealth: '',
                Arcana: '',
                History: '',
                Investigation: '',
                Nature: '',
                Religion: '',
                AnimalHandling: '',
                Insight: '',
                Medicine: '',
                Perception: '',
                Survival: '',
                Deception: '',
                Intimidation: '',
                Performance: '',
                Persuasion: '',
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
            legendaryActions: [],
            description: "",
            environment: ""


        }
        this.handleChange = this.handleChange.bind(this);
        this.render = this.render.bind(this);
        this.getDataFromStats = this.getDataFromStats.bind(this);
        this.getDataFromSaves = this.getDataFromSaves.bind(this);
        this.getDataFromSkills = this.getDataFromSkills.bind(this);
        this.getDataFromDamageTypes = this.getDataFromDamageTypes.bind(this)
        this.getDataFromChallengeRating = this.getDataFromChallengeRating.bind(this)
        this.getDataFromActions = this.getDataFromActions.bind(this)
        this.getDataFromConditions = this.getDataFromConditions.bind(this)
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
        //retrieves the array of objects from Damage types component, then sets each part of state to the correct object. 
        this.setState({resistances: data[0], immunities: data[1], vulnerabilities: data[2]})
    }
    getDataFromChallengeRating(data){
        this.setState({challengeRating: data});
    }
    getDataFromActions(data){
        //TODO
        this.setState({actions: data});
    }
    getDataFromTraits(data){
        //TODO
        this.setState({traits: data});
    }
    getDataFromConditions(data){
        this.setState({conditionImmunities: data})
    }
    //processes elements directly on this component/container
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
                        <input type="text" id="nameInput" placeholder="creature name" name="name" value={this.state.name} onChange={this.handleChange} className="form-control bg-dark  text-light" />
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="typeInput">Type</label>
                        <input type="text" id="typeInput" placeholder="Humanoid, monstrosity, etc" name="type" value={this.state.type} onChange={this.handleChange} className="form-control bg-dark text-light"></input>
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="sizeInput">Size</label>
                        <input type="text" id="sizeInput" placeholder="Small, Medium, Large, Huge" name="size" value={this.state.size} onChange={this.handleChange} className="form-control bg-dark text-light"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-4">
                        <label htmlFor="alignmentInput">Alignment</label>
                        <input type="text" id="alignmentInput" placeholder="Lawful good, neutral evil, ect." name="alignment" value={this.state.alignment} onChange={this.handleChange} className="form-control bg-dark text-light"></input>
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="hpInput">hp</label>
                        <input type="text" id="hpInput" placeholder="optional: can be done automatically from stats" name="hp" value={this.state.hp} onChange={this.handleChange} className="form-control bg-dark text-light"></input>
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="armorInput">AC</label>
                        <input type="text" id="armorInput" placeholder="12, light armor" name="ac" value={this.state.ac} onChange={this.handleChange} className="form-control bg-dark text-light"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-4">
                        <label htmlFor="speedInput">Speed</label>
                        <input type="text" id="speedInput" placeholder=" walk 30 ft., fly 50 ft. " name="speed" value={this.state.speed} onChange={this.handleChange} className="form-control bg-dark text-light"></input>
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="nameInput">Languages</label>
                        <input type="text" id="nameInput" placeholder="Common, Elvish, Abyssal." name="languages" value={this.state.languages} onChange={this.handleChange} className="form-control bg-dark text-light"></input>
                    </div>
                    <div className="col-sm-4">
                        <label htmlFor="senseInput"> Senses </label>
                        <input type="text" id="senseInput" placeholder="Darkvision 60 ft." name="senses" value={this.state.senses} onChange={this.handleChange} className="form-control bg-dark text-light"></input>
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
                    <Saves onChange={this.handleChange} state={this.state} sendData={this.getDataFromSaves}></Saves>
                </div>
                <div>
                    <label>
                        Skills
                    </label>
                    <Skills sendData={this.getDataFromSkills}></Skills>
                </div>
                passive Perception calculated by 10+perception(Wis)
                <div>
                    <label>
                        <i className="fa fa-fist-raised" aria-hidden="true"></i>= normal, R= Resistance, I= immunity, V=Vulnerability
                    </label>
                    <DamageTypes state={this.state}></DamageTypes>
                </div>
                <div>
                    <label>
                        Condition Immunities
                    </label>
                    <Conditions onChange={this.handleChange} sendData={this.getDataFromConditions}></Conditions>
                </div>
                <h3>Traits</h3>
                <Traits onChange={this.handleChange} state={this.state} sendData={this.getDataFromTraits}></Traits>
                <h3>Actions</h3>
                <Actions onChange={this.handleChange} state={this.state} sendData={this.getDataFromActions}></Actions>
                {/* <div>
                    <div className="form-group">
                        <label htmlFor="description"></label>
                        <textarea className="form-control" name="description" id="description" rows="3" placeholder="relevant description here" ></textarea>
                        {onChange={this.handleChange} value={this.state.description}}
                    </div>
                </div> */}
                <div className="">
                    <label htmlFor="environmentInput"> Environment </label>
                    <input type="text" id="senseInput" placeholder="Mountain, hills, etc." name="environment" value={this.state.environment} onChange={this.handleChange} className="form-control bg-dark text-light"></input>
                </div>
            </form>
        )
    }
}
export default Form;