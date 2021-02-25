import { ReactComponent } from "*.svg";
const XMLOut = (codex) => {
    var XMLdoc = document.implementation.createDocument(null, "compendium.xml")
    var xmlString 
    const CreateXML = ()=>{
        codex.forEach(element => {
            xmlString+= element;
        });
        console.log(xmlString)
    }
    return (
        <div>
        <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block" onClick={(e)=>{CreateXML()}}>Export as XML</button>
        </div>
    )
}
export default XMLOut;