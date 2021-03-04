import Conditions from '../components/Conditions';
import DamageTypes from '../components/DamageTypes';
import Saves from '../components/Saves';
import Skills from '../components/Skills';
import Stats from '../components/stats';
import ChallengeRating from '../components/ChallengeRating';
import Output from './output';
import './form.css'
import ls from 'local-storage';
import CardSet from './Cardset'
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
            cr: '',
            senses: '',
            passive: '',
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
            DamageTypes: {
                Slashing: "none",
                Piercing: "none",
                Bludgeoning: "none",
                Poison: "none",
                Acid: "none",
                Fire: "none",
                Cold: "none",
                Radiant: "none",
                Necrotic: "none",
                Lightning: "none",
                Thunder: "none",
                Force: "none",
                Psychic: "none",
                Nonmagical: "none",
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
            environment: "",
            monsterString: "",

        }
        //used for resetting the form
        this.baseState = this.state
        this.handleChange = this.handleChange.bind(this);
        this.render = this.render.bind(this);
        this.getDataFrom = this.getDataFrom.bind(this);
        this.browserSave = this.browserSave.bind(this);
        this.reset = this.reset.bind(this);
    }
    //gets data sent from stats via prop, assigns to state.stats
    getDataFrom(what, data) {
        
        this.setState({[what]: data})
    }
    //processes elements directly on this component/container
    handleChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    //called when button is pressed
    browserSave() {
        console.log('saved to browser')
        ls.set('state', this.state)
    }

    //when component is about to mount, load state from user's localstorage (if there is one )
    componentDidMount() {

        if (ls.get('state') == false) {
            ls.set('state', JSON.stringify(this.state));
        }
        else {
            this.setState(ls.get('state'));
        }
    }
    // as component unmounts, set local storage, currently not working
    reset() {
        this.setState(this.baseState);
    }
    

    render() {
        return (
            <form>
                <button type="button" name="" id="" onClick={this.browserSave} className="btn btn-primary btn-lg btn-block">Save Current Monster to LocalStorage</button>
                <p className="text-muted">Use this button to save the current form and come back later.  This does not save the monster to the compendium as a whole, please see the bottom of the page for that.</p>
                <button type="button" name="" id="" onClick={this.reset} className="btn btn-danger btn-lg btn-block">Reset entire form</button>
                <p className="text-muted">Resets the inputs on the form, will not affect compendium or saved storage.</p>

                <div className="form-group row text-box-spaced">
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
                <div className="form-group row text-box-spaced">
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
                <div className="form-group row text-box-spaced">
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
                <ChallengeRating value={this.state.stats} sendData={this.getDataFrom}></ChallengeRating>
                <hr></hr>
                <Stats value={this.state.stats} sendData={this.getDataFrom}></Stats>
                <div>
                    <h3>
                        Saving Throws
                    </h3>
                    <Saves onChange={this.handleChange} sendData={this.getDataFrom}></Saves>
                </div>
                <div>
                    <h3>
                        Skills
                    </h3>
                    <Skills sendData={this.getDataFrom}></Skills>
                </div>
                <div>
                    <hr></hr>
                    <h3>Damage types</h3>
                    <label>
                        <i className="fa fa-fist-raised" aria-hidden="true"></i>= normal, R= Resistance, I= immunity, V=Vulnerability
                    </label>
                    <DamageTypes sendData={this.getDataFrom}></DamageTypes>
                </div>
                <div>
                    <h3>
                        Condition Immunities
                    </h3>
                    <Conditions onChange={this.handleChange} sendData={this.getDataFrom}></Conditions>
                </div>
                <h3>Traits</h3>
                <CardSet key="trait" type="trait" statevar="traits" sendData={this.getDataFrom}></CardSet>
                {/* <Traits onChange={this.handleChange} sendData={this.getDataFrom}></Traits> */}
                <h3>Actions</h3>
                <CardSet key="action" type="action" statevar="actions" sendData={this.getDataFrom}></CardSet>

                {/* <Actions onChange={this.handleChange} sendData={this.getDataFrom}></Actions> */}
                <h3>Legendary Actions</h3>
                <CardSet key="LegAction" type="legendary action" statevar="legendaryActions" sendData={this.getDataFrom}></CardSet>

                {/* <LegActions onChange={this.handleChange} sendData={this.getDataFrom}></LegActions> */}
                {/* <div>
                    <div className="form-group">
                        <label htmlFor="description"></label>
                        <textarea className="form-control" name="description" id="description" rows="3" placeholder="relevant description here" ></textarea>
                        {onChange={this.handleChange} value={this.state.description}}
                    </div>
                </div> */}
                <div className="form-group text-box-spaced">
                    <label htmlFor="environmentInput"> Environment </label>
                    <input type="text" id="senseInput" placeholder="Mountain, hills, etc." name="environment" value={this.state.environment} onChange={this.handleChange} className="form-control bg-dark text-light"></input>
                </div>
                <div className="form-group text-box-spaced">
                    <label htmlFor="descriptionInput">Description</label>
                    <textarea className="form-control bg-dark text-light" type="text" id="descriptionInput" name="description" onChange={this.handleChange} placeholder="Flavor text and/or description for your monster."></textarea>

                </div>
                <Output state={this.state} sendData={this.getDataFrom}></Output>
                <button type="button" name="" id="" className="btn btn-primary btn-lg btn-block" onClick={(e)=>{this.props.exportFunction({name: this.state.name, xml:this.state.monsterString})}}>Save to compendium</button>
                <p className="text-muted">Puts current monster in compendium for later export.  (Don't forget to save your compendium!)</p>

            </form>
        )
    }
}
export default Form;