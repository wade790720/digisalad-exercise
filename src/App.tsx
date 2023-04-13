import { useState } from 'react';
import Header from 'container/Header';
import Menu from 'container/Menu';
import About from 'container/About';
import Introduce from 'container/Introduce';
import Ingredients from 'container/Ingredients';
import styled from './App.module.scss'
import Experience from 'container/Experience';
import Awards from 'container/Awards';
import Persona from 'container/Persona';
import Slide from 'container/Slide';

function App() {
  const [status, setStatus] = useState(false)

  const handleClick = () => {
    setStatus(!status)
  }

  if (status) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <div className={styled.main}>
      <Header toggle={status} onClick={handleClick} />
      <Menu toggle={status} onClick={handleClick}/>
      <Introduce />
      <About />
      <Awards />
      <Ingredients />
      <Persona />
      <Experience />
      <Slide />
    </div>
  );
}

export default App;
