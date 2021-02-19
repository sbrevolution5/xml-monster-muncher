//import problem for some reason it is not exported, currently putting in this file
//import { toXML } from "../devLogic/export.js";
import './output.css'
const toXML = (stateObject) => {
    //BUG printing commas for every skill or every save, not just the ones entered
    // need a length of which keys have values.  
    const commaAdd = (index, length)=>{
        if (index < length - 1){
            xmlDocumentString +=',';
        }
    }
    const updateSkill = (skillName, index, length) => {
        if (stateObject.skills[skillName]) {
            xmlDocumentString += skillName + " " + stateObject.skills[skillName]
        } //plus possible comma? if its not the last element.
        commaAdd(index, length)
    }
    const updateSave = (saveName, index, length) => {
        if (stateObject.savingThrows[saveName]) {
            xmlDocumentString += saveName + " " + stateObject.savingThrows[saveName]
        }
        commaAdd(index, length)
    }
    const saveList = Object.keys(stateObject.savingThrows)
    console.log(saveList)
    const skillList = Object.keys(stateObject.skills)
    const damageList = Object.keys(stateObject.DamageTypes)
    console.log(skillList)
    let xmlDocumentString = "";
    xmlDocumentString += "<monster>\n"
    if (stateObject.name) {
        xmlDocumentString += "\t<name>" + stateObject.name + "\t</name>\n"
    } /*else {
        console.error("no name given");
    }*/
    if (stateObject.size) {
        xmlDocumentString += "\t<size>" + stateObject.size + "</size>\n"
    }
    if (stateObject.type) {
        xmlDocumentString += "\t<type>" + stateObject.type + "</type>\n"
    }
    if (stateObject.alignment) {
        xmlDocumentString += "\t<alignment>" + stateObject.alignment + "</alignment>\n"
    }
    if (stateObject.ac) {
        xmlDocumentString += "\t<ac>" + stateObject.ac + "</ac>\n"
    }
    if (stateObject.hp) {
        xmlDocumentString += "\t<hp>" + stateObject.hp + "</hp>\n"
    }
    if (stateObject.speed) {
        xmlDocumentString += "\t<speed>" + stateObject.speed + "</speed>\n"
    }
    if (stateObject.stats.str) {
        xmlDocumentString += "\t<str>" + stateObject.stats.str + "</str>\n"
    }
    if (stateObject.stats.dex) {
        xmlDocumentString += "\t<dex>" + stateObject.stats.dex + "</dex>\n"
    }
    if (stateObject.stats.con) {
        xmlDocumentString += "\t<con>" + stateObject.stats.con + "</con>\n"
    }
    if (stateObject.stats.int) {
        xmlDocumentString += "\t<int>" + stateObject.stats.int + "</int>\n"
    }
    if (stateObject.stats.wis) {
        xmlDocumentString += "\t<wis>" + stateObject.stats.wis + "</wis>\n"
    }
    if (stateObject.stats.cha) {
        xmlDocumentString += "\t<cha>" + stateObject.stats.cha + "</cha>\n"
    }

    //if there are any saves, open saves tag
    if (Object.keys(stateObject.savingThrows).some(function (k) { return stateObject.savingThrows[k] })) {
        xmlDocumentString += "\t<saves>"
        //for each saving throw, if its there, print the abbreviated stat, a space, and the modifier, 
        //Todo I think they must be comma separated
        //abstract into updateSave function
        //THIS ONLY PRINTS 5 COMMAS?!
        saveList.map((value, index) =>{
            return updateSave(value, index, saveList.length)
        })
        // if (stateObject.savingThrows.str) {
        //     xmlDocumentString += "Str " + stateObject.savingThrows.str + " "
        // }
        // commaAdd()
        // if (stateObject.savingThrows.dex) {
        //     xmlDocumentString += "Dex " + stateObject.savingThrows.dex + " "
        // }
        // if (stateObject.savingThrows.con) {
        //     xmlDocumentString += "Con " + stateObject.savingThrows.con + " "
        // }
        // if (stateObject.savingThrows.int) {
        //     xmlDocumentString += "Int " + stateObject.savingThrows.int + " "
        // }
        // if (stateObject.savingThrows.wis) {
        //     xmlDocumentString += "Wis " + stateObject.savingThrows.wis + " "
        // }
        // if (stateObject.savingThrows.cha) {
        //     xmlDocumentString += "Cha " + stateObject.savingThrows.cha + " "
        // }
        //close saves tag
        xmlDocumentString += "</saves>\n"
    }
    //same with skills
    if (Object.keys(stateObject.skills).some(function (k) { return stateObject.skills[k] })) {
        xmlDocumentString += "\t<skills>"
        skillList.map((value, index) => {
            return updateSkill(value, index, skillList.length)
        })
        xmlDocumentString += "</skills>\n"
    }
    if (Object.keys(stateObject.DamageTypes).some(function (k) { return stateObject.DamageTypes[k] == "resist" })) {
        xmlDocumentString += "\t<resist>"
        damageList.map((damageName) => {
            if (stateObject.DamageTypes[damageName] == "resist") {
                xmlDocumentString += damageName + " "
            }
        })
        xmlDocumentString += "</resist>\n"
    }
    if (Object.keys(stateObject.DamageTypes).some(function (k) { return stateObject.DamageTypes[k] == "immune" })) {
        xmlDocumentString += "\t<immune>"
        damageList.map((damageName) => {
            console.log(damageName, " checked for immune")
            if (stateObject.DamageTypes[damageName] == "immune") {
                xmlDocumentString += damageName + " "
            }
        })
        xmlDocumentString += "</immune>\n"
    }
    if (Object.keys(stateObject.DamageTypes).some(function (k) { return stateObject.DamageTypes[k] == "vulnerable" })) {
        xmlDocumentString += "\t<vulnerable>";
        let damageList = Object.keys(stateObject.DamageTypes)
        damageList.map((damageName) => {
            if (stateObject.DamageTypes[damageName] == "vulnerable") {
                xmlDocumentString += damageName + " "
            }
        })
        xmlDocumentString += "</vulnerable>\n"
    }

    if (stateObject.senses) {
        xmlDocumentString += "\t<senses>" + stateObject.senses + "</senses>\n"
    }
    if (stateObject.passive) {
        xmlDocumentString += "\t<passive>" + stateObject.passive + "</passive>\n"
    }
    if (stateObject.languages) {
        xmlDocumentString += "\t<languages>" + stateObject.languages + "</languages>\n"
    }
    if (stateObject.cr) {
        xmlDocumentString += "\t<cr>" + stateObject.cr + "</cr>\n"
    }
    //traits actions and legendary?
    if (stateObject.traits.length > 0) {
        for (let i = 0; i < stateObject.traits.length; i++) {
            const element = stateObject.traits[i];
            xmlDocumentString += "\t<trait>\n\t\t<name>" + element.title + "</name>\n\t\t<text>" + element.text + "</text>\n\t</trait>\n"

        }
    }
    if (stateObject.actions.length > 0) {
        for (let i = 0; i < stateObject.actions.length; i++) {
            const element = stateObject.actions[i];
            xmlDocumentString += "\t<action>\n\t\t<name>" + element.title + "</name>\n\t\t<text>" + element.text + "</text>\n\t</action>\n"

        }
    }
    if (stateObject.legendaryActions.length > 0) {
        for (let i = 0; i < stateObject.legendaryActions.length; i++) {
            const element = stateObject.legendaryActions[i];
            xmlDocumentString += "\t<legendary>\n\t\t<name>" + element.title + "</name>\n\t\t<text>" + element.text + "</text>\n\t</legendary>\n"
        }
    }
    //finish xml by closing monster tag
    xmlDocumentString += "</monster>"
    console.log(xmlDocumentString)
    return xmlDocumentString;
    //do stuff with it now!
}

const Output = ({ state }) => {
    const outputString = toXML(state);
    return (
        <div className="jumbotron bg-dark text-light">
            <h1 className="display-3">Output:</h1>
            <p className="output-text" style={{ whiteSpace: "pre-wrap" }}>{outputString}</p>
        </div>

    )
}
export default Output;