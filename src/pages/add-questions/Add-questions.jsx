import React from 'react'
import './add-questions.css'

const AddQuestions = () => {
    return (
        <main className='add-questions'>
            <div className='add-question--container'>
                <h4>Add Question</h4>
                <form className='add-question--form'>
                    <select name="question-category" className="dropdown" id="question-category">
                        <option value="">--Select Category--</option>
                        <option value="english">English</option>
                        <option value="science">Science</option>
                        <option value="math">Math</option>
                        <option value="technology">Technology</option>
                    </select>

                    <select name="question-type" className="dropdown" id="question-type">
                        <option value="">--Select Type--</option>
                        <option value="single-choice">Single Choice</option>
                        <option value="multi-choice">Multi Choice</option>
                        <option value="fill-in-the-gap">Fill In The Gap</option>
                    </select>

                    <input type="text" placeholder='Question' className='question-input option-input' />

                    <h6>Fill the options and check the correct answer</h6>
                    
                    <div className='option-input--container'>
                        <input type="checkbox" className='option-checkbox'/>
                        <input type="text" placeholder='Option1' className='option-input'/>
                    </div>

                    <div className='option-input--container'>
                        <input type="checkbox" className='option-checkbox'/>
                        <input type="text" placeholder='Option2' className='option-input'/>
                    </div>

                    <div className='option-input--container'>
                        <input type="checkbox" className='option-checkbox'/>
                        <input type="text" placeholder='Option3' className='option-input'/>
                    </div>

                    <div className='option-input--container'>
                        <input type="checkbox" className='option-checkbox'/>
                        <input type="text" placeholder='Option4' className='option-input'/>
                    </div>
                    

                    <textarea name="instruction" id="" cols="30" rows="10" placeholder='Instructions'></textarea>

                    <button type='button' className="add-question-btn">Save</button>
                </form>
            </div>
        </main>
    )
}

export default AddQuestions