import React from "react"

import "../styles/global.css"

const List = props => {
  const Scroll = () => {
    window.scrollTo({
      top: 4000,
      behavior: "smooth",
    })
  }
  return (
    <ul className="list" >
      <li className="list-item pointer-stack" onMouseOver={() => Scroll()}>
        {props.lang ? <span>Стек</span> : <span>Stack</span>}
        <div className="list-value">
          <p>
            Python, Node js, Rust, AngularJS, ReactJS, Vue.js, Clojure,
            ClojureScript, PHP, Flutter, C#, .NET, OpenCart, ModX...
          </p>
        </div>
      </li>
      <li className="list-item pointer-projects" onMouseOver={() => Scroll()}>
        {props.lang ? <span>Проекты</span> : <span>Projects</span>}
        <div className="list-value">
          <p>
            {props.lang
              ? "NDA (Non-disclosure agreement) — соглашение о неразглашении конфиденциальной информации."
              : "A non-disclosure agreement (NDA)."}
          </p>
        </div>
      </li>
      <li className="list-item pointer-prices" onMouseOver={() => Scroll()}>
        {props.lang ? <span>Цены</span> : <span>Prices</span>}
        <div className="list-value">
          <p>
            {props.lang
              ? "Если вы интересуетесь ценой, значит для вас это дорого."
              : "If you are interested in price, it means it is expensive for you."}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default List
