import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import DuckForm from './pages/createPujka'
const App = () => {
 // Empty dependency array ensures the effect runs only once on component mount
  
  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/create" element={<DuckForm />}/>
    </Routes>
  );
};

export default App;
