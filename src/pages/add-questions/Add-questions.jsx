import React from 'react'
import { useCategoriesData } from '../../hooks/useCategories'
import { useQuestionsData } from '../../hooks/useQuestions'
import './add-questions.css'

const AddQuestions = () => {
    const { data } = useQuestionsData()
    const { data: categories } = useCategoriesData()
    
    return (
        <main className='add-questions'>
            <div className='add-question--container'>
                <h4>Add Question</h4>
                <form className='add-question--form'>
                    <select name="categoryId" className="dropdown" id="categoryId">
                        <option value="">--Select Category--</option>
                        {categories?.data.map((cat) => (
                            <option value={cat.id} key={cat.id}>{cat.description}</option>
                        ))}
                    </select>

                    <select name="type" className="dropdown" id="type">
                        <option value="">--Select Type--</option>
                        <option value="single choice">Single Choice</option>
                        <option value="multi choice">Multi Choice</option>
                        <option value="fill in the gap">Fill In The Gap</option>
                    </select>

                    <input type="text" placeholder='Question' name='text' className='question-input option-input' />

                    <h6>Fill the options and check the correct answer</h6>

                    <div className='option-input--container'>
                        <input type="checkbox" className='option-checkbox' name='answer1'/>
                        <input type="text" placeholder='Option1' className='option-input' name='option1'/>
                    </div>

                    <div className='option-input--container'>
                        <input type="checkbox" className='option-checkbox' name='answer2'/>
                        <input type="text" placeholder='Option2' className='option-input' name='option2'/>
                    </div>

                    <div className='option-input--container'>
                        <input type="checkbox" className='option-checkbox' name='answer3'/>
                        <input type="text" placeholder='Option3' className='option-input' name='option3'/>
                    </div>

                    <div className='option-input--container'>
                        <input type="checkbox" className='option-checkbox' name='answer4'/>
                        <input type="text" placeholder='Option4' className='option-input' name='option3'/>
                    </div>


                    <textarea name="instruction" cols="30" rows="10" placeholder='Instructions' ></textarea>

                    <button type='button' className="add-question-btn">Save</button>
                </form>
            </div>
        </main>
    )
}

export default AddQuestions