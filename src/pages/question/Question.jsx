import React from 'react'
import Card from '../../components/card/Card'
import "./question.css"

const Question = () => {
  return (
    <div className="questions">
      <Card title="Add Question" icon={<ion-icon name="newspaper-outline" class="nav-icon"></ion-icon>
      } details="Create new question for a test" />
      <Card title="Question Bank" icon={<ion-icon name="newspaper-outline" class="nav-icon"></ion-icon>
      } details="View all the questions created" />
      <Card title="Question Category" icon={<ion-icon name="newspaper-outline" class="nav-icon"></ion-icon>
      } details="View all question categories" />
      <Card title="Marks" icon={<ion-icon name="newspaper-outline" class="nav-icon"></ion-icon>
      } details="View all marks in all assessments" />
    </div>
  )
}

export default Question