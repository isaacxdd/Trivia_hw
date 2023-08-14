import { useState } from "react";

function ControlledForm(props){

    const[formData, setFormData] = useState({
        randomQuestion: "",
    });

    const handleChange = (event) => {
        const newState = {...formData}
        newState[event.target.name] = event.target.value
        setFormData(newState)
    }

    const fetchQuestion = async(randomQuestion) => {
        const url = 'http://jservice.io/api/random';
        const response = await fetch(url)
        // console.log(response)
        const data = await response.json();
        // console.log(data[0])
        props.setQuestion(data)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchQuestion(formData.randomQuestion)
        setFormData({randomQuestion: ""})
    }

    return <div className="ControlledForm">
        <form onSubmit={handleSubmit}>
            <input className="Question-button" type='submit' name="randomQuestion" value="Random Question" onChange={handleChange} />
        </form>         
    </div>


}

export default ControlledForm;