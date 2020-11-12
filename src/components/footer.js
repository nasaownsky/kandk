import React from "react"

import "../styles/global.css"

const Footer = props => {
  return (
    <footer>
      <p className="pointer-kandk-ltd">
        {props.lang
          ? "ООО «Кей энд Кей», Брест, Машерова 16. УНП: 291636378"
          : "K&K Ltd., Brest, Masherova 16. Reg.num: 291636378"}
      </p>
    </footer>
  )
}

export default Footer