import React from 'react'
import Card from '../../components/card/Card'
import "./question.css"

const Question = () => {
  return (
    <div className="questions">
      <Card
        path="add-question"
        title="Add Question"
        icon={<ion-icon name="pencil-outline" class="card-icon"></ion-icon>}
        details="Create new question for a test"
      />

      <Card
        path="question-bank"
        title="Question Bank"
        icon={<ion-icon name="albums-outline" class="card-icon"></ion-icon>}
        details="View all the questions created"
      />

      <Card
        path="question-category"
        title="Question Category"
        icon={<ion-icon name="copy-outline" class="card-icon"></ion-icon>}
        details="View all question categories"
      />

      <Card
        path="marks"
        title="Marks"
        icon={<ion-icon name="help-outline" class="card-icon"></ion-icon>}
        details="View all marks in all assessments"
      />
    </div>
  )
}

export default Question