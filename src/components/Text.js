import React, { useState } from 'react'

export default function Text(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case !", "succes")

  }

  const handleLoClick = () => {
    setText(text.toLowerCase())
    props.showAlert("Converted to Lower Case !", "succes")
  }

  const handleOnClick = (event) => {
    setText(event.target.value)
  }

  const handleClrClick = () => {
    setText('')
    props.showAlert("Text Cleared !", "succes")

  }
  const handleCpClick = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to Clipboard !", "succes")

  }


  const [text, setText] = useState('Enter Text Here.')

  return (
    <div style={{color: props.mode==='dark'? 'white':'black'}} >

      <div className="container mb-3" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'? 'gray':'white', color:props.mode==='dark'? 'white':'black'}} id="exampleFormControlTextarea1" value={text} onChange={handleOnClick} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Conver To Upper Case</button>
      <button className="btn btn-primary , mx-3 my-2 " onClick={handleLoClick}>Conver To Lower Case</button>
      <button className="btn btn-dark , mx-3" onClick={handleCpClick}>Copy Text</button>
      <button className="btn btn-dark , mx-3" onClick={handleClrClick}>Clear</button>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>Words are <b> {text.split(" ").length } </b>|| characters are <b>{text.length}</b> </p> 
        <h6>Preview</h6>
        <p>{text}</p>

      </div>
      <div className="container my-5">
        <h6 > <a style={{color: props.mode==='dark'? 'skyblue':'blue', textDecoration: 'none'}} href="/">@created By Swaroop</a> </h6>
        </div>

       
 
   
     
    
</div>
   

    
  )
}
