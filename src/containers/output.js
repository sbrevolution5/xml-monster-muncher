//import problem for some reason it is not exported, currently putting in this file
//import { toXML } from "../devLogic/export.js";
const toXML = (stateObject) => {
    const updateSkill = (skillName) => {
        if (stateObject.skills[skillName]) {
            xmlDocumentString += skillName + " " + stateObject.skills[skillName] //plus possible comma?
        }
    }
    const skillList = Object.keys(stateObject.skills)
    const damageList = Object.keys(stateObject.DamageTypes)
    console.log(skillList)
    let xmlDocumentString = "";
    xmlDocumentString += "<monster>\n"
    if (stateObject.name) {
        xmlDocumentString += "<name>" + stateObject.name + "</name>\n"
    } /*else {
        console.error("no name given");
    }*/
    if (stateObject.size) {
        xmlDocumentString += "<size>" + stateObject.size + "</size>\n"
    }
    if (stateObject.type) {
        xmlDocumentString += "<type>" + stateObject.type + "</type>\n"
    }
    if (stateObject.alignment) {
        xmlDocumentString += "<alignment>" + stateObject.alignment + "</alignment>\n"
    }
    if (stateObject.ac) {
        xmlDocumentString += "<ac>" + stateObject.ac + "</ac>\n"
    }
    if (stateObject.hp) {
        xmlDocumentString += "<hp>" + stateObject.hp + "</hp>\n"
    }
    if (stateObject.speed) {
        xmlDocumentString += "<speed>" + stateObject.speed + "</speed>\n"
    }
    if (stateObject.stats.str) {
        xmlDocumentString += "<str>" + stateObject.stats.str + "</str>\n"
    }
    if (stateObject.stats.dex) {
        xmlDocumentString += "<dex>" + stateObject.stats.dex + "</dex>\n"
    }
    if (stateObject.stats.con) {
        xmlDocumentString += "<con>" + stateObject.stats.con + "</con>\n"
    }
    if (stateObject.stats.int) {
        xmlDocumentString += "<int>" + stateObject.stats.int + "</int>\n"
    }
    if (stateObject.stats.wis) {
        xmlDocumentString += "<wis>" + stateObject.stats.wis + "</wis>\n"
    }
    if (stateObject.stats.cha) {
        xmlDocumentString += "<cha>" + stateObject.stats.cha + "</cha>\n"
    }

    //if there are any saves, open saves tag
    if (Object.keys(stateObject.savingThrows).some(function (k) { return stateObject.savingThrows[k] })) {
        xmlDocumentString += "<saves>"
        //for each saving throw, if its there, print the abbreviated stat, a space, and the modifier, 
        //Todo I think they must be comma separated
        if (stateObject.savingThrows.str) {
            xmlDocumentString += "Str " + stateObject.savingThrows.str
        }
        if (stateObject.savingThrows.dex) {
            xmlDocumentString += "Dex " + stateObject.savingThrows.dex
        }
        if (stateObject.savingThrows.con) {
            xmlDocumentString += "Con " + stateObject.savingThrows.con
        }
        if (stateObject.savingThrows.int) {
            xmlDocumentString += "Int " + stateObject.savingThrows.int
        }
        if (stateObject.savingThrows.wis) {
            xmlDocumentString += "Wis " + stateObject.savingThrows.wis
        }
        if (stateObject.savingThrows.cha) {
            xmlDocumentString += "Cha " + stateObject.savingThrows.cha
        }
        //close saves tag
        xmlDocumentString += "</saves>\n"
    }
    //same with skills
    if (Object.keys(stateObject.skills).some(function (k) { return stateObject.skills[k] })) {
        xmlDocumentString += "<skills>"
        skillList.map((value, index) => {
            return updateSkill(value)
        })
        xmlDocumentString += "</skills>\n"
    }
    if (Object.keys(stateObject.DamageTypes).some(function (k) { return stateObject.DamageTypes[k] == "resist" })) {
        xmlDocumentString += "<resist>"
        damageList.map((damageName) => {
            if (stateObject.DamageTypes[damageName]=="resist") {
                xmlDocumentString += damageName + " "
            }
        })
        xmlDocumentString += "</resist>\n"
    }
    if (Object.keys(stateObject.DamageTypes).some(function (k) { return stateObject.DamageTypes[k] == "immune" })) {
        xmlDocumentString += "<immune>"
        damageList.map((damageName) => {
            console.log(damageName, " checked for immune")
            if (stateObject.DamageTypes[damageName]=="immune") {
                xmlDocumentString += damageName + " "
            }
        })
        xmlDocumentString += "</immune>\n"
    }
    if (Object.keys(stateObject.DamageTypes).some(function (k) { return stateObject.DamageTypes[k] == "vulnerable" })) {
        xmlDocumentString += "<vulnerable>";
        let damageList = Object.keys(stateObject.DamageTypes)
        damageList.map((damageName) => {
            if (stateObject.DamageTypes[damageName]=="vulnerable") {
                xmlDocumentString += damageName + " "
            }
        })
        xmlDocumentString += "</vulnerable>\n"
    }
    //also res,immune, and vuln

    if (stateObject.senses) {
        xmlDocumentString += "<senses>" + stateObject.senses + "</senses>\n"
    }
    if (stateObject.passive) {
        xmlDocumentString += "<passive>" + stateObject.passive + "</passive>\n"
    }
    if (stateObject.languages) {
        xmlDocumentString += "<languages>" + stateObject.languages + "</languages>\n"
    }
    if (stateObject.cr) {
        xmlDocumentString += "<cr>" + stateObject.cr + "</cr>\n"
    }
    //traits actions and legendary?
    if (stateObject.traits.length > 0){
        for (let i = 0; i < stateObject.traits.length; i++) {
            const element = stateObject.traits[i];
            xmlDocumentString+= "<trait>\n<name>" + element.title + "</name>\n<text>" + element.text +"</text>\n</trait>\n"
            
        }
    }
    if (stateObject.actions.length > 0){
        for (let i = 0; i < stateObject.actions.length; i++) {
            const element = stateObject.actions[i];
            xmlDocumentString+= "<action>\n<name>" + element.title + "</name>\n<text>" + element.text +"</text>\n</action>\n"
            
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
            <p style={{ whiteSpace: "pre-wrap" }}>{outputString}</p>
        </div>

    )
}
export default Output;