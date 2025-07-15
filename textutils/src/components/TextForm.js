import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase Button Clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const [text,setText] = useState('Enter Your text Here');
    return (
    <div>
        <h1 className="text-center">{props.heading}</h1>
        <hr />
        <div className="mb-3">
            
            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
            <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert To Uppercase</button>
        </div>
    </div>
  )
}
