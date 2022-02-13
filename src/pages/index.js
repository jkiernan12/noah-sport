import * as React from "react"
import './index.scss'
import Cover from '../images/cover.jpeg'
import about from '../images/nmabout.jpeg'
import ImageGallery from 'react-image-gallery'
import img1 from '../images/nm1.jpeg'
import img2 from '../images/nm2.jpeg'
import img3 from '../images/nm3.jpeg'
import img4 from '../images/nm4.jpeg'
import img5 from '../images/nm5.jpeg'
import smallImg1 from '../images/snm1.jpeg'
import smallImg2 from '../images/snm2.jpeg'
import smallImg3 from '../images/snm3.jpeg'
import smallImg4 from '../images/snm4.jpeg'
import smallImg5 from '../images/snm5.jpeg'

const images = [
  {
    original: img1,
    thumbnail: smallImg1
  },
  {
    original: img2,
    thumbnail: smallImg2
  },
  {
    original: img3,
    thumbnail: smallImg3
  },
  {
    original: img4,
    thumbnail: smallImg4
  },
  {
    original: img5,
    thumbnail: smallImg5
  },
]

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
          <button>Work</button>
          <button>Contact</button>
        </nav>
      </header>
      <section className="hero">
        <h2>Specializing in VW and Porches</h2>
      </section>
      <section className="about" id="about-section">
        <img src={about} />
        <article>
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum luctus turpis in aliquet. Morbi accumsan dui vitae ligula dignissim volutpat. Duis euismod nibh vel nisi rutrum dictum. Fusce sit amet nulla ligula. Morbi rutrum malesuada dolor ac rutrum. Duis euismod dapibus tortor ut lacinia. Curabitur sed nisl et turpis consectetur rhoncus ut at ex. Duis euismod blandit posuere. Donec id rhoncus neque. Suspendisse feugiat massa et hendrerit aliquet. Ut at tristique justo. Quisque finibus vel dolor et malesuada.</p>
        </article>
      </section>
      <section className="work">
      <article>
      <h3>Work</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum luctus turpis in aliquet. Morbi accumsan dui vitae ligula dignissim volutpat. Duis euismod nibh vel nisi rutrum dictum. Fusce sit amet nulla ligula. Morbi rutrum malesuada dolor ac rutrum. Duis euismod dapibus tortor ut lacinia. Curabitur sed nisl et turpis consectetur rhoncus ut at ex. Duis euismod blandit posuere. Donec id rhoncus neque. Suspendisse feugiat massa et hendrerit aliquet. Ut at tristique justo. Quisque finibus vel dolor et malesuada.</p>
      </article>
        <ImageGallery className="slider" items={images} thumbnailPosition="right" />
      </section>
    </main>
  )
}

export default IndexPage
