import React from 'react'
import './questionCategory.css'

const QuestionCategory = () => {
    return (
        <main className="question-category">
            <div className="question-category--container">
                <div className="add-category">
                    <h4>Add New Category</h4>
                    <form className='addCatergory-form'>
                        <input type="text" placeholder='Category' className='question-category--input' />
                        <button type='button' className='question-category--btn'>Save</button>
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
                            <tr>
                                <th>English</th>
                                <td>Edit | Delete</td>
                            </tr>
                            <tr>
                                <th>Science</th>
                                <td>Edit | Delete</td>
                            </tr>
                            <tr>
                                <th>Technology</th>
                                <td>Edit | Delete</td>
                            </tr>
                            <tr>
                                <th>Math</th>
                                <td>Edit | Delete</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default QuestionCategory