import React, { useState, useEffect ,Link} from 'react';
import axios from 'axios';
import DeleteDuck from '../components/DeleteDuck'

const Home = () => {
  const [allDucks, setAllDucks] = useState([]);

  useEffect(() => {
    axios
      .get('https://duck-project1.onrender.com/ducks')
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

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Ducks</h1>
      <div className="grid grid-cols-3 gap-4">
        {allDucks &&
          allDucks.map(duck => (
            <div key={duck._id} className="p-4 border border-gray-300 rounded">
              <h2 className="text-xl font-bold mb-2">{duck.name}</h2>
              <img src={duck.imageUrl} alt="Duck" className="w-full h-64 object-cover" />
              <p className="mt-2">{duck.quote}</p>
              <p className="text-gray-600 text-sm mt-2">Owner: {duck.owner}</p>
              <DeleteDuck duckId={duck._id} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
