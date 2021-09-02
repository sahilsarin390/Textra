import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        console.log("Lowercase button was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>It will take {0.008 * text.split(" ").length} minutes to read the text.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
