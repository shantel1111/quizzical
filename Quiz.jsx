export default function Quiz(props){
    console.log(props.data)
    return (
        <div className="quiz-section">
        <section className="quiz-box">
        <h2></h2>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <div className="grey-line"></div>
        </section>
        
        <button className="check-answers">Check answers</button>
        </div>
    )
}