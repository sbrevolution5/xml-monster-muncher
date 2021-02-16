import logo from './logo.svg';
import Form from './containers/form'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>XML Monster Muncher</h1>
      </header>
        <Form></Form>
      <div>
        <p className="form-text text-muted">
          Fill in what is needed for your monster, then copy paste into a txt file ending in .xml with a surrounding tag of compendium.  then import into your favorite combat tracker.  Currently optimized for game master 5.
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
