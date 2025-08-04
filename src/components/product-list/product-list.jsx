import { ListHeader } from '../list-header/list-header'
import { ListBody } from '../list-body/list-body'
import './product.css'
import { useState } from 'react'

function ProductList () {
    if(!localStorage.newTask){
        localStorage.newTask = JSON.stringify([]);
    }
    
    const [newTask, setNewTask] = useState(JSON.parse(localStorage.newTask));

    const onClickTaskCreate = ()  => {
        const inputText = document.getElementById("newProduct").value.trim();
        if (!inputText) return;

        document.getElementById("newProduct").value = "";

        setNewTask((oldSate)=>{
            const oldArray = JSON.parse(localStorage.newTask);
            const newTaskObj = { text: inputText, done: false };
            const updatedTasks = [...oldArray, newTaskObj];

            localStorage.newTask = JSON.stringify(updatedTasks);
            return updatedTasks;
        });
    }

return (
    <div className="container">
       <ListHeader onClickTaskCreate={onClickTaskCreate}></ListHeader>
       <ListBody taskList={newTask} setTaskList={setNewTask}></ListBody>
    </div>
)
}

export { ProductList }