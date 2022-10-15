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

const layout = () => {
    return (
        <div className='layout'>
            <div className='header-container'>
                <Header />
            </div>
            <div className='nav-container'>
                <Nav />
            </div>
            <div className='main-container'>
                <Routes>
                    <Route path='/' element={<Dashboard />} />

                    {/* Question related routes */}
                    <Route path='/questions' element={<Question />} />
                    <Route path='/questions/add-questions' element={<AddQuestions />} />
                    <Route path='/questions/question-bank' element={<QuestionBank />} />
                    <Route />
                    <Route />
                </Routes>
            </div>
            <div className='footer-container'>
                <Footer />
            </div>
        </div>
    )
}

export default layout