import * as React from "react"
import './index.scss'
import Cover from '../images/cover.jpeg'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>NoahSport</title>
      <header>
      <div className="logo-container">
        <h1>NoahSport</h1>
        <p>Vintage Euro Shop</p>
      </div>
        <nav>
          <button>About</button>
          <button>Contact</button>
        </nav>
      </header>
      <section className="hero">
        <h2>Specializing in VW and Porches</h2>
      </section>
    </main>
  )
}

export default IndexPage
