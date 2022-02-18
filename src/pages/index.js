import * as React from "react"
import { useEffect } from "react"
import './index.scss'
import cover from '../images/cover.jpeg'
import about from '../images/nmabout.jpeg'
import ImageGallery from 'react-image-gallery'
import {useWindowWidth} from '@react-hook/window-size'
import logo from '../images/logo.png'
import images from '../data/workImages.js'
import insta from '../images/instaclear.png'
import BackgroundImage from 'gatsby-background-image'

// markup
const IndexPage = () => {
  useEffect(() => {
    if (window && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      })
    }
  }, []);

  const windowWidth = useWindowWidth()
  return (
    <main>
      <title>NoahSport</title>
      <header>
      <div className="logo-container">
        <img className="logo-image" src={logo} />
      </div>
        <nav>
          <a href="#about-section">
          <button>About</button>
          </a>
          <a href="#work-section">
          <button>Work</button>
          </a>
          <a href="#contact-section">
          <button>Contact</button>
          </a>
        </nav>
      </header>
      <section className="hero">
        <h2>Vintage European Car Repairs and Modifications</h2>
      </section>
      <section className="about" id="about-section">
        <img src={about} />
        <article>
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum luctus turpis in aliquet. Morbi accumsan dui vitae ligula dignissim volutpat. Duis euismod nibh vel nisi rutrum dictum. Fusce sit amet nulla ligula. Morbi rutrum malesuada dolor ac rutrum.</p>
        </article>
      </section>
      <section className="work" id="work-section">
      <article>
      <h3>Work</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum luctus turpis in aliquet. Morbi accumsan dui vitae ligula dignissim volutpat. Duis euismod nibh vel nisi rutrum dictum. Fusce sit amet nulla ligula. Morbi rutrum malesuada dolor ac rutrum.</p>
      </article>
        <ImageGallery 
        className="slider" 
        items={images} 
        thumbnailPosition={'bottom'}
        showThumbnails={windowWidth > 600}
        showPlayButton={false} />
      </section>
      <section className="contact" id="contact-section">
      <article>
        <h3>Contact</h3>
        <p>If you have an old European car that needs anything from an oil change and check over to a mechanical rehabilitation to get back on the road send me an email and let’s make it happen!</p>
        <p className="email"><a href="mailto:noahsportri@gmail.com">noahsportri@gmail.com</a></p>
      </article>
      </section>
      <footer>
        <a href="https://www.instagram.com/noahsport_ri/" target="_blank">
        <img src={insta} />
        </a>
        <a href="https://goo.gl/maps/zWDDJNLcXy572vMY6" target="_blank">
        <p>101 Dexter Rd, East Providence, RI 02914</p>
        </a>
      </footer>
    </main>
  )
}

export default IndexPage
