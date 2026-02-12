import '../styles/TaskManager.css';
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function TaskManagerPage() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks([...tasks, newTask]);
        setNewTask('');
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="TaskManagerHolder">
                <h1 className="TaskTitle">Tasks</h1>

                <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New Task..."
                />
                <button onClick={addTask}>Add</button>

                {tasks.map((task, i) => (
                    <div key={i} style={{
                        background: 'white',
                        padding: '12px',
                        margin: '8px 0',
                        borderRadius: '8px'
                    }}>
                        {task}
                    </div>
                ))}
            </div>
        </>
    )
}