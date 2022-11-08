import React from 'react'
import { Link } from 'react-router-dom'
import { useCategoriesData } from '../../hooks/useCategories'
import './questionBank.css'

const QuestionBank = () => {

    const { data: categories } = useCategoriesData()

    return (
        <main className='questionBank'>
            <h3>Question Bank</h3>

            {categories?.data.map((cat) => (
                <div key={cat.id} className="bank-container">
                    <div className="left">
                        <div className="category">{cat.description}</div>
                    </div>
                    <div className="right">
                        <Link
                            to={`/question-bank/${cat.description}/${cat.id}`}
                            className="view">
                            View Questions
                        </Link>
                    </div>
                </div>
            ))}

        </main>
    )
}

export default QuestionBank