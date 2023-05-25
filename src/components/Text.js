import React, { useState } from 'react'

export default function Text(props) {
  const handleUpClick = () => {
    if (text) {
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to Upper Case !", "success")
    }else{
      props.showAlert("Enter Text to Convert", "warning")

    }
     
    } 
      

  const handleLoClick = () => {
  if (text) {
    setText(text.toLowerCase())
    props.showAlert("Converted to Lower Case !", "success")
  }else{
    props.showAlert("Enter Text to Convert", "warning")
  }
   
   }
  

  const handleOnClick = (event) => {
    setText(event.target.value)
  }

  const handleClrClick = () => {
    setText('')
    props.showAlert("Text Cleared !", "success")

  }
  const handleCpClick = () => {
  if (text) {
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to Clipboard !", "success")
  } else{
    props.showAlert("Enter text to copy !", "warning")
  }

  }


  const [text, setText] = useState('')

  return (
    <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >

      <div className="container mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" value={text} onChange={handleOnClick} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Conver To Upper Case</button>
      <button className="btn btn-primary , mx-3 my-2 " onClick={handleLoClick}>Conver To Lower Case</button>
      <button className="btn btn-dark , mx-3" onClick={handleCpClick}>Copy Text</button>
      <button className="btn btn-dark , mx-3" onClick={handleClrClick}>Clear</button>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>Words are <b> {text.split(" ").filter((element) => { return element.length !== 0 }).length} </b>|| characters are <b>{text.length}</b> </p>
        <h6>Preview</h6>
        <p>{text.length > 0 ? text : "Enter Something into textbox to Preview here."}</p>

      </div>
      <div className="container my-5">
        <h6 > <a style={{ color: props.mode === 'dark' ? 'skyblue' : 'blue', textDecoration: 'none' }} href="/">@created By Swaroop</a> </h6>
      </div>

    </div>



  )
}
