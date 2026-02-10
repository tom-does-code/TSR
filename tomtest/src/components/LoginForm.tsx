import { useState } from 'react';
import { checkString } from '../utils/validation';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onSwitch: () => void;
}

export default function LoginForm({ onLogin, onSwitch }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const checkLocalString = (email: string, password: string) => {
    if (checkString(email, password)) {
      onLogin(email, password);
    } else {
      alert('Please fill in both fields.');
    }
  }

  return (
    <div className="loginSection">
      <h1 className="titles">Login</h1>
      <input 
        type="text" 
        placeholder="Enter Email" 
        className="input" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <div className="passwordContainer">
        <input 
          type={showPassword ? "text" : "password"} 
          placeholder="Enter Password" 
          className="inputBoxLogin" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <p className="EyeToggle" onClick={() => setShowPassword(!showPassword)}>👁️</p>
      </div>
      <button onClick={() => checkLocalString(email, password)} className="sendEmailBtn">Continue</button>
      <p className="signUpToggle">
        <span onClick={onSwitch}>Don't have an account? Sign Up</span>
      </p>
    </div>
  );
}