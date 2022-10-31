import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCategoryData, useUpdateCategoryData } from '../../../hooks/useCategories'
// import { useQueryClient } from '@tanstack/react-query'


const EditQuestionCat = () => {
    const { id } = useParams()

    const { isLoading: getCat, isFetching, data } = useGetCategoryData(id)
    const { mutate, isLoading, isSuccess, isError, error } = useUpdateCategoryData(data?.data)
    const category = data?.data
    const [cat, setCat] = useState({ ...category })

    const handleChange = (e) => {
        const { name, value } = e.target
        setCat({ id, ...cat, [name]: value })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        mutate(cat)
    }

    if (getCat && isFetching) {
        <h2 className='loading'>Loading...</h2>
    }

    return (
        <main className='editQuestionCat'>
            {getCat ? <h2 className='loading'>Loading...</h2> : (
                <>
                    {isLoading ? ('Updating category...') : (
                        <>
                            <h4>Edit Category</h4>
                            {isError ? <div>An errror occurred: {error.message}</div> : null}
                            {isSuccess ? <div>Category updated!</div> : null}
                            <input type='text' name="description" placeholder={data?.data.description} onChange={handleChange} />
                            <button onClick={handleUpdate}>Update</button>
                        </>
                    )}
                </>
            )}
        </main>
    )
}

export default EditQuestionCat