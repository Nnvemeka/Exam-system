import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuestionsData } from '../../../hooks/useQuestions'
import './questionBankList.css'

const QuestionBankList = () => {
    const { id } = useParams()

    const { data: question, isLoading, isFetching } = useQuestionsData()

    const listOfQuestions = question?.data.filter((ques) => ques.categoryId === Number(id))

    if (isLoading && isFetching) {
        return <div className='loading'>Loading...</div>
    }

    return (
        <main className='questionBankList'>
            <h3>Number of questions: {listOfQuestions.length}</h3>
            {
                listOfQuestions.map((question, i) => (
                    <div key={i} className="questionBankList--container">
                        <h2 className='questionBankList--index'>{i + 1}.</h2>
                        <div className="questionBankList--items">
                            <p className='questionBankList--title'><span>Question:</span> {question.text}</p>
                            {question.type.map((t, i) => (
                                <p key={i} className="questionBankList--type"><span>Type:</span> {t}</p>
                            ))}

                            <div className="questionBankList--option-container">
                                {question.options.map((o, i) => (
                                    <p key={i} className="questionBankList--option"><span>Option{i + 1}:</span> {o}</p>
                                ))}
                            </div>

                            {question.answer.map((a, i) => (
                                <p key={i} className="questionBankList--answer"><span>Answer:</span> {a}</p>
                            ))}
                        </div>
                    </div>

                ))
            }
        </main>
    )
}

export default QuestionBankList