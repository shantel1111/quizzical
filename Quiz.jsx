import {decode} from 'html-entities';

export default function Quiz(props){
    console.log(props.data)
    
    const quizEl = props.data.map(function(quiz){
        return <section className="quiz-box">
        <h2>{decode(quiz.question)}</h2>
        <button>{decode(quiz.correct_answer)}</button>
        <button>{decode(quiz.incorrect_answers[0])}</button>
        <button>{decode(quiz.incorrect_answers[1])}</button>
        <button>{decode(quiz.incorrect_answers[2])}</button>
        <div className="grey-line"></div>
        </section>
    })
    
    
    return (
        <div className="quiz-section">
        
        {quizEl}
        
        <button className="check-answers">Check answers</button>
        </div>
    )
}


//  put the answers all into a randomised array
//  track correct answer and turn it green 
