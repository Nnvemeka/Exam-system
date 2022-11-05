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
    const queryClient = useQueryClient()
    return useMutation(addQuestion, {
        onMutate: async (newQuestion) => {
            await queryClient.cancelQueries(['questions'])
            const previousQuestionsData = queryClient.getQueryData(['questions'])
            queryClient.setQueryData(['questions'], (oldData) => {
                return {
                    ...oldData,
                    newQuestion
                }
            })

            return {
                previousQuestionsData
            }
        },
        onError: (_err, _questions, context) => {
            queryClient.setQueryData(['questions'], context.previousQuestionsData)
        },
        onSettled: () => {
            queryClient.invalidateQueries(['questions'])
        }
    })
}