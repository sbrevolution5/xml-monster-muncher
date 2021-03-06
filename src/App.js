import Form from './containers/form'
import './App.css';
import { useState, useEffect } from 'react';
import ls from 'local-storage';


function App() {
  const [compendium, setCompendium] = useState([])
  const recieveCompendium = (myCompendium) => {
    if (compendium === []) {
      setCompendium(myCompendium)
    } else {
      setCompendium([...(compendium || []), myCompendium])
    }
  }
  const browserSaveComp = () => {
    console.log('saved to browser')
    ls.set('compendium', compendium)
  }
  useEffect(() => {
    if (ls.get('compendium') == false) {
      console.log("cant find file!")
      ls.set('compendium', compendium)

    } else {
      console.log("We found a compendium file, attempting to load")
      setCompendium(ls.get('compendium'));
    }
  }, [])
  const makeXML = (source) => {
    let xmlString = "<compendium>\n"
    for (let i = 0; i < source.length; i++) {
      xmlString += source[i].xml;
    }
    xmlString += "\n</compendium>"
    const element = document.createElement("a");
    const file = new Blob([xmlString], { type: 'text/xml' });
    element.href = URL.createObjectURL(file);
    element.download = "myCompendium.xml";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>XML Monster Muncher</h1>
      </header>
      <Form exportFunction={recieveCompendium}></Form>
      <div className="row" id="monsterlist">
        <ul>
          <h3>Saved monsters:</h3>
          {(compendium ? compendium : []).map((monster, index) => {
            return (
              <li key={index}>{monster.name}</li>)
          })}
        </ul>
      </div>
      <button type="button" className="btn btn-primary" onClick={browserSaveComp}>Save compendium to localstorage</button>
      <p className="text-muted">Saves your compendium to browser's localstorage, allowing you to add to it later</p>
      <button type="button" className="btn btn-primary" onClick={() => { makeXML(compendium) }}>Create XML file</button>
      <p className="text-muted">Creates an XML file, and allows the user to download the entire compendium with all monsters listed above</p>
      <div className="Row">


        {/* <a name="" id="" className="btn btn-primary" href="#" role="button">Create XML compendium</a> */}
      </div>
      <div>
        <p className="form-text text-muted">
          Fill in what is needed for your monster, then copy paste into a txt file ending in .xml with a surrounding tag of compendium.  Currently, you can save to your browser's localstorage with the button on the top.  At the bottom there is a button to add the monster to your "Compendium" (also saved to local storage).  Then import into your favorite combat tracker.  Currently optimized for game master 5.
        </p>
      </div>
      <footer>
        <a href="https://github.com/sbrevolution5/xml-monster-muncher">Contribute on Github <i className="fa fa-github" aria-hidden="true"></i></a>
        <p><i className="fa fa-copyright" aria-hidden="true"></i> Seth A. Burleson 2021</p>
      </footer>
    </div>
  );
}

export default App;
