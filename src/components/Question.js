import { useEffect, useState } from "react";

export default function Question({ questionInfo, updateSelectedAnswer, answerSpec, checked }) {
    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };
    const allAnswers = [...questionInfo.incorrect_answers, questionInfo.correct_answer];
    const [shuffeldAnswers, setShuffeldAnswers] = useState([]); //[allAnswers]
    useEffect(
        () => {
            const ans = shuffle(allAnswers)
            setShuffeldAnswers(ans)
        }
        , [])

    function getClassName(ans) {
        let classAns = 'answer-option '
        if (checked) {
            classAns += questionInfo.correct_answer === ans ? 'correct-solution' : ''
            classAns += questionInfo.incorrect_answers?.filter(ans => ans === answerSpec).length > 0 && answerSpec === ans ? 'incorrect-solution' : ''
        } else {
            classAns += answerSpec === ans ? "selected-ans" : ""
        }
        return classAns
    }
    return (

        <div className="one-question">
            <h3>{questionInfo.question}</h3>
            <div className="answers-container">
                {shuffeldAnswers?.map((ans, index) =>
                    <div key={`${ans}-${index}`}
                        className={getClassName(ans)}
                        onClick={
                            () => { !checked && updateSelectedAnswer(questionInfo.question, ans); }}>{ans}</div>)}
            </div>


        </div>
    )
}