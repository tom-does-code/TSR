import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="NavbarHolder">
        <button className="ToggleNavbar" onClick={() => setIsOpen(!isOpen)}>☰</button>

        {isOpen && (
             <nav className="NavbarMain">
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/TaskManager">Task Manager</Link></li>
                    <li><Link to=""></Link></li>
                    <li><Link to="/">Reset Login</Link></li>
                </ul>
            </nav>
        )}
    </div>
    )
}