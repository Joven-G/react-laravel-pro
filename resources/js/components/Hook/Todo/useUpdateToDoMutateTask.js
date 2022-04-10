import axios from 'axios';
import { useMutation } from "react-query";

const useUpdateToDoMutateTask = () => {
    const updateToDoMutation = useMutation((toDo) => axios.put("/api/toDos/" + toDo.id, { title: toDo.title }));
    return { updateToDoMutation };
}

export default useUpdateToDoMutateTask;
