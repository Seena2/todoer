//create Array for the todo list

let todoListArray=[];

//factory function to create todo lists
const createTodo=(title, description,dueDate,priority,notes,checklist)=>{
    console.log('creating todo list...');
    console.log({title, description,dueDate,priority,notes,checklist});
    console.log("pushing this object to todoListArray")
    todoListArray.push({title, description,dueDate,priority,notes,checklist});
    console.log(todoListArray);

    return {title, description,dueDate,priority,notes,checklist};
}

export default createTodo;
