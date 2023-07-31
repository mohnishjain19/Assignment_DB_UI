import React, { useEffect, useState } from 'react';
import Tasks from './tasks';
import "./Displaytasks.css";
import Filter from "./filter";

const Displaytasks = () => {
    const [tasks, setTasks] = useState([]);
    const [taskTimes, setTaskTimes] = useState([]);

    const [filtertime, setFilterTime] = useState();
    const [filtersearch, setFilterSearch] = useState();

    const handleAddTask = (taskName, taskTime) => {
        setTasks([...tasks, taskName]);
        setTaskTimes([...taskTimes, taskTime]);
    };

    const filterTask = (filterTime, filterSearch) => {
        setFilterTime(filterTime);
        setFilterSearch(filterSearch);
    };

    useEffect(() => {
       
        const combinedTasks = tasks.map((task, index) => ({ task, time: taskTimes[index] }));

      
        const filteredTasks = combinedTasks.filter((combinedTask) => {
            if (filtertime && combinedTask.time !== filtertime) {
                return false;
            }

            if (filtersearch && !combinedTask.task.toLowerCase().includes(filtersearch.toLowerCase())) {
                return false;
            }

            return true;
        });

        setFilteredTasks(filteredTasks);
    }, [filtertime, filtersearch, taskTimes, tasks]);

    const [filteredTasks, setFilteredTasks] = useState([]);

    return (
        <div>
            <Tasks onAddTask={handleAddTask} />
            <Filter onFilterTask={filterTask} />
            <div className="d"></div>
            <h4 className="d">Task List</h4>
            <ul>
                {filteredTasks.map((combinedTask, index) => (
                    <li key={index}>
                        Task: {combinedTask.task} - Time: {combinedTask.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Displaytasks;
