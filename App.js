import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './Component/Header.js/Header';
import Footer from './Component/Header.js/Footer';
import Navbar from './Component/Navbar';
import Greeting from './Component/Greeting';
import UserProfile from './UserProfile';
import Car from './Car';
import Product from './Product';
import Counter from './Counter';
import Child from './Child';
import StatusMessage from './StatusMessage';
import Display from './Component/Display';
import Synthetic from './Component/Synthetic';
import HelperUtility from './Utility';
import './style.css';

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => { setCount(count + 1); };
  const parentData = 'Hello, Child Component!';
  return (
    <div className="App">
      <Greeting name="Aditya" />
      <UserProfile firstName="Aditya" lastName="Prakash" age={20} />
      <Car brand="Buggatti" />
      <Car />
      <Product name="Iphone" price={1500} isAvailable={false} />
      <h1>Count: {count}</h1>
      <Counter onIncrement={handleIncrement} />
     
      <h1>Parent Component</h1> <Child data={parentData} />

      <h1>Status Messages</h1> 
      <StatusMessage status="success" /> 
      <StatusMessage status="error" />
      <StatusMessage status="loading" /> 
      <StatusMessage status="unknown" />
      <Display />
      <Synthetic />
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Full Stack Web Developer Portfolio</title>
  <link rel="stylesheet" href="style.css" />
  <header>
    <h1>Aditya Prakash</h1>
    <p>Full Stack Web Developer</p>
  </header>
  <nav>
    <ul>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
  <main>
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        Hello! I'm Aditya Praksh, a passionate full-stack web developer with
        experience in building dynamic and responsive websites. I love coding
        and creating innovative solutions for web applications.
      </p>
    </section>
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
    </section>
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project">
          <h3>WixWave</h3>
          <p>Humaan is a degital marketing company</p>
        </div>
        <div className="project">
          <h3>Grocery Website</h3>
          <p>An user freindly grocery website</p>
        </div>
      </div>
    </section>
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Email: paditya042005@gmail.com</p>
      <p>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/aditya-prakash-729859252/">
          linkedin.com/in/AdityaPrakash
        </a>
      </p>
    </section>
  </main>
  <footer>
    <p>© 2025 Aditya Prakash. All rights reserved.</p>
  </footer>
</>

    </div>
  );
}

export default App;
