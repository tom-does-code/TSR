import { useState } from "react";

interface SignUpFormProps {
    onSignUp: (email: string, password: string) => void;
    onSwitch: () => void;
}

export default function SignUpForm({ onSignUp, onSwitch }: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signUpSection">
      <h1 className="titles">Sign Up</h1>
      <input 
        type="text" 
        placeholder="Enter Email" 
        className="inputBoxLogin" 
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
      <button onClick={() => onSignUp(email, password)} className="signUpCreateBtn">Create Account</button>
      <p className="signUpToggle">
        <span onClick={onSwitch}>Already have an account? Login</span>
      </p>
    </div>
  );
}