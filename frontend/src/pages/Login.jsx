import {useState} from 'react'
import {useNavigate} from 'react'

const Login =()=>{

        const [email, setEmail] = useState({email: ''})
        const [password, setPassword] = useState({email: ''})

        const handleChange = (e) =>{
            setEmail(e.target.value)
            setPassword(e.target.value)
        }

        const handleSubmit = () =>{ 
            
        }
      return (
        <>
        <form className="my-form" onSubmit={handleSubmit}> {/* Add the 'my-form' class */}
            <div>
            <label >Email:</label>
            <input 
            
             type="email"
             id="email"
             name="email" 
             onChange={handleChange} 
             className="my-name"

             />
             
            </div>
            <div> 
            <label>Password:</label>

            <input 
            type="password"
             id="password"
             name="password" 
             onChange={handleChange} />
            </div>
            <button type="submit" className="my-button">Submit</button> {/* Add the 'my-button' class */}
    </form>
        </>
    )
}

export default Login;