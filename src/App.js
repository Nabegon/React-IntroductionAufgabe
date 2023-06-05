import { useState, useEffect } from "react";
import styled from "styled-components";

// global styles
import "./App.css";
// (styled) sub components
import Task from "./Task.js";
import TaskForm from "./TaskForm.js";
// data
import { exercises } from "./data.js";

// Task for CSS in JS
const StyledRed = styled.h1`
  color: red;
  
  span {
    color: blue;
  }

  /* Sass */
  @media (min-width: 768px) {
    span {
      display: block;
    }
  }
`;

//TODO add ** for next.js

/*
 * To arrange the exercise-boxes at once:
 */
const StyledDiv = styled.div`
  border-radius: 3px;
  background-color: #282c34;
  margin: 0.5em 0.5em;
  padding: 0.5em 1em;
  color: white;
`;

/*
 * Just a styled version of h4
 */
const StyledH4 = styled.h4`
  color: #17a934;
  margin-left: 0.5em;
  font-size: 0.8em;
  font-style: "italic";
  font-family: "Helvetica Neue" sans-serif;
`;

/*
 * TaskArea represents content-area
 * and wrt. this app, the contents of a Task are given as
 * subtasks
 *
 * The words superTask and exercise are used interchangeable
 */
function TaskArea({ subtasks, superTaskId, onCheckboxChange }) {
  console.log("subtasks", subtasks);
  const listItems = subtasks.map((task) => (
    <Task
      task={task}
      length={subtasks.length}
      superTaskId={superTaskId}
      onCheckboxChange={onCheckboxChange}
      key={task.id}
    ></Task>
  ));
  return listItems;
}

/*
 * Main component embedded directly at index.js
 * first component in render-root-hierarchy
 */

function App() {
  /*
   * initial value of the exerciseList
   * in a real world application such data would be fetched from a database etc.
   *
   * At this point we work with the mock-data to train the following:
   *  1. propagation of content down to child-components
   *  2. work with hooks
   *  3. reuse of stateful application logic?
   */

  // init the list-state:
  // we'll use that more sensibly later
  // const [list, setList] = useState([]);
  // if(list.length===0)setList(exercises);

  // const storedList = localStorage.getItem("list");
  // const initialList = storedList ? <JSON.parse(storedList) : exercises;
  // const [list, setList] = useState(initialList);
  
  const [list, setList] = useState([]);

  const onCheckboxChange = (taskId, isChecked) => {
    const updatedList = list.map((exercise) => {
      const updatedSubtasks = exercise.subtasks.map((subtask) => {
        if (subtask.id === taskId) {
          return { ...subtask, done: isChecked };
        }
        return subtask;
      });
      return { ...exercise, subtasks: updatedSubtasks };
    });

    setList(updatedList);

    localStorage.setItem('list', JSON.stringify(updatedList));
  };

  const addTask = (task) => {
    const storedTask = task;

    const newList = [...list];
    newList.push(storedTask);
    console.log("newList, App.js: ", newList);
    const newTask = { ...task, done: false };
    console.log("newTask, App.js: ", newTask);

    if (task.subtasks.length === 0) {
      storedTask.subtasks = [];
      newList.push(storedTask);
    }

    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };
  useEffect(() => {
    const storedList = localStorage.getItem('list');
    const initialList = storedList ? JSON.parse(storedList) : exercises;
    setList(initialList);
  }, []);
  /*
   * for each exercise we create a title and task-area named TaskArea
   * all wrapped within a styled div
   * TODO: key-id generation: import { nanoid } from "nanoid";
   *
   * Discussion during lecture or exercise:
   * Prop drilling vs. Context: first ask yourself if React-Context is really necessary
   * NOTE: everytime list gets updated, does each child gets rerendered?
   *       how the fiber-recons. is acting here?
   */
  console.log("list: ", list);
  const listItems = list.map((exe) => (
    <StyledDiv key={exe.id}>
      <h2>
        Exercise {exe.id}: {exe.title}{" "}
        {exe.subtasks.every((currentExe) => currentExe.done) && "✔"}
      </h2>
      {exe.subtitle ? <StyledH4>{exe.subtitle}</StyledH4> : ""}

      <TaskArea
        subtasks={exe.subtasks}
        superTaskId={exe.id}
        onCheckboxChange={onCheckboxChange}
        key={exe.id}
      ></TaskArea>
    </StyledDiv>
  ));
  return (
    <div className="App">
      <header className="App-header">
        <StyledRed>Welcome to <span>the exercises of MKG - 2023</span></StyledRed>
        <p>
          This ExerciseApp is based on the initial project you can get via
          create-react-app and is extended by Christina Mika-Michalski
        </p>
        <p>
          Please note, that this app is still a work in progress. So if you
          don`t like something, feel free to optimize it.
        </p>
        <p>Surprise: some exercises will adress gaps within this version.</p>
      </header>
      <main>{listItems}</main>
      <TaskForm onAddTask={addTask}></TaskForm>
    </div>
  );
}

export default App;

