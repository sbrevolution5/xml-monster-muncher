import Form from './containers/form'
import './App.css';
import { useState, useEffect } from 'react';
import ls from 'local-storage';


function App() {
  const [compendium, setCompendium] = useState([])
  const recieveCompendium = (myCompendium) => {
    setCompendium([...compendium, myCompendium])
  }
  const browserSaveComp = () => {
    console.log('saved to browser')
    ls.set('compendium', compendium)
  }
  useEffect(() => {
    if (ls.get('compendium') == false) {
        console.log("cant find file!")
        ls.set('compendium', compendium)

      }else{
        console.log("We found a compendium file, attempting to load")
        setCompendium(ls.get('compendium'));
      }
    }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>XML Monster Muncher</h1>
      </header>
      <Form exportFunction={recieveCompendium}></Form>
      <div className="row" id="monsterlist">
        <ul>
          <h3>Saved monsters:</h3>
          {compendium.map((monster,index) => {
            return (
              <li key={index}>{monster.name}</li>)
          })}
        </ul>
      </div>
      <div className="Row">
        <button type="button" className="btn btn-primary" onClick={browserSaveComp}>Save compendium to localstorage</button>
        <a name="" id="" className="btn btn-primary" href="#" role="button">Create XML compendium</a>
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
