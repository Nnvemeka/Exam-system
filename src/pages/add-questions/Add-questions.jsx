import React, { useState } from 'react'
import { useCategoriesData } from '../../hooks/useCategories'
import { useAddQuestionData } from '../../hooks/useQuestions'
import './add-questions.css'

const AddQuestions = () => {
    const [question, setQuestion] = useState({
        categoryId: '',
        type: '',
        text: '',
        answer1: '',
        option1: '',
        answer2: '',
        option2: '',
        answer3: '',
        option3: '',
        answer4: '',
        option4: '',
        instruction: ''
    })
    const [answer, setAnwser] = useState()

    const { data: categories } = useCategoriesData()
    const {mutate, isLoading, isSuccess} = useAddQuestionData()

    const handleChange = (e) => {
        const { name, value } = e.target
        setQuestion({ ...question, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (question.answer1 != null) {
            setAnwser(question.option1)
        } else if (question.answer2 != null) {
            setAnwser(question.option2)
        } else if (question.answer3 != null) {
            setAnwser(question.option3)
        } else {
            setAnwser(question.option4)
        }

        const payload = {
            categoryId: question.categoryId,
            type: [question.type],
            text: question.text,
            options: [question.option1, question.option2, question.option3, question.option4],
            answer: [answer],
            instruction: question.instruction
        }

        mutate(payload)
    }

    return (
        <main className='add-questions'>
            <div className='add-question--container'>
                <h4>Add Question</h4>
                {isSuccess && ('Question added successfully!')}
                <form className='add-question--form'>
                    <select name="categoryId" onChange={handleChange} className="dropdown" id="categoryId">
                        <option value="">--Select Category--</option>
                        {categories?.data.map((cat) => (
                            <option value={cat.id} key={cat.id}>{cat.description}</option>
                        ))}
                    </select>

                    <select name="type" onChange={handleChange} className="dropdown" id="type">
                        <option value="">--Select Type--</option>
                        <option value="single choice">Single Choice</option>
                        <option value="multi choice">Multi Choice</option>
                        <option value="fill in the gap">Fill In The Gap</option>
                    </select>

                    <input type="text" placeholder='Question' name='text' onChange={handleChange} className='question-input option-input' />

                    <h6>Fill the options and check the correct answer</h6>

                    <div className='option-input--container'>
                        <input type="checkbox" className='option-checkbox' name='answer1' onChange={handleChange} />
                        <input type="text" placeholder='Option1' className='option-input' name='option1' onChange={handleChange} />
                    </div>

                    <div className='option-input--container'>
                        <input type="checkbox" className='option-checkbox' name='answer2' onChange={handleChange} />
                        <input type="text" placeholder='Option2' className='option-input' name='option2' onChange={handleChange} />
                    </div>

                    <div className='option-input--container'>
                        <input type="checkbox" className='option-checkbox' name='answer3' onChange={handleChange} />
                        <input type="text" placeholder='Option3' className='option-input' name='option3' onChange={handleChange} />
                    </div>

                    <div className='option-input--container'>
                        <input type="checkbox" className='option-checkbox' name='answer4' onChange={handleChange} />
                        <input type="text" placeholder='Option4' className='option-input' name='option4' onChange={handleChange} />
                    </div>


                    <textarea name="instruction" cols="30" rows="10" placeholder='Instructions' onChange={handleChange} ></textarea>

                    <button onClick={handleSubmit} type='button' className="add-question-btn">Save</button>
                </form>
                {isLoading && ('Adding question...')}
            </div>
        </main>
    )
}

export default AddQuestions