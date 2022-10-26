import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Job from './routes/job/job.component';


function App() {

  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path=':id' element={<Job/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
