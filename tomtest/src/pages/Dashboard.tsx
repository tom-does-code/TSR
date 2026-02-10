import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>You're logged in!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}