import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        
        setText(text.toUpperCase())
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLowClick=()=>{
        
        setText(text.toLowerCase())
        props.showAlert("Converted to LowerCase","success")

    }
    const handleClearClick=()=>{
        setText('')

        props.showAlert("Cleared","success")

    }
    
    
    const handleCopyClick=()=>{
        
       
       
        navigator.clipboard.writeText(text)
       
       props.showAlert("Text copied to Clipboard","success")

    }

    const handleExtraSpace=()=>{
        let newText =text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces","success")

    }
    const handleOnChange=(event)=>{
       
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <> 
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                {/* <label for="MyBox" className="form-label">Example text area</label> */}
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}} value={text} id="MyBox" rows="8"></textarea>
            </div>
            {/* onclick takes a function and not a function call */}
            <button disabled={text.length===0} className={`btn btn-${props.color} mx-2 my-1`} onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button disabled={text.length===0} className={`btn btn-${props.color} mx-2 my-1`} onClick={handleLowClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.color} mx-2 my-1`} onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.color} mx-2 my-1`} onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.color} mx-2 my-1`} onClick={handleExtraSpace}>Remove Extra Spaces</button>
            {/* <button className="btn btn-primary mx-2" onClick={handleItalics}>Convert to <i>Italics</i></button>
            <button className="btn btn-primary mx-2" onClick={handleBold}>Convert to <b>Bold</b></button> */}
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
            <p>{ 0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Reading time</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
        
    )
}
