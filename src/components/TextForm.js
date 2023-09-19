import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        //console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);  //How to Set State
        props.showAlert("Converted to Upper case !","success");
    }
    const handleLoClick =()=>{
        //console.log("Uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);  //How to Set State
        props.showAlert("Converted to Lower case !","success");
    }
    const handleOnChange =(event)=>{
        //console.log("handleOnChange was clicked");
        setText(event.target.value);            //---->event.target.value How to handle Event
        //setText(event.target.value);  How to Set State
    }

    const handleClearText =()=>{
        setText("");  //How to Set State
        props.showAlert("Clear Texted !","success");
    }

    const handleCopy =()=>{
        let newText=document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copyed !","success");
    }

    const handleExtraSpaces =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra spaces !","success");
    }
    const [text,setText] = useState('');
    //text="new text"; //wrong way to change the state
   // setText("new Text"); //Correct way to change the state
   

    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} value={text}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter somethings to Preview it here"}</p>

            </div>
        </>

    )
}
