import { useState } from "react";
import { exercises } from "./data.js";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [sourceName, setSourceName] = useState("");
  const [sourceURL, setSourceURL] = useState("");
  const [showSubtaskForm, setShowSubtaskForm] = useState(false);
  const [subtasks, setSubtasks] = useState([]);
  const [subtaskTitle, setSubtasktitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    const items = localStorage.getItem('list');
    const storedList = JSON.parse(items);
    e.preventDefault();
    
    const newTask = {
      id: (exercises.length === 0) ? 0 : storedList.length,
      title: title,
      subtitle: subtitle,
      source: {
        name: sourceName,
        source: sourceURL,
      },
      subtasks: [
        {
          id: 0,
          title: subtaskTitle,
          done: false,
          content: [
            { 
              id: 0, 
              type: "text", 
              content 
            },
          ],
        }
      ],
    };
    
    console.log("newTask ", newTask);
    onAddTask(newTask);

    setTitle("");
    setSubtitle("");
    setSourceName("");
    setSourceURL("");
    setSubtasks([]);
    setSubtasktitle("");
    setContent("");
    setShowSubtaskForm(false);
  };

  const handleAddSubtask = (subtask) => {
    setSubtasks([...subtasks, subtask]);
  };

  const toggleSubtaskForm = () => {
    setShowSubtaskForm(!showSubtaskForm);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="subtitle">Subtitle</label>
        <input id="subtitle" value={subtitle} onChange={e => setSubtitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="sourceName">Source Name</label>
        <input id="sourceName" value={sourceName} onChange={e => setSourceName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="sourceURL">Source URL</label>
        <input id="sourceURL" value={sourceURL} onChange={e => setSourceURL(e.target.value)} />
      </div>
      <div>
        <button type="button" onClick={toggleSubtaskForm}>
          {showSubtaskForm ? "Hide Subtask Form" : "Add Subtasks"}
        </button>
      </div>
      {showSubtaskForm && (<div>
      <div>
        <label htmlFor="subtaskTitle">Subtask Title</label>
        <input id="subtaskTitle" value={subtaskTitle} onChange={(e) => setSubtasktitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="subtaskContent">Subtask Content</label>
        <textarea id="subtaskContent" value={content} onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add Subtask</button>
      </div>
    </div>)}
      {subtasks.length > 0 && (
        <div>
          <h3>Subtasks:</h3>
          <ul>
            {subtasks.map((subtask) => (
              <li key={subtask.id}>{subtask.title}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <button type="submit">Add a new Task</button>
      </div>
    </form>
  );
}

export default TaskForm;
