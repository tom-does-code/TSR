import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import { loginUser, signUpUser } from '../backend/auth';
import '../App.css';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async (email: string, password: string) => {
    const data = await loginUser(email, password);
    if (data.success) {
      navigate('/dashboard');
    } else {
      alert('Login failed: ' + data.message);
    }
  };

  const handleSignUp = async (email: string, password: string) => {
    const data = await signUpUser(email, password);
    if (data.success) {
      navigate('/verify');
      setIsSignUp(false);
    } else if (data.exists) {
      alert('Email already has an account');
    } else {
      alert('Invalid Input');
    }
  };

  return (
    <div className="EmailSection">
      {isSignUp
        ? <SignUpForm onSignUp={handleSignUp} onSwitch={() => setIsSignUp(false)} />
        : <LoginForm onLogin={handleLogin} onSwitch={() => setIsSignUp(true)} />
      }
    </div>
  );
}