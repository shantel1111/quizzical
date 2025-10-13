export default function Intro(props){
    return (
        <div className="middle-section">
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <button onClick={props.onClick}>Start quiz</button>
        </div>
    )
}