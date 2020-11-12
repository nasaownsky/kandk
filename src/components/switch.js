import React from "react"

import "../styles/global.css"

const Switch = props => {

  return (
    <div className="switch" onClick={props.onClick}>
      <span
        className={`language ${props.lang ? "active-lang" : "hover-lang"} pointer-langs`}
        onClick={props.onClick}
      >
        Ru
      </span>
      <span
        className={`language ${props.lang ? "hover-lang" : "active-lang"} pointer-langs`}
        onClick={props.onClick}
      >
        En
      </span>
    </div>
  )
}

export default Switch
