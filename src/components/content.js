import React, { useState } from "react"

import Tooltip from "./tooltip"
import "../styles/global.css"

const Content = props => {
  const [copySuccess, setCopySuccess] = useState(false)
  let email = "contact@kandk.team"

  const copyToClipboard = () => {
    var textField = document.createElement("textarea")
    textField.innerText = email
    document.body.appendChild(textField)
    textField.select()
    document.execCommand("copy")
    textField.remove()
    setCopySuccess(!copySuccess)

    setTimeout(() => {
      setCopySuccess(false)
    }, 2000)
  }

  if (props.lang) {
    return (
      <section className="content">
        <h1 className="header text">
          <span className="pointer-team">
            Мы K&K TEAM{" "}
            <img alt="emoji" src={require("../images/emoji-hello.svg")} />
          </span>
        </h1>
        <p className="text">
          Делали <span className="pointer-mobile">мобильные</span> и{" "}
          <span className="pointer-webapp">веб&nbsp;приложения</span>,{" "}
          <span className="pointer-websites">сайты</span>,{" "}
          <span className="pointer-product">
            брендинг и другие диджитал продукты
          </span>{" "}
          компаниям из <span className="pointer-bel">Беларуси</span>,{" "}
          <span className="pointer-rus">России</span>,{" "}
          <span className="pointer-usa">США</span>,{" "}
          <span className="pointer-isr">Израиля</span> и{" "}
          <span className="pointer-qua">Катара</span>.
        </p>
        <p className="text">
          Сделаем и вам, пишите нам на{" "}
          <Tooltip isShow={copySuccess} text="E-mail скопирован">
            <a
              className="pointer-email"
              onClick={copyToClipboard}

            >
              {email}
            </a>
          </Tooltip>{" "}
          или в&nbsp;
          <a href="tg://resolve?domain=manager_kandk" className="pointer-tg">
            Телеграм
          </a>
          .
        </p>
      </section>
    )
  } else {
    return (
      <section className="content">
        <h1 className="header text">
          <span className="pointer-team">
            We are K&K TEAM{" "}
            <img alt="emoji" src={require("../images/emoji-hello.svg")} />
          </span>
        </h1>
        <p className="text">
          We made <span className="pointer-mobile">mobile</span> and{" "}
          <span className="pointer-webapp">web applications</span>,{" "}
          <span className="pointer-websites">websites</span>,{" "}
          <span className="pointer-product">
            branding and other digital products
          </span>{" "}
          to companies from <span className="pointer-bel">Belarus</span>,{" "}
          <span className="pointer-rus">Russia</span>,{" "}
          <span className="pointer-usa">USA</span>,{" "}
          <span className="pointer-isr">Israel</span> and{" "}
          <span className="pointer-qua">Qatar</span>.
        </p>
        <p className="text">
          We will do the same for you. Write to us at{" "}
          <Tooltip isShow={copySuccess} text="E-mail was copied">
            <a
              className="pointer-email"
              onClick={copyToClipboard}

            >
              {email}
            </a>
          </Tooltip>{" "}
          or on&nbsp;
          <a href="tg://resolve?domain=manager_kandk" className="pointer-tg">
            Telegram
          </a>
          .
        </p>
      </section>
    )
  }
}

export default Content
