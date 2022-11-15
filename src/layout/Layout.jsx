import React from 'react'
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import Question from '../pages/question/Question'
import AddQuestions from '../pages/add-questions/Add-questions'
import './layout.css'
import QuestionBank from '../pages/question-bank/QuestionBank'
import QuestionCategory from '../pages/question-category/QuestionCategory'
import EditQuestionCat from '../pages/question-category/edit-question-category/EditQuestionCat'
import QuestionBankList from '../pages/question-bank/questionBankList/QuestionBankList'
import Candidates from '../pages/candidates/Candidates'

const layout = () => {
    return (
        <div className='layout'>
            <div className='header-container'>
                <Header />
            </div>
            <div className='nav-container'>
                <Nav />
            </div>
            <div className='main-container' style={{overflowY: 'auto'}}>
                <Routes>
                    <Route path='/' element={<Dashboard />} />

                    {/* Question related routes */}
                    <Route path='/questions' element={<Question />} />
                    <Route path='/questions/add-questions' element={<AddQuestions />} />
                    <Route path='/questions/question-bank' element={<QuestionBank />} />
                    <Route path='/question-bank/:description/:id' element={<QuestionBankList />} />
                    <Route path='/questions/question-category' element={<QuestionCategory />} />
                    <Route path='/question-category/edit/:id' element={<EditQuestionCat />} />

                    {/* Candidate */}
                    <Route path='/candidates' element={<Candidates />} />

                </Routes>
            </div>
            <div className='footer-container'>
                <Footer />
            </div>
        </div>
    )
}

export default layout