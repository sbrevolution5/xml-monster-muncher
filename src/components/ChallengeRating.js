import {useState, useEffect} from 'react'
const ChallengeRating = ({sendData})=>{
    const [cr, setCr] = useState("")
    const crs = ["0", "1/8", "1/4", "1/2", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]
    const callBackMethod=(value)=>{
        sendData("cr", value);
    }   
    useEffect(()=>{callBackMethod(cr)}, [cr])
    return(
        <div className="form-group">
          <label htmlFor="crForm">Challenge Rating</label>
          <select className="form-control bg-dark text-light" name="" id="crForm" onChange={e=>{setCr(e.target.value)}}>
            {crs.map((value, index)=>{
                return <option key={index} value={value}>{value}</option>;
            })}
          </select>
        </div>
    )
}
export default ChallengeRating;