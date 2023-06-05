import { useState } from "react";
import { exercises } from "./data.js";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [sourceName, setSourceName] = useState("");
  const [sourceURL, setSourceURL] = useState("");
  const [subtasks, setSubtasks] = useState([{ id: 0, title: "", content: [{ type: "", content: "" }] }]);

  const handleChangeSubtask = (i, j, event) => {
    const newSubtasks = [...subtasks];
    if (event.target.className === "subtaskTitle") {
      newSubtasks[i].title = event.target.value;
    } else if (event.target.className === "contentType") {
      newSubtasks[i].content[j].type = event.target.value;
    } else {
      newSubtasks[i].content[j].content = event.target.value;
    }
    setSubtasks(newSubtasks);
  };

  const handleAddContent = (i) => {
    const newSubtasks = [...subtasks];
    newSubtasks[i].content.push({ type: "", content: "" });
    setSubtasks(newSubtasks);
  };

  const handleAddSubtask = () => {
    setSubtasks([...subtasks, { id: subtasks.length, title: "", content: [{ type: "", content: "" }] }]);
  };

  const handleSubmit = e => {
    const items = localStorage.getItem('list');
    const storedList = JSON.parse(items);
    e.preventDefault();

    const newTask = {
      id: (exercises.length === 0) ? 0 : storedList.length,
      title,
      subtitle,
      source: {
        name: sourceName,
        url: sourceURL,
      },
      subtasks,
    };

    onAddTask(newTask);

    setTitle("");
    setSubtitle("");
    setSourceName("");
    setSourceURL("");
    setSubtasks([{ id: 0, title: "", content: [{ type: "", content: "" }] }]);
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
      
      <button type="button" onClick={handleAddSubtask}>Add Subtask</button>
      {
        subtasks.map((subtask, i) => (
          // a unique key for each div
          <div key={i}>
            <label htmlFor={`subtask-${i}`}>{`Subtask #${i + 1}`}</label>
            <input
              type="text"
              name={`subtask-${i}`}
              id={`subtask-${i}`}
              className="subtaskTitle"
              value={subtask.title}
              onChange={e => handleChangeSubtask(i, null, e)}
            />
            <button type="button" onClick={() => handleAddContent(i)}>Add Content</button>
            {subtask.content.map((content, j) => (
              <div key={j}>
                <label htmlFor={`contentType-${i}-${j}`}>Type</label>
                <input
                  type="text"
                  name={`contentType-${i}-${j}`}
                  id={`contentType-${i}-${j}`}
                  className="contentType"
                  value={content.type}
                  onChange={e => handleChangeSubtask(i, j, e)}
                />
                <label htmlFor={`contentText-${i}-${j}`}>Content</label>
                <input
                  type="text"
                  name={`contentText-${i}-${j}`}
                  id={`contentText-${i}-${j}`}
                  className="contentText"
                  value={content.content}
                  onChange={e => handleChangeSubtask(i, j, e)}
                />
              </div>
            ))}
          </div>
        ))
      }
      <input type="submit" value="Submit Task" />
    </form>
  );
}

export default TaskForm;
