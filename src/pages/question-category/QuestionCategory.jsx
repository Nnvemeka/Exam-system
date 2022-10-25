import React, { useState } from 'react'
import { useAddCategoriesData, useCategoriesData } from '../../hooks/useCategories'
import './questionCategory.css'

const QuestionCategory = () => {
    const [category, setCategory] = useState('')

    const { isLoading, data } = useCategoriesData()
    const {mutate: addCatergory} = useAddCategoriesData()

    const handleSubmit = (e) => {
        e.preventDefault()
        addCatergory({description: category})

        e.target.reset()
    }

    if (isLoading) {
        return <h4 className='cat-loading'>Loading...</h4>
    }

    return (
        <main className="question-category">
            <div className="question-category--container">
                <div className="add-category">
                    <h4>Add New Category</h4>
                    <form className='addCatergory-form' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Category' onChange={(e) => setCategory(e.target.value)} className='question-category--input' />
                        <button type='submit' disabled={!category} className='question-category--btn'>Save</button>
                    </form>
                </div>
                <div className="category-list">
                    <h4>Category List</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data?.data.map((cat, i) => {
                                return (
                                    <tr key={i}>
                                        <th>{cat.description}</th>
                                        <td>
                                            <button>
                                                <ion-icon name="create-outline" class="action-icon edit"></ion-icon>
                                            </button>
                                            <button>
                                                <ion-icon name="trash-outline" class="action-icon trash"></ion-icon>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default QuestionCategory