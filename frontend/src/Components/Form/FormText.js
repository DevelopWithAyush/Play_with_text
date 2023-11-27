import React, { useState } from 'react'
import "./FormText.css"

export default function FormText(props) {

  const [text, setText] = useState("")


  const handleOnChange = (e)=>{
    setText(e.target.value)
  }
  const handleUpclick = ()=>{
    const uppercase = text.toUpperCase() 
    setText(uppercase);
    props.showAlert("Text change to uppercase")
  }
  const handleLowclick = ()=>{
    const lowercase = text.toLowerCase()
    setText(lowercase);
    props.showAlert("Text change to lowercase")
  }
  const ClearText = ()=>{
    const clearText = ""
    setText(clearText);
    props.showAlert("Text clear")
  }
  const trim = ()=>{
  let trim = text.split(/[ ]+/).join(" ");

    setText(trim);
    props.showAlert("remove extra space")
  }

  // style for dark mode 

  const textlight = {
    color: "black",
    backgroundColor: "white"

  }
  const textdark = {
    color: "white",
    backgroundColor:"black"
  }
  let texta = {

  }
  if(props.mode === "light"){
    texta = textlight
  }
  else{
    texta = textdark
  }
  return (
    <>
    <div className='form'>
        <label htmlFor="myBox" className='form-label'>Enter Your Text Below</label>
      <textarea name="" id="myBox" cols="30" rows="10" value={text} placeholder='Enter Your Text Here' onChange={handleOnChange} className={`${props.mode}`} style={texta}></textarea>
    </div>
    <div className="btns">
      <button className='btn' onClick={handleUpclick}>To UpperCase</button>
      <button className='btn' onClick={handleLowclick}>To LowerCase</button>
      <button className='btn' onClick={trim}>Remove Extra Space</button>
      <button className='btn' onClick={ClearText}>Clear Text</button>
       {/* <button className='btn'>To UpperCase</button> */}
    </div>
    </>
  )
}
