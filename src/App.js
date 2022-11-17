import './App.css';
import './media.index.css';

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Job from './routes/job/job.component';
import Login from './component/auth/login/login.component';
import PostJob from './routes/post-job/post-job.component';
import NotFound from './routes/not-found/not-found.component';

import { useContext } from 'react';
import { JobContext } from './context/jobs.context';
import Loading from './component/loading/loading.component';


function App() {
  const { jobs } = useContext(JobContext);
  
  if(!jobs.length) {
    return <Loading/>
  }

  return (
    <div className="App">
      <Navigation/>
      <Login/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='post-job' element={<PostJob/>}/>s
        <Route path='job/:id' element={<Job/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
