import Question from './Question'
import sun from '../assets/images/blob 5.png'
import floorCorner from '../assets/images/blobs.png'
import { useState, useEffect } from 'react'
import data from '../data';

export default function Questions() {
    //  const [questions, setQuestions] = useState([])
    const questions = data;
    const [answers, setAnswers] = useState(initializeAnswers());
    const [checked, setChecked] = useState(false)
    function initializeAnswers() {
        const sol = []
        questions?.map(questionInfo => sol.push({ question: questionInfo.question, selectedAnswer: null, correctAnswer: questionInfo.correct_answer }))
        return sol
    }
    function updateSelectedAnswer(question, answer) {
        setAnswers(prevAnswers => prevAnswers.map(ans => ans.question === question ? { ...ans, selectedAnswer: answer } : ans))
    }
    const score = answers.reduce(
        (acc, ans) => ans.selectedAnswer === ans.correctAnswer ? acc + 1 : acc,
        0
    )
    function getScore() {//AF: checked he answerd to ALL the questions!
        let score = 0;
        answers.map(ans => ans.selectedAnswer === ans.correctAnswer ? score++ : score)
        return score
    }
    function allQuestionsAnswered() {
        return answers.filter(ans => ans.selectedAnswer === null).length > 0 ? false : true
    }
    // useEffect(
    //     () => {
    //         !checked && fetch('https://opentdb.com/api.php?amount=5&category=19&difficulty=medium')
    //             .then(data => data.json()).then(data => { console.log(data.results); setQuestions(data.results) })
    //     }
    //     , [checked])

    // if (!questions) {
    //     return (<div>Loading...</div>)
    // }

    return (
        <div className="questions-page-container">
            <img src={sun} className='sun' />
            <div className='all-questions'>
                {questions?.map(question => <Question questionInfo={question}
                    updateSelectedAnswer={updateSelectedAnswer}
                    answerSpec={answers.filter(answer => answer.question === question.question)[0]?.selectedAnswer} checked={checked} />)}
            </div>
            {checked ?
                <div className='score'>
                    <div className='score-text'>

                        You scored  {getScore()}/{answers.length} correct answers
                    </div>
                    <button className='btn-play-again' onClick={() => setChecked(prevStatus => !prevStatus)}>Play again</button>
                </div>
                : <div className='check'>
                    <button className={`btn-check ${answers.filter(ans => ans.selectedAnswer === null).length > 0 ? 'btn-disabled' : ''}`} onClick={() => { setChecked(prevStatus => !prevStatus); }}
                        disabled={answers.filter(ans => ans.selectedAnswer === null).length > 0}>Check answers</button>
                </div>}
            <img src={floorCorner} className='floor-corner' />
        </div>
    )
}