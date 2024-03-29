import { useState } from "react";
// import AssignmentIcon from "@material-ui/icons/Assignment";
import { Card, Checkbox, Fab, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

const TaskWave = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Practice React Challenges",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Update CV",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Apply For Jobs",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Clean the house",
      isCompleted: false,
    },
  ]);

  const [showInput, setShowInput] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      text: newTaskText,
      isCompleted: false,
    };
    if (newTask.text.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTaskText("");
      setShowInput(false);
    }
  };

  const doneTask = (taskId: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  return (
    <div className="flex flex-col gap-4 pt-6">
      <div className="flex justify-center items-center">
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          onClick={() => setShowInput(!showInput)}
        >
          <AddIcon color="action" />
        </Fab>
        {showInput && (
          <TextField
            id="outlined-basic"
            color="secondary"
            // label="Standard"
            variant="standard"
            className="pl-3 transition duration-8 hover:duration-400 ease-in-out animate-[wiggle_1s_ease-in-out_infinite]"
            autoFocus
            onChange={(e) => setNewTaskText(e.target.value)}
            value={newTaskText}
            type="text"
            onKeyPress={handleKeyPress}
          />
        )}
      </div>
      <div className="flex gap-8 flex-col items-center">
        {tasks.map((task) => (
          <div key={task.id} className="flex w-[50vw] justify-between">
            <Card
              sx={{ minWidth: 300 }}
              className="flex w-[100%] items-center p-4"
            >
              <Checkbox
                {...label}
                checked={task.isCompleted}
                color="secondary"
                onChange={() => doneTask(task.id)}
              />
              <span
                className={
                  task.isCompleted
                    ? "text-decoration: line-through text-left flex-1"
                    : "text-left flex-1"
                }
              >
                {task.text}
              </span>
              <div className="flex gap-3 justify-between">
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="delete"
                  disabled={task.isCompleted}
                >
                  <DeleteIcon
                    color="secondary"
                    onClick={() => deleteTask(task.id)}
                  />
                </Fab>
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="edit"
                  disabled={task.isCompleted}
                >
                  <EditIcon color="secondary" />
                </Fab>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskWave;
