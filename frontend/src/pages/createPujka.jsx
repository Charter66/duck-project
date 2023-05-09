import React, { useState } from 'react';
import axios from 'axios';

const DuckForm = () => {
  const [owner, setOwner] = useState('');
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [quote, setQuote] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the back-end API to save the duck details
      const response = await axios.post('https://duck-project1.onrender.com/create', {
        owner,
        name,
        imageUrl,
        quote,
      });

      // Handle the response if needed
      console.log(response.data);

      // Clear the form inputs after successful submission
      setOwner('');
      setName('');
      setImageUrl('');
      setQuote('');
    } catch (error) {
      // Handle errors if the request fails
      console.error(error);
    }
  };

  return (
  
   <form className="my-form" onSubmit={handleSubmit}> {/* Add the 'my-form' class */}
      {/* Form fields... */}
      {/* Add the Tailwind CSS classes to the elements */}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="my-name"
        />
        <div>
        <label htmlFor="owner">Owner:</label>

          <input
          type="text"
          id="owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          className="my-owner"
        />
        </div>

        <div>
        <label htmlFor="quote">Quote:</label>

          <input
          type="text"
          id="quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          className="my-quote"
        />
        </div>
    <div>
        <label htmlFor="imageUrl">ImageUrl:</label>

          <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="my-imageUrl"
        />
        </div>
      </div>

      {/* Repeat the same structure for other form fields */}

      <button type="submit" className="my-button">Submit</button> {/* Add the 'my-button' class */}
    </form>

  );
};

export default DuckForm;
