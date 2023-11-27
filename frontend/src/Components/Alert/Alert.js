import React from 'react'
import "./Alert.css"

export default function Alert(props) {
  return (
    props.alert &&
    <div className="alertcont">
   <div className="alert" id='alert' >
    <p>{props.alert.type} {props.alert.msg}</p>
   </div>
   </div>
  )
}


