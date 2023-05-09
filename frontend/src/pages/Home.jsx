 import React ,{useState, useEffect} from 'react';
 import axios from 'axios';
 
 
 const Home = () => {
 
  const [allDucks, setAllDucks] = useState([]);

useEffect(() => {
  axios.get('https://duck-project1.onrender.com/ducks')
    .then(response => {
      // Handle the response
      console.log(response.data);
      setAllDucks(response.data);
    })
    .catch(error => {
      // Handle the error
      console.error(error);
    });
}, []);

return(
    <div>
        {allDucks && allDucks.map(duck => 
          <div key={duck}>
          <l1 key={duck}>{duck.name}</l1>
          <img src={duck.imageUrl} alt="image" />
          </div>
        )}
        <h1>heej</h1>
    </div>

)
}
export default Home;

