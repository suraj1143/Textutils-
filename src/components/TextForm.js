import React , { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        console.log(newText)
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        console.log(newText)
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }
    const clr = () => {
        let newText = ' ';
        setText(newText);
        props.showAlert("Text Cleared", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text   = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!!!", "success")

    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces Removed", "success")
    }


    const [text, setText] = useState("enter text here");
    
    return (
        <>
    <div className='container' style={{ color: props.mode === 'dark'?'white':'#042743'}}>
        <h1> { props.heading }</h1>
        <div className="mb-3">
        <textarea className="form-control" value= { text }  onChange={ handleOnChange} style={{ backgroundColor: props.mode === 'dark'?'grey':'white' , color:props.mode === 'dark'?'white':'#042743' }}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={ handleUpClick } > Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={ handleloClick } > Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={ clr } > Clear The Text</button>
        <button className="btn btn-primary mx-2" onClick={ handleCopy } > Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={ handleSpaces } > Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{ color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{ text.split(" ").length-1 }  words , {text.length} characters </p>
        <h3>Time required for reading </h3>
        <p> { 0.008 * text.split(" ").length } Minutes</p>
        <h3>Preview</h3>
        <p> { text.length>0 ? text : "Enter something in the text box above to preview it here"} </p>

    </div>
    </>
  )

}