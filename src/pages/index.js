import React from 'react'
import full01 from '../assets/img/gallery/fulls/01.jpg'
import full02 from '../assets/img/gallery/fulls/02.jpg'
import full03 from '../assets/img/gallery/fulls/03.jpg'
import full04 from '../assets/img/gallery/fulls/04.jpg'
import full05 from '../assets/img/gallery/fulls/05.jpg'
import full06 from '../assets/img/gallery/fulls/06.jpg'
import full07 from '../assets/img/gallery/fulls/07.jpg'
import full08 from '../assets/img/gallery/fulls/08.jpg'
import full09 from '../assets/img/gallery/fulls/09.jpg'
import full10 from '../assets/img/gallery/fulls/10.jpg'
import thumb01 from '../assets/img/gallery/thumbs/01.jpg'
import thumb02 from '../assets/img/gallery/thumbs/02.jpg'
import thumb03 from '../assets/img/gallery/thumbs/03.jpg'
import thumb04 from '../assets/img/gallery/thumbs/04.jpg'
import thumb05 from '../assets/img/gallery/thumbs/05.jpg'
import thumb06 from '../assets/img/gallery/thumbs/06.jpg'
import thumb07 from '../assets/img/gallery/thumbs/07.jpg'
import thumb08 from '../assets/img/gallery/thumbs/08.jpg'
import thumb09 from '../assets/img/gallery/thumbs/09.jpg'
import thumb10 from '../assets/img/gallery/thumbs/10.jpg'
import headshot from '../assets/img/headshot2squared.jpg'
import heroku from '../assets/img/heroku-logo-solid-black.svg'
import oculusPic from '../assets/img/oculus.jpg'
import waggerPic from '../assets/img/wagger.jpg'
import mtgPic from '../assets/img/mtg.jpg'
import ffPic from '../assets/img/fantasyfootball.jpg'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const oculus = [
  {
    id: 'oculus',
    source: oculusPic,
    thumbnail: oculusPic,
    caption: 'Oculus LIMS',
    description:
      'A laboratory information management tool built with React and Redux and served by a Ruby on Rails API',
    landscape: true,
  },
]

const wagger = [
  {
    id: 'wagger',
    source: waggerPic,
    thumbnail: waggerPic,
    caption: 'Wagger',
    description:
      'Rails and JavaScript application that allows users to register, add dogs, and plan dog playdates',
    landscape: true,
  },
]

const mtg = [
  {
    id: 'mtg',
    source: mtgPic,
    thumbnail: mtgPic,
    caption: 'MTG Deck Builder',
    description:
      'RESTful Sinatra app that builds Magic: The Gathering decks utilizing Scryfall API for card data',
    landscape: true,
  },
]

const ff = [
  {
    id: 'ff',
    source: ffPic,
    thumbnail: ffPic,
    caption: 'Fantasy Football gem',
    description:
      'Ruby CLI gem that scrapes fantasy football player ranking data from Fantasypros.com',
    landscape: true,
  },
]

const image01 = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Photo 1',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    landscape: true,
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Photo 2',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Photo 3',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    landscape: true,
  },
]

const images02 = [
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Photo 5',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '7',
    source: full07,
    thumbnail: thumb07,
    caption: 'Photo 7',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    landscape: true,
  },
]

const images03 = [
  {
    id: '8',
    source: full08,
    thumbnail: thumb08,
    caption: 'Photo 8',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '9',
    source: full09,
    thumbnail: thumb09,
    caption: 'Photo 9',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '10',
    source: full10,
    thumbnail: thumb10,
    caption: 'Photo 10',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    landscape: true,
  },
]

