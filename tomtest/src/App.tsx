import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SMTPPage from './pages/SMTPPage';
import TaskManager from './pages/TaskManager';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify" element={<SMTPPage/>}/>
        <Route path="/TaskManager" element={<TaskManager/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;