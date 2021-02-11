import React, { Component, useState, useEffect } from 'react';

const Saves = ({sendData}) => {
  const saveThrows = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
  const [strSave, setStrSave] = useState("")
  const [dexSave, setDexSave] = useState("")
  const [conSave, setConSave] = useState("")
  const [intSave, setIntSave] = useState("")
  const [wisSave, setWisSave] = useState("")
  const [chaSave, setChaSave] = useState("")
  const callBackMethod=(value)=>{
    sendData(value);
  }   
  useEffect(()=>{callBackMethod({str: strSave, dex:dexSave, con: conSave, int: intSave, wis: wisSave, cha: chaSave})},[strSave, dexSave, conSave, intSave, wisSave, chaSave])
  const setSave = [setStrSave, setDexSave, setConSave, setIntSave, setWisSave, setChaSave];
  return (
    <div className="form-group row">
      {saveThrows.map((value, index) => {
        //no check boxes, empty box means no change from base stats
        return (
          <div className="form-check" key={index}>
            <label className="form-check-label" htmlFor={value + "Box"}>
              {value}
            </label>
            <div className="form-group">
              <label htmlFor={value + "Mod"}></label>
              <input type="text" className="form-control bg-dark text-light" name="" id={value + "Mod"} aria-describedby="helpId" placeholder="+0" onChange={e=>setSave[index](e.target.value)}/>
              <small id="helpId" className="form-text text-muted">Mod value, ex. +4</small>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Saves;