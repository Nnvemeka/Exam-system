import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Query functions

const fetchCategories = () => {
    return axios.get('http://localhost:4000/Categories')
}

const addCategory = (cat) => {
    return axios.post('http://localhost:4000/Categories', cat)
}

const getCategory = (id) => {
    return axios.get(`http://localhost:4000/Categories/${id}`)
}

const updateCategory = ({ id, ...cat }) => {
    return axios.put(`http://localhost:4000/Categories/${id}`, cat)
}

const deleteCategory = (id) => {
    return axios.delete(`http://localhost:4000/Categories/${id}`)
}

// Query hooks
export const useCategoriesData = () => {
    return useQuery(['categories'], fetchCategories)
}

export const useGetCategoryData = (id) => {
    return useQuery(['category', id], () => getCategory(id))
}

export const useUpdateCategoryData = (id) => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation(updateCategory, {
        onSuccess: (data) => {
            queryClient.setQueryData(['category', id], data)
            queryClient.invalidateQueries(['categories'])
            navigate(-1)
        }
    })
}

export const useDeleteCategoryData = (id) => {
    const queryClient = useQueryClient()

    return useMutation(deleteCategory, {
        onSuccess: () => {
            queryClient.invalidateQueries(['categories'])
        }
    })
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