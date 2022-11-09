import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuestionsData } from '../../../hooks/useQuestions'

const QuestionBankList = () => {
    const { id } = useParams()

    const { data: question, isLoading, isFetching } = useQuestionsData()

    const listOfQuestions = question?.data.filter((ques) => ques.categoryId === Number(id))

    if (isLoading && isFetching) {
        return <div className='loading'>Loading...</div>
    }

    return (
        <main>
            <h3>Number of questions: {listOfQuestions.length}</h3>
            {
                listOfQuestions.map((question, i) => (
                    <div key={i} style={{marginBottom: '30px'}}>
                        <h4>Title: {question.text}</h4>
                        {question.type.map((t, i) => (
                            <p key={i}>Type: {t}</p>
                        ))}

                        {question.options.map((o, i) => (
                            <p key={i}>Option {i + 1}: {o}</p>
                        ))}

                        {question.answer.map((a, i) => (
                            <p key={i}>Answer: {a}</p>
                        ))}
                    </div>

                ))
            }
        </main>
    )
}

export default QuestionBankList