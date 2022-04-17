import logo from './profile.webp';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <>
    <Nav />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-welcome-section">
          <p>
              Hello, my name is Kevin. I am a student in Computer Science at the University of Houston. I am also an Intern at HPE.
          </p>
          <p>
              I had a passion for technology since I was very young. But, when I was 14 I stumbled upon programming. I have kept learning more and more interesting stuff from then.
              As of now, I am currently working on devolping my skills with tryhackme as well as migrating into a Linux environment. I am very interested in Dev Ops Security and Netwrok Security
          </p>
          {/* The links will be placed in soon, just finishing up school responsabilities */}
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
