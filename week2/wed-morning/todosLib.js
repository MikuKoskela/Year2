
todosArray = []
nextId = 1


function addOne(task, completed, dueDate) {
     if(!task || !completed || !dueDate){
        return false;
    };
    const newTodo = {
        id: nextId++,
        task,
        completed,
        dueDate
    }
    todosArray.push(newTodo)
    return(newTodo)

}

function getAll() {
   
    return todosArray;
}

function findById(id){
    const numericId = Number(id)
    const todo = todosArray.find(item => item.id === numericId)
    return todo || false
}

function updateOneById(id, updatedData) {
    const todo = findById(id)

    if (todo){ 
        if (updatedData.task) todo.task = updatedData.task;
        if (updatedData.completed !== undefined) todo.completed = updatedData.completed;
        if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
        return todo
    }
     return false;
}

function deleteOneById(id){
    const todo = findById(id);
    if (todo) {
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(todo => todo.id !== Number(id))
        return todosArray.length < initialLength;
    }
    return false


}
if (require.main === module) {
    console.log("getAll called:", getAll());
    console.log("addOne called:",addOne("Walking the dog", true, "27.8"))
    console.log("findById called:", findById(1))
    console.log("updateOneById called", updateOneById(1, {task: "Wash dishes", completed: false}))
    console.log("deleteOneById called", deleteOneById(1))
    console.log("getAll called:", getAll());

}

const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;