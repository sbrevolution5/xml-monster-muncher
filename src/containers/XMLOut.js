import { ReactComponent } from "react";
const XMLOut = (codex) => {
    var XMLdoc = document.implementation.createDocument(null, "compendium.xml")
    var xmlString 
    const CreateXML = ()=>{
        xmlString = codex[0] //only takes first element for now
        console.log(xmlString)
        let parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xmlString, "text/xml")
    }
    return (
        <div>
        <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block" onClick={(e)=>{CreateXML()}}>Export as XML</button>
        </div>
    )
}
export default XMLOut;