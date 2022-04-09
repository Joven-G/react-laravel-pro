import axios from 'axios';
import {useMutation} from "react-query";

const useUpdateToDoMutateTask = () => {
    const updateTodoMutation = useMutation((toDo) => axios.put("/api/toDos/" + toDo.id,{title:toDo.title}));
    return {updateTodoMutation};
}

export default useUpdateToDoMutateTask;
