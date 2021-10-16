import React, { useState } from 'react';
import questions from '../constants/text';
//constants
import * as constants from '../constants/const';
//css
import './quiz.css';

function Quiz(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    //const [message, setMessage] = useState("hola");

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
        
        /*if(showScore === true && score <= 3){
            setMessage(constants.SCORED_CASES_01)
        }*/
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
                            <ul class="list-group">
                                <li 
                                class="list-group-item"
                                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                    {answerOption.answerText}    
                                </li>
                            </ul>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz;
