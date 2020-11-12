import React from "react"

import "../styles/global.css"

const Tooltip = props => {
  return (
    <span className="tooltip">
      {props.children}
      {props.isShow ? <span className="tooltiptext">{props.text}</span> : null}
    </span>
  )
}

export default Tooltip