const IndexPage = () => (
  <Layout>
    <section className="intro">
      <header>
        <h1>Mike Dilley</h1>
        <p>
          Howdy! I'm a web developer who's passionate about learning new tech
          and pursuing incremental improvement - especially when it makes other
          lives better.
        </p>
        <ul className="actions">
          <li>
            <a href="#first" className="arrow scrolly">
              <span className="label">Next</span>
            </a>
          </li>
        </ul>
      </header>
      <div className="content">
        <span className="image fill" data-position="center">
          <img src={headshot} alt="Headshot of Mike" />
        </span>
      </div>
    </section>

    <section id="first">
      <header>
        <h2>About Me</h2>
      </header>
      <div className="content">
        <p>
          <strong>Let me tell you a bit about myself!</strong> My primary
          language is Javascript, and I'm loving React Hooks on the front end to
          keep code simple, readable, and consistent. On the side, I'm exploring
          Python, Amazon Web Services, and containerization at the moment.
        </p>
        <p>
          <strong>When it comes to getting things done</strong>, I self-teach,
          collaborate, and support a human-centered culture of encouragement and
          sharing. I love seeing projects grow over time, and I strive for
          scalable, self-documented, and extensible code.
        </p>

        <p>
          <strong>Outside of work</strong>, I love learning about music,
          leveling up my cooking skills, exploring the beautiful city of Austin,
          TX, and caring for my dog named Ben.
        </p>
        {/* <span className="image main">
          <img src={pic02} alt="" />
        </span> */}
      </div>
    </section>

    <section>
      <header>
        <h2>Work</h2>
      </header>
      <div className="content">
        <p>
          I currently serve the <strong>City of Austin</strong> as part of the
          Transporation Department's Data & Technology Services team. I help
          build projects to make work easier and smarter, and my role is largely
          focused on helping Austin work towards{' '}
          <a href="http://austintexas.gov/department/vision-zero">
            Vision Zero
          </a>
          . I'm lucky to work with a team that boldy explores new tech while
          keeping the tried and true close at hand.
        </p>
      </div>
    </section>

    <section>
      <header>
        <h2>Projects</h2>
      </header>
      <div className="content">
        <p>
          <h2>
            Oculus LIMS //{' '}
            <a
              href="https://github.com/mddilley/oculus-lims"
              className="icon brands fa-github"
            >
              <span className="label">GitHub</span>Code //{' '}
            </a>
            <a
              href="https://github.com/mddilley/oculus-lims-api"
              className="icon brands fa-github"
            >
              <span className="label">GitHub</span>API //{' '}
            </a>
            <a
              href="https://oculus-lims.herokuapp.com/"
              className="icon brands"
            >
              <span className="label">Demo</span>
              <img className="image heroku" src={heroku} /> Demo
            </a>
          </h2>
          A laboratory information management tool built with React and Redux
          and served by a Ruby on Rails API{' '}
        </p>
        <div className="content">
          <Gallery
            images={oculus.map(
              ({ id, source, thumbnail, caption, description, landscape }) => ({
                source,
                thumbnail,
                caption,
                description,
                landscape,
              })
            )}
          />
        </div>
        <br />
        <p>
          <h2>
            Wagger //{' '}
            <a
              href="https://github.com/mddilley/wagger"
              className="icon brands fa-github"
            >
              <span className="label">GitHub</span>Code //{' '}
            </a>
            <a
              href="https://wagger-rails.herokuapp.com/"
              className="icon brands"
            >
              <span className="label">GitHub</span>
              <img className="image heroku" src={heroku} /> Demo
            </a>
          </h2>
          A Ruby on Rails and JavaScript application that allows users to
          register, add dogs, and plan dog playdates
        </p>
        <div className="content">
          <Gallery
            images={wagger.map(
              ({ id, source, thumbnail, caption, description, landscape }) => ({
                source,
                thumbnail,
                caption,
                description,
                landscape,
              })
            )}
          />
        </div>
        <br />
        <p>
          <h2>
            MTG Deck Builder //{' '}
            <a
              href="https://github.com/mddilley/mtg-deck-builder"
              className="icon brands fa-github"
            >
              <span className="label">GitHub</span>Code //{' '}
            </a>
            <a
              href="https://mtg-deck-builder-sinatra.herokuapp.com/"
              className="icon brands"
            >
              <span className="label">GitHub</span>
              <img className="image heroku" src={heroku} /> Demo
            </a>
          </h2>
          A RESTful Sinatra app that builds Magic: The Gathering decks utilizing
          Scryfall API for card data
        </p>
        <div className="content">
          <Gallery
            images={mtg.map(
              ({ id, source, thumbnail, caption, description, landscape }) => ({
                source,
                thumbnail,
                caption,
                description,
                landscape,
              })
            )}
          />
        </div>
        <br />
        <p>
          <h2>
            Fantasy Football //{' '}
            <a
              href="https://github.com/mddilley/fantasy-football"
              className="icon brands fa-github"
            >
              <span className="label">GitHub</span>Code //{' '}
            </a>
            <a
              href="https://rubygems.org/gems/fantasy-football"
              className="icon fa-gem"
            >
              <span className="label">Ruby gem</span>Gem{' '}
            </a>
          </h2>{' '}
          A simple Ruby CLI gem that scrapes fantasy football player ranking
          data from Fantasypros.com
        </p>
        <div className="content">
          <Gallery
            images={ff.map(
              ({ id, source, thumbnail, caption, description, landscape }) => ({
                source,
                thumbnail,
                caption,
                description,
                landscape,
              })
            )}
          />
        </div>
        <br />
      </div>
    </section>

    <section>
      <header>
        <h2>Duis sed adpiscing veroeros amet</h2>
      </header>
      <div className="content">
        <p>
          <strong>Proin tempus feugiat</strong> sed varius enim lorem
          ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim
          lorem ullamcorper dolore.
        </p>
        <ul className="actions">
          <li>
            <a href="#" className="button primary large">
              Get Started
            </a>
          </li>
          <li>
            <a href="#" className="button large">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section>
      <header>
        <h2>Get in touch</h2>
      </header>
      <div className="content">
        <p>
          <strong>Auctor commodo</strong> interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
          mattis sagittis.
        </p>
        <form>
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
              ></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                className="button large primary"
              />
            </li>
          </ul>
        </form>
      </div>
      <footer>
        <ul className="items">
          <li>
            <h3>Email</h3>
            <a href="#">information@untitled.ext</a>
          </li>
          <li>
            <h3>Phone</h3>
            <a href="#">(000) 000-0000</a>
          </li>
          <li>
            <h3>Address</h3>
            <span>1234 Somewhere Road, Nashville, TN 00000</span>
          </li>
          <li>
            <h3>Elsewhere</h3>
            <ul className="icons">
              <li>
                <a href="#" className="icon brands fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-facebook-f">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-linkedin-in">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-codepen">
                  <span className="label">Codepen</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </section>

    <div className="copyright">
      &copy; Mike Dilley. All rights reserved. Built with Gatsby JS and{' '}
      <a href="https://html5up.net">HTML5 UP</a>.
    </div>
  </Layout>
)

export default IndexPage
