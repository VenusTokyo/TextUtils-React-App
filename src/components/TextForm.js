import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("UpperCase was clicked")
        setText(text.toUpperCase())
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLowClick=()=>{
        console.log("LowerCase was clicked")
        setText(text.toLowerCase())
        props.showAlert("Converted to LowerCase","success")

    }
    const handleClearClick=()=>{
        setText('')

        props.showAlert("Cleared","success")

    }
    
    
    const handleCopyClick=()=>{
        console.log("im copy")
        var text=document.getElementById('MyBox')
        text.select();
        // text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to Clipboard","success")

    }

    const handleExtraSpace=()=>{
        let newText =text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces","success")

    }
    const handleOnChange=(event)=>{
        console.log("changed")
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
            <button disabled={text.length===0} className={`btn btn-primary mx-2 my-1`} onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button disabled={text.length===0} className={`btn btn-primary mx-2 my-1`} onClick={handleLowClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className={`btn btn-primary mx-2 my-1`} onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className={`btn btn-primary mx-2 my-1`} onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className={`btn btn-primary mx-2 my-1`} onClick={handleExtraSpace}>Remove Extra Spaces</button>
            {/* <button className="btn btn-primary mx-2" onClick={handleItalics}>Convert to <i>Italics</i></button>
            <button className="btn btn-primary mx-2" onClick={handleBold}>Convert to <b>Bold</b></button> */}
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} Words and {text.length} characters</p>
            <p>{ 0.008*text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes Reading time</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
        
    )
}
