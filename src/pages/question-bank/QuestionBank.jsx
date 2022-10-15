import React from 'react'
import './questionBank.css'

const QuestionBank = () => {
  return (
    <main className='questionBank'>
        <h3>Question Bank</h3>
        <div className="bank-container">
            <div className="left">
                <div className="category">English</div>
            </div>
            <div className="right">
                <div className="number">Number of questions: 20</div>
                <div className="view">View Questions</div>
            </div>
        </div>
        <div className="bank-container">
            <div className="left">
                <div className="category">Science</div>
            </div>
            <div className="right">
                <div className="number">Number of questions: 15</div>
                <div className="view">View</div>
            </div>
        </div>
        <div className="bank-container">
            <div className="left">
                <div className="category">Math</div>
            </div>
            <div className="right">
                <div className="number">Number of questions: 25</div>
                <div className="view">View Questions</div>
            </div>
        </div>
        <div className="bank-container">
            <div className="left">
                <div className="category">Technology</div>
            </div>
            <div className="right">
                <div className="number">Number of questions: 12</div>
                <div className="view">View Questions</div>
            </div>
        </div>
    </main>
  )
}

export default QuestionBank