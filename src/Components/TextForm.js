import React, { useState } from 'react'
export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase","success");
  }
  const handleLoClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase","success");
  }
  const handleClearClick = () => {
    // let newText = '';
    //setText(newText)
    setText("");
    props.showAlert(" Cleared the input box","success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Copied to the clipboard!","success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Removed extra spaces","success");
  }
  const [text, setText] = useState("");

  // text = "new text"; //Wrong way to set the text
  // setText("New Text");
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#00060e' }} >
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#00060e' : 'white', color: props.mode === 'dark' ? 'white' : '#00060e' }} id="mybox" rows="10" ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
      </div>
      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#00060e' }}>
        <h1>Your text summary</h1>
        {/* <p>{text.split(" ")[text.split(" ").length - 1] === "" ? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} characters</p>  */}
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes taken to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  )
}
