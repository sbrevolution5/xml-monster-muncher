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
      <footer>
        <a href="https://github.com/sbrevolution5/xml-monster-muncher">Contribute on Github <i className="fa fa-github" aria-hidden="true"></i></a>
        <p><i className="fa fa-copyright" aria-hidden="true"></i> Seth A. Burleson 2021</p>
      </footer>
    </div>
  );
}

export default App;
