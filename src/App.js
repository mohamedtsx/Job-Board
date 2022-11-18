import './App.css';
import './media.index.css';

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Job from './routes/job/job.component';
import Login from './component/auth/login/login.component';
import PostJob from './routes/post-job/post-job.component';
import NotFound from './routes/not-found/not-found.component';
import Loading from './component/loading/loading.component';
import { useContext } from 'react';
import { LoginContext } from './context/login.context';


function App() {
  
  const { loginPending } = useContext(LoginContext);

  if(loginPending) {
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
