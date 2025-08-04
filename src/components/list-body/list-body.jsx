import { DeleteElement } from "../delete-element/delete-element";
import { DoneElement } from "../done-element/done-element";

export const ListBody = (props) => {
    console.log(props);

    const onClickDone = (index) => {
      console.log("onClickDone", index);
      const updatedTasks = [...props.taskList];
      updatedTasks[index].done = !updatedTasks[index].done;
      localStorage.newTask = JSON.stringify(updatedTasks);
      props.setTaskList(updatedTasks);
    }
    
    const onClickDelete = (index) => {
      console.log("onClickDelete", index)
      const updatedTasks = props.taskList.filter((task, i) => i !== index);

      localStorage.newTask = JSON.stringify(updatedTasks);
      props.setTaskList(updatedTasks);
    }

    return (
        <div className="list-body">
            {
              props.taskList.length === 0 ? (
                <div>The list is empty...</div>
              ) : (
                <ul>
                  {props.taskList.map((task, index) => {
                    return (
                      <li 
                        key={index*4+"ListBody"}
                        style={{ 
                          textDecoration: task.done ? "line-through" : "none",
                          display: "flex",
                          justifyContent: "space-between",
                          paddingRight: "2rem"
                        }}
                      >
                        <div>
                          {index+1}. {task.text}
                        </div>
                        <div>
                          <DoneElement onClickDone={() => onClickDone(index)}></DoneElement>
                          <DeleteElement onClickDelete={() => onClickDelete(index)}></DeleteElement>
                        </div>
                      </li> 
                    )
                  })}
                </ul>
            )}
        </div>
    );
};