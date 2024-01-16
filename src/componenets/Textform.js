import React, {useState} from 'react'

export default function Textform(props) {
    const ConvToUp = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const ChangeVal = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder='Enter the Text' onChange={ChangeVal} id="myform" rows="8"></textarea>
            </div>
            <button className="btn btn-upper" onClick={ConvToUp}>Uppercase</button>
        </div>

        <div className="container">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words   {text.length} characters</p>
            <p>{0.007 * text.split(" ").length} Minutes read time</p>
        </div>
        
        </>
    )
}
