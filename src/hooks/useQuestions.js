import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// Query functions

const getQuestions = () => {
    return axios.get('http://localhost:4000/Questions')
}

const addQuestion = (question) => {
    return axios.post('http://localhost:4000/Questions', question)
}

// Query hooks

export const useQuestionsData = () => {
    return useQuery(['questions'], getQuestions)
}

export const useAddQuestionData = () => {
    return useMutation(addQuestion)
}