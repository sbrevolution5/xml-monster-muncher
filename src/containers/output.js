//import problem for some reason it is not exported, currently putting in this file
//import { toXML } from "../devLogic/export.js";
const toXML=(stateObject)=>{
    let xmlDocumentString= "";
    xmlDocumentString+="<monster>\n"
    if(stateObject.name){
        xmlDocumentString+="<name>"+stateObject.name+"</name>\n"
    }else{
        console.error("no name given");
    }
    if(stateObject.size){
        xmlDocumentString+= "<size>"+stateObject.size+"</size>\n"
    }
    if(stateObject.type){
        xmlDocumentString+= "<type>"+stateObject.type+"</type>\n"
    }
    if(stateObject.alignment){
        xmlDocumentString+= "<alignment>"+stateObject.alignment+"</alignment>\n"
    }
    if(stateObject.ac){
        xmlDocumentString+= "<ac>"+stateObject.ac+"</ac>\n"
    }
    if(stateObject.hp){
        xmlDocumentString+= "<hp>"+stateObject.hp+"</hp>\n"
    }
    if(stateObject.speed){
        xmlDocumentString+= "<speed>"+stateObject.speed+"</speed>\n"
    }
    if(stateObject.stats.str){
        xmlDocumentString+= "<str>"+stateObject.stats.str+"</str>\n"
    }
    if(stateObject.stats.dex){
        xmlDocumentString+= "<dex>"+stateObject.stats.dex+"</dex>\n"
    }
    if(stateObject.stats.con){
        xmlDocumentString+= "<con>"+stateObject.stats.con+"</con>\n"
    }
    if(stateObject.stats.int){
        xmlDocumentString+= "<int>"+stateObject.stats.int+"</int>\n"
    }
    if(stateObject.stats.wis){
        xmlDocumentString+= "<wis>"+stateObject.stats.wis+"</wis>\n"
    }
    if(stateObject.stats.cha){
        xmlDocumentString+= "<cha>"+stateObject.stats.cha+"</cha>\n"
    }

    //saves is trickier than the rest
    if(stateObject.saves){
        xmlDocumentString+= "<saves>"+stateObject.saves+"</saves>\n"
    }
    //same with skills
    if(stateObject.skills){
        xmlDocumentString+= "<skills>"+stateObject.skills+"</skills>\n"
    }
    //also res,immune, and vuln

    if(stateObject.senses){
        xmlDocumentString+= "<senses>"+stateObject.senses+"</senses>\n"
    }
    if(stateObject.passive){
        xmlDocumentString+= "<passive>"+stateObject.passive+"</passive>\n"
    }
    if(stateObject.languages){
        xmlDocumentString+= "<languages>"+stateObject.languages+"</languages>\n"
    }
    if(stateObject.cr){
        xmlDocumentString+= "<cr>"+stateObject.cr+"</cr>\n"
    }
    //traits actions and legendary?
    //finish xml
    xmlDocumentString+="</monster>"
    console.log(xmlDocumentString)
    return xmlDocumentString;
    //do stuff with it now!
}

const Output = ({state})=>{
    const outputString = toXML(state);
    return(
        <div>
            <p>{outputString}</p>
        </div>
    )
}
export default Output;