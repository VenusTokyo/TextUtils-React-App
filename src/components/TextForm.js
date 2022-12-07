import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("UpperCase was clicked")
        setText(text.toUpperCase())
    }
    const handleLowClick=()=>{
        console.log("LowerCase was clicked")
        setText(text.toLowerCase())
    }
    const handleItalics=()=>{
        console.log("LowerCase was clicked")
        setText(text.toLowerCase())
    }
    const textArea=document.querySelector('textarea')
    const handleBold=()=>{
        console.log("LowerCase was clicked")
        // textArea.addtagName('b')
        // setText(text)
    }
    
    
    const handleOnChange=(event)=>{
        console.log("changed")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <> 
        <div className='container'>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                {/* <label for="MyBox" className="form-label">Example text area</label> */}
                <textarea className="form-control" onChange={handleOnChange} value={text} id="MyBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleItalics}>Convert to <i>Italics</i></button>
            <button className="btn btn-primary mx-2" onClick={handleBold}>Convert to <b>Bold</b></button>
        </div>
        <div className="container my-3">
            <h2>Your Text summary</h2>
            <p>{text.split(" ").length} Words and {text.length} characters</p>
            <p>{ 0.008*text.split(" ").length} Minutes Reading time</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
        
    )
}
