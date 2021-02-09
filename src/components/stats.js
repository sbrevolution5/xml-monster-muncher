
import {useState, useEffect, Component} from 'react';

const Stats =({onChange, state, sendData})=>{
    //should be able to send the object to parent needs to trigger when state is changed, so that the parent recieves value
    const callBackMethod=(value)=>{
        sendData(value);
      }   

    const [str, setStr] = useState(10);
    const [dex, setDex] = useState(10);
    const [con, setCon] = useState(10);
    const [int, setInt] = useState(10);
    const [wis, setWis] = useState(10);
    const [cha, setCha] = useState(10);
    const scores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    useEffect(()=>{callBackMethod({str: str, dex: dex, con: con, int: int, wis: wis, cha: cha})},[str, dex,con,int,wis,cha])
    // attempting to stop repeating self
    const scoresArrayMap =()=>{return(
        scores.map((value, index) => {
        return <option key={index} value={value}>{value}</option>
    }))}
    return(

            <div className="form-group">
            <h3>Stats</h3>
                <label htmlFor="strSelector">Strength</label>
                <select id="strSelector" defaultValue="10" name="strStat" onChange={e => setStr(parseInt(e.currentTarget.value))}>
                    {scoresArrayMap()}

                </select>
                <label htmlFor="dexSelector"> Dexterity</label>
                <select id="dexSelector" defaultValue="10" name="dexStat" onChange={e => setDex(parseInt(e.currentTarget.value))}>
                    {scoresArrayMap()}

                </select>
                <label htmlFor="conSelector"> Constitution</label>
                <select id="conSelector" defaultValue="10" name="conStat" onChange={e => setCon(parseInt(e.currentTarget.value))}>
                    {scoresArrayMap()}

                </select>
                <label htmlFor="intSelector"> Intelligence</label>
                <select id="intSelector" defaultValue="10" name="intStat" onChange={e => setInt(parseInt(e.currentTarget.value))}>
                    {scoresArrayMap()}

                </select>
                <label htmlFor="wisSelector"> Wisdom</label>
                <select id="wisSelector" defaultValue="10" name="wisStat" onChange={e => setWis(parseInt(e.currentTarget.value))}>
                    {scoresArrayMap()}

                </select>
                <label htmlFor="chaSelector"> Charisma</label>
                <select id="chaSelector" defaultValue="10" name="chaStat" onChange={e => setCha(parseInt(e.currentTarget.value))}>
                    {scoresArrayMap()}

                </select>
        </div>
    )
}
export default Stats