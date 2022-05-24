import './App.css';
// import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Landingpage } from './component/Landingpage';
import { Steps } from './component/Steps';
import { Sign } from './component/Sign';

function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/steps' element={<Steps />} />
        <Route path='/sign' element={<Sign />} />
      </Routes>
    </>
  );
}

export default App;
