import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("UpperCase was clicked")
        setText(text.toUpperCase())
    }
    const handleOnChange=(event)=>{
        console.log("changed")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                {/* <label for="MyBox" className="form-label">Example text area</label> */}
                <textarea className="form-control" onChange={handleOnChange} value={text} id="MyBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</button>
        </div>
    )
}
