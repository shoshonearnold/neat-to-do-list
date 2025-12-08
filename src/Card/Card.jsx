import { useState } from 'react';
import './Card.css';

function Card() {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleSubmit = () => {
        if (inputValue.trim() === '') return;
        setTasks([...tasks, inputValue.trim()]);
        setInputValue('');
    }

    return (
        <div className="container">
            <div className='card'>
                <h1 className='card-title'>To-Do List</h1>
                <div className='task-add-conatiner'>
                    <input
                        type="text"
                        placeholder='add a task...'
                        value={inputValue}
                        onSubmit={handleSubmit}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className='add-btn' onClick={handleSubmit}>Add</button>
                </div>
                <div className='added-tasks'>
                    {tasks.map((task, index) => (
                        <>
                            <input type='checkbox' key={index} value={task} name={task} />
                            <label for={task}>&nbsp;&nbsp;{task}</label>
                            <br />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;