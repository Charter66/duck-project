import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import DuckForm from './pages/AddDuck'
import NavBar from  './components/NavBar'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {
 // Empty dependency array ensures the effect runs only once on component mount
  
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/create" element={<DuckForm />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
    </>
  );
};

export default App;
