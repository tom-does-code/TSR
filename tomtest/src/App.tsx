import './App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signEmail, signEmailFunc] = useState('');
  const [signPass, signPassFunc] = useState('');

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
    } else {
      alert('Login failed: ' + data.message);
    }
  }

  
    const handleSignUp = async (email: string, password: string) => {


      const res = await fetch('http://localhost:8080/backend/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json();

      if (data.success) {
        alert('succ');
        if (data.exists == true) {
          alert('Email already has an account');
        }
      } else {
        alert('Invalid Input');
      }
    }

  return (
    <div className="EmailSection">
      {isSignUp ? (
        <div className="loginSection">
          <h1 className="titles">Login</h1>
          <input type="text" placeholder="Enter Email" className='input' value={email} onChange={(e) => setEmail(e.target.value)} />

          <div className="passwordContainer">
            <input type={showPassword ? "text" : "password"} placeholder="Enter Password" className="inputBoxLogin" value={password} onChange={(e) => setPassword(e.target.value)} />
            <p className="EyeToggle" onClick={() => setShowPassword(!showPassword)}>👁️</p>
            </div>

          <button onClick={() => handleLogin(email, password)} className="sendEmailBtn">Continue</button>
          <p className='signUpToggle'><span onClick={() => setIsSignUp(false)}>Don't have an account? Sign Up</span></p>
        </div>

      ) : (
        <div className="signUpSection">
          <h1 className="titles">Sign Up</h1>
          <input type="text" placeholder="Enter Email" className="inputBoxLogin" value={signEmail} onChange={(e) => signEmailFunc(e.target.value)} />
          <div className="passwordContainer">
            <input type={showPassword ? "text" : "password"} placeholder="Enter Password" className="inputBoxLogin" value={signPass} onChange={(e) => signPassFunc(e.target.value)}/>
            <p className="EyeToggle" onClick={() => setShowPassword(!showPassword)}>👁️</p>
            </div>
          <button onClick={() => handleSignUp(signEmail, signPass)} className='signUpCreateBtn'>Create Account</button>
          <p className='signUpToggle'> <span onClick={() => setIsSignUp(true)}> Already have an account? Login</span></p>
        </div>
      )}
    </div>
  )
}

export default App