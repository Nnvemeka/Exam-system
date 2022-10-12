import React from 'react'
import './add-questions.css'

const AddQuestions = () => {
  return (
    <div className='add-questions'>
        <main className='add-question--container'>
            <form className='add-question--form'>
                <select name="question-category" id="question-category">
                    <option value="">SELECT QUESTION CATEGORY</option>
                    <option value="english">English</option>
                    <option value="science">Science</option>
                    <option value="math">Math</option>
                    <option value="technology">Technology</option>
                </select>

                <select name="question-type" id="question-type">
                    <option value="">SELECT QUESTION TYPE</option>
                    <option value="single-choice">Single Choice</option>
                    <option value="multi-choice">Multi Choice</option>
                    <option value="fill-in-the-gap">Fill In The Gap</option>
                </select>

                <input type="text" placeholder='Question' />
                <input type="text" placeholder='Option1' />
                <input type="text" placeholder='Option2' />
                <input type="text" placeholder='Option3' />
                <input type="text" placeholder='Option4' />

                <textarea name="instruction" id="" cols="30" rows="10" placeholder='Instructions'></textarea>
            </form>
        </main>
    </div>
  )
}

export default AddQuestions