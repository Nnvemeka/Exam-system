import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetCategoryData, useUpdateCategoryData } from '../../../hooks/useCategories'
import './editQuestionCat.css'


const EditQuestionCat = () => {
    const navigate = useNavigate()

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

    const goBack = () => {
        navigate(-1)
    }

    if (getCat && isFetching) {
        <h2 className='loading'>Loading...</h2>
    }

    return (
        <main className='editQuestionCat'>
            {getCat && isFetching ? <h2 className='loading'>Loading...</h2> : (
                <>
                    {isLoading ? ('Updating category...') : (
                        <>
                            <div className="editQuestionCat-header">
                                <h4>Edit Category</h4>
                                <button className='go-back-btn' onClick={goBack}>&larr; Go back</button>
                            </div>
                            {isError && <div>An errror occurred: {error.message}</div>}
                            {isSuccess && <div>Category updated!</div>}

                            <div className='editQuestionCat-form'>
                                <input type='text' name="description" placeholder={category.description} onChange={handleChange} />
                                <button className='editQuestionCat-btn' onClick={handleUpdate}>Update</button>
                            </div>
                        </>
                    )}
                </>
            )}
        </main>
    )
}

export default EditQuestionCat