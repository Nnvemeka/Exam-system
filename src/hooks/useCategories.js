import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchCategories = () => {
    return axios.get('http://localhost:4000/Categories')
}

const addCategory = (cat) => {
    return axios.post('http://localhost:4000/Categories', cat)
}

export const useCategoriesData = () => {
    return useQuery(['categories'], fetchCategories)
}

export const useAddCategoriesData = () => {
    const queryClient = useQueryClient()
    return useMutation(addCategory, {
        onMutate: async (newCategory) => {
            await queryClient.cancelQueries(['categories'])
            const previousCategoriesData = queryClient.getQueryData(['categories'])
            queryClient.setQueryData(['categories'], (oldData) => {
                return {
                    ...oldData,
                    data: [
                        ...oldData.data,
                        newCategory
                    ]
                }
            })

            return {
                previousCategoriesData
            }
        },
        onError: (_err, _categories, context) => {
            queryClient.setQueryData(['categories'], context.previousCategoriesData)
        },
        onSettled: () => {
            queryClient.invalidateQueries(['categories'])
        }
    })
}