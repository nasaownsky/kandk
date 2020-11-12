import React, { useEffect } from "react"

import "../styles/global.css"

const Hexagon = () => {
  useEffect(() => {
    const shadow = document.querySelector(".shadow")
    let walk = 30

    window.addEventListener("mousemove", e => {
      const { innerWidth: width, innerHeight: height } = window
      let { clientX: x, clientY: y } = e
      if (width > 1300) {
        const xWalk = Math.round((x / width) * walk - walk / 2)
        const yWalk = Math.round((y / height) * walk - walk / 2)
        shadow.style.left = 55 - xWalk + "%"
        shadow.style.top = 50 - yWalk + "%"
      }
    })
  }, [])

  return (
    <figure className="hexagon">
      <div className="shadow" id="module">
        <img src={require("../images/shadow.png")} alt="hexagon shadow" />
     </div>
      <div className="figure">
        <svg
          width="807"
          height="697"
          viewBox="0 0 807 697"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M790.924 307.828C799.662 322.628 804.031 330.028 805.739 337.914C807.25 344.891 807.25 352.11 805.739 359.086C804.031 366.972 799.662 374.372 790.924 389.172L632.405 657.672C623.942 672.007 619.71 679.175 613.845 684.384C608.655 688.994 602.562 692.472 595.954 694.598C588.486 697 580.163 697 563.515 697H243.357C226.71 697 218.386 697 210.919 694.598C204.311 692.472 198.218 688.994 193.028 684.384C187.163 679.175 182.931 672.007 174.467 657.672L15.9484 389.172C7.21058 374.372 2.8417 366.972 1.13342 359.086C-0.377806 352.109 -0.377806 344.891 1.13342 337.914C2.8417 330.028 7.21059 322.628 15.9484 307.828L174.467 39.3283C182.931 24.9928 187.163 17.8251 193.028 12.6159C198.218 8.00642 204.311 4.52806 210.919 2.40231C218.386 -1.19209e-06 226.71 -7.25046e-07 243.357 7.97627e-10L563.515 1.396e-05C580.163 1.46859e-05 588.486 1.50204e-05 595.954 2.40232C602.562 4.52808 608.655 8.00643 613.845 12.6159C619.71 17.8251 623.942 24.9929 632.405 39.3283L790.924 307.828Z"
            fill="#7763FF"
          />
        </svg>
      </div>
    </figure>
  )
}

export default Hexagon