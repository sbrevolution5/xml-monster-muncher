//import problem for some reason it is not exported, currently putting in this file
//import { toXML } from "../devLogic/export.js";
import './output.css'
import {useState, useEffect} from 'react';

//whenever ANYthing changes, need to update the string in form state
const Output = ({ state, sendData}) => {
    const toXML = (stateObject) => {
        // used to add commas to all but final element.  
        const commaAdd = (index, length) => {
            if (index < length - 1) {
                xmlDocumentString += ', ';
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
        //filters out any keys without a truthy value 
        const saveList = Object.entries(stateObject.savingThrows)
            .filter(([, val]) => val)
            .map(([key]) => key);
        const skillList = Object.entries(stateObject.skills)
            .filter(([, val]) => val)
            .map(([key]) => key);
    
        const damageList = Object.keys(stateObject.DamageTypes)
    
        let xmlDocumentString = "";
        xmlDocumentString += "\t<monster>\n"
        if (stateObject.name) {
            xmlDocumentString += "\t\t<name>" + stateObject.name + "</name>\n"
        } /*else {
            console.error("no name given");
        }*/
        if (stateObject.size) {
            xmlDocumentString += "\t\t<size>" + stateObject.size + "</size>\n"
        }
        if (stateObject.type) {
            xmlDocumentString += "\t\t<type>" + stateObject.type + "</type>\n"
        }
        if (stateObject.alignment) {
            xmlDocumentString += "\t\t<alignment>" + stateObject.alignment + "</alignment>\n"
        }
        if (stateObject.ac) {
            xmlDocumentString += "\t\t<ac>" + stateObject.ac + "</ac>\n"
        }
        if (stateObject.hp) {
            xmlDocumentString += "\t\t<hp>" + stateObject.hp + "</hp>\n"
        }
        if (stateObject.speed) {
            xmlDocumentString += "\t\t<speed>" + stateObject.speed + "</speed>\n"
        }
        if (stateObject.stats.str) {
            xmlDocumentString += "\t\t<str>" + stateObject.stats.str + "</str>\n"
        }
        if (stateObject.stats.dex) {
            xmlDocumentString += "\t\t<dex>" + stateObject.stats.dex + "</dex>\n"
        }
        if (stateObject.stats.con) {
            xmlDocumentString += "\t\t<con>" + stateObject.stats.con + "</con>\n"
        }
        if (stateObject.stats.int) {
            xmlDocumentString += "\t\t<int>" + stateObject.stats.int + "</int>\n"
        }
        if (stateObject.stats.wis) {
            xmlDocumentString += "\t\t<wis>" + stateObject.stats.wis + "</wis>\n"
        }
        if (stateObject.stats.cha) {
            xmlDocumentString += "\t\t<cha>" + stateObject.stats.cha + "</cha>\n"
        }
    
        //if there are any saves, open saves tag
        if (Object.keys(stateObject.savingThrows).some(function (k) { return stateObject.savingThrows[k] })) {
            xmlDocumentString += "\t\t<saves>"
            //for each saving throw, if its there, print the abbreviated stat, a space (comma if neccesary), and the modifier, 
            saveList.map((value, index) => {
                return updateSave(value, index, saveList.length)
            })
            //close saves tag
            xmlDocumentString += "</saves>\n"
        }
        //same with skills
        if (Object.keys(stateObject.skills).some(function (k) { return stateObject.skills[k] })) {
            xmlDocumentString += "\t\t<skills>"
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
            xmlDocumentString += "\t\t<immune>"
            damageList.map((damageName) => {
                console.log(damageName, " checked for immune")
                if (stateObject.DamageTypes[damageName] == "immune") {
                    xmlDocumentString += damageName + " "
                }
            })
            xmlDocumentString += "</immune>\n"
        }
        if (Object.keys(stateObject.DamageTypes).some(function (k) { return stateObject.DamageTypes[k] == "vulnerable" })) {
            xmlDocumentString += "\t\t<vulnerable>";
            let damageList = Object.keys(stateObject.DamageTypes)
            damageList.map((damageName) => {
                if (stateObject.DamageTypes[damageName] == "vulnerable") {
                    xmlDocumentString += damageName + " "
                }
            })
            xmlDocumentString += "</vulnerable>\n"
        }
    
        if (stateObject.senses) {
            xmlDocumentString += "\t\t<senses>" + stateObject.senses + "</senses>\n"
        }
        if (stateObject.passive) {
            xmlDocumentString += "\t\t<passive>" + stateObject.passive + "</passive>\n"
        }
        if (stateObject.languages) {
            xmlDocumentString += "\t\t<languages>" + stateObject.languages + "</languages>\n"
        }
        if (stateObject.cr) {
            xmlDocumentString += "\t\t<cr>" + stateObject.cr + "</cr>\n"
        }
        //traits actions and legendary?
        if (stateObject.traits.length > 0) {
            for (let i = 0; i < stateObject.traits.length; i++) {
                const element = stateObject.traits[i];
                xmlDocumentString += "\t\t<trait>\n\t\t\t<name>" + element.title + "</name>\n\t\t\t<text>" + element.text + "</text>\n\t\t</trait>\n"
    
            }
        }
        if (stateObject.actions.length > 0) {
            for (let i = 0; i < stateObject.actions.length; i++) {
                const element = stateObject.actions[i];
                xmlDocumentString += "\t\t<action>\n\t\t\t<name>" + element.title + "</name>\n\t\t\t<text>" + element.text + "</text>\n\t\t</action>\n"
    
            }
        }
        if (stateObject.legendaryActions.length > 0) {
            for (let i = 0; i < stateObject.legendaryActions.length; i++) {
                const element = stateObject.legendaryActions[i];
                xmlDocumentString += "\t\t<legendary>\n\t\t\t<name>" + element.title + "</name>\n\t\t\t<text>" + element.text + "</text>\n\t\t</legendary>\n"
            }
        }
        //finish xml by closing monster tag
        xmlDocumentString += "\t</monster>"
        return xmlDocumentString;
        //do stuff with it now!
    }
    const outputString = toXML(state);

    
    // const addMonster = (xmlString)=>{
    //     //Adds current string to compendium
    //     setMstring( xmlString);
    //     //reset form somehow.  
    // }
    const callBackMethod = (value) => {
        sendData("monsterString", value);
    }
    useEffect(() => {
        callBackMethod(outputString/*.replace(/[\t\n\r]/gm,'')*/)
    }, [outputString])


    return (
        <div className="jumbotron bg-dark text-light">
            <h1 className="display-3">Output:</h1>
            <p className="output-text" style={{ whiteSpace: "pre-wrap" }}>{outputString}</p>
            {/* <button type="button" name="" id="" className="btn btn-primary btn-lg btn-block" onClick={e=>addMonster(outputString)}>Save Monster to Compendium for export</button> */}
            {/* <button type="button" name="" id="" className="btn btn-primary btn-lg btn-block" onClick={e=>makeCompendium(compendium)}>Create Compendium File</button> */}
            
        </div>

    )
}
export default Output;