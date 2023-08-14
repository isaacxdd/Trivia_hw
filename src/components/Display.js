import {useState} from 'react'

function Display(props){

    const question = props.question

    const [counter, setCounter] = useState(0)

    const [hideAnswer, setHideAnswer] = useState(true);

    const clickAnswer = () => setHideAnswer(!hideAnswer);

    if (question[0]) {
        return <div className='Display'>
            <div>
                
                <div className='Score'>
                    <h2 style={{color: 'yellow'}}>SCORE: {counter}</h2>
                    <div>
                        <button className='Score-buttons' onClick={() => setCounter(counter + 100)}>+</button>
                        <button className='Score-buttons' onClick={() => setCounter(counter - 100)}>-</button>
                        <button className='Reset-button' onClick={() => setCounter(0)}>Reset</button>
                    </div>
                </div>
                <div className='Question-body'>
                    <h2>QUESTION: {question[0].question}</h2>
                    <h3>CATEGORY: {question[0].category.title}</h3>
                    <h3>POINTS: {question[0].value}</h3>
                </div>
            </div>

            <div className='Answer-body'>
                <h2>ANSWER: <button className='Answer-button' onClick={clickAnswer}>{hideAnswer ? 'Reveal Question': 'Hide Question'}</button></h2>
                <h2 style={{color: 'limeGreen'}}>{!hideAnswer ? question[0].answer : null}</h2>
            </div>
        </div>
    }else {
        return <h4 className='Click'>Click to play!</h4>
    }

}

export default Display;