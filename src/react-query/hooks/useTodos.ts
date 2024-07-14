import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {
  // const fetchData = () => axios.get<Todo[]>("/todos").then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
