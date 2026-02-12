import { useState } from "react";
import type { Task } from '../types/Tasks';

interface CreateTaskFormProps {
    onSubmit: (task: Task) => void;
    onCancel: () => void;
}

export default function TaskList({onSubmit, onCancel}: CreateTaskFormProps) {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium');

    const handleSubmit = () => {
        if (!title.trim()) {
            alert('Please enter a title');
            return;
        }

        onSubmit({
            id: Date.now(),
            title,
            details,
            priority,
            completed: false
        });

        setTitle('');
        setDetails('');
        setPriority('medium');
    }


    return (
        <>
        
        <div className="create-task-form">
            <h2>New Task</h2>

            <label>Title</label>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Title"
            />


            <label>Details</label>
            <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Task details..."
            />

            <label>Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value as 'high' | 'medium' | 'low')}>
                <option value="high">🔴 High</option>
                <option value="medium">🟡 Medium</option>
                <option value="low">🟢 Low</option>
            </select>

            <div className="form-buttons">
                <button className="submit-btn" onClick={handleSubmit}>Add Task</button>
                <button className="cancel-btn" onClick={onCancel}>Cancel</button>
            </div>

        </div>
        
        </>

    )
}