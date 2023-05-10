import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import DuckForm from './pages/createPujka'
import NavBar from  './components/NavBar'
const App = () => {
 // Empty dependency array ensures the effect runs only once on component mount
  
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/create" element={<DuckForm />}/>
    </Routes>
    </>
  );
};

export default App;
