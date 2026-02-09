import './App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    const res = await fetch('http://localhost:8080/backend/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Login failed: ' + data.message);
    }
  }

  return (
    <div className="EmailSection">
      {isSignUp ? (
        <div className="loginSection">
          <h1 className="titles">Login</h1>
          <input type="text" placeholder="Enter Email" className='input' />

          <div className="passwordContainer">
            <input type={showPassword ? "text" : "password"} placeholder="Enter Password" className="inputBoxLogin"/>
            <p className="EyeToggle" onClick={() => setShowPassword(!showPassword)}>👁️</p>
            </div>

          <button onClick={() => handleLogin('123', '123')} className="sendEmailBtn">Continue</button>
          <p className='signUpToggle'><span onClick={() => setIsSignUp(false)}>Don't have an account? Sign Up</span></p>
        </div>

      ) : (
        <div className="signUpSection">
          <h1 className="titles">Sign Up</h1>
          <input type="text" placeholder="Enter Email" className="inputBoxLogin" />
          <div className="passwordContainer">
            <input type={showPassword ? "text" : "password"} placeholder="Enter Password" className="inputBoxLogin"/>
            <p className="EyeToggle" onClick={() => setShowPassword(!showPassword)}>👁️</p>
            </div>
          <p className='signUpToggle'> <span onClick={() => setIsSignUp(true)}> Already have an account? Login</span></p>
        </div>
      )}
    </div>

  )
}

export default App
