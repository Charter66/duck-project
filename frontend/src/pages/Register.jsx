import React, { useState  } from 'react';
import axios from 'axios';

const Register= () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      // Send a POST request to the back-end API to save the user details
      const response = await axios.post('https://duck-project1.onrender.com/users', {
        firstName,
        lastName,
        email,
        password,
      });

      // Handle the response if needed
      console.log(response.data);

  
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
        <label htmlFor="name">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="my-FirstName"
        />
        <div>
        <label htmlFor="lastName">Last Name:</label>

          <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="my-lastName"
        />
        </div>

        <div>
        <label htmlFor="email">email:</label>

          <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="my-email"
        />
        </div>
    <div>
        <label htmlFor="password">Password:</label>

          <input
          type="password"
          id="pasword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="my-password"
        />
        </div>
      </div>

      {/* Repeat the same structure for other form fields */}

      <button type="submit" className="my-button">Submit</button> {/* Add the 'my-button' class */}
    </form>

  );
};

export default Register;
