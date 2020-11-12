import React from "react"

import Content from "../components/content"
import SEO from "../components/seo"
import List from "../components/list"
import Switch from "../components/switch"
import Footer from "../components/footer"
import Hexagon from "../components/hexagon"
import "../styles/global.css"

class IndexPage extends React.Component {
  state = {
    lang: true,
    userLang: "",
  }

  componentDidMount() {
    const lang = window.navigator.language;
    this.setState({ userLang: lang })
    if (lang.substring(0, 2).toLowerCase() === "ru") {
      this.setState({ lang })
    } else {
      this.setState({ lang: !this.state.lang })
    }
  }

  setLang = () => {
    this.setState({ lang: !this.state.lang })
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  })
  }

  render() {
    return (
      <>
        <SEO title="IT-company K&K TEAM" lang={this.state.userLang} image={require("../images/social.png")}/>
        <div className="main">
          <Content lang={this.state.lang} />
          <div className="info">
            <List lang={this.state.lang} />
            <Switch lang={this.state.lang} onClick={this.setLang} />
          </div>
          <Footer lang={this.state.lang} />
          <Hexagon />
        </div>
      </>
    )
  }
}

export default IndexPage