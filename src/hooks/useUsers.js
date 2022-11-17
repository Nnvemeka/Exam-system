import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Query functions
const getUsers = () => {
    return axios.get('http://localhost:4000/Users')
}

// Query hooks
export const useUsers = () => {
    return useQuery(['users'], getUsers)
}