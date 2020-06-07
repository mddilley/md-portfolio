import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import moment from 'moment'
import heroku from '../assets/img/heroku-logo-solid-black.svg'
import oculusPic from '../assets/img/oculus.jpg'
import waggerPic from '../assets/img/wagger.jpg'
import mtgPic from '../assets/img/mtg.jpg'
import ffPic from '../assets/img/fantasyfootball.jpg'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const oculus = [
    {
      id: 'oculus',
      source: oculusPic,
      thumbnail: data.oculus.childImageSharp.fluid,
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
      thumbnail: data.wagger.childImageSharp.fluid,
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
      thumbnail: data.mtg.childImageSharp.fluid,
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
      thumbnail: data.ff.childImageSharp.fluid,
      caption: 'Fantasy Football gem',
      description:
        'Ruby CLI gem that scrapes fantasy football player ranking data from Fantasypros.com',
      landscape: true,
    },
  ]

  return (
    <Layout>
      <section className="intro">
        <header>
          <h1>Mike Dilley</h1>
          <p>
            Howdy! I'm a web developer who's passionate about learning new tech
            and pursuing incremental improvement - especially when it makes
            other lives better.
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
            <Img className="img" fluid={data.headshot.childImageSharp.fluid} />
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
            language is Javascript, and I'm loving React Hooks on the front end
            for keeping code simple, readable, and consistent. On the side, I'm
            exploring Python, Amazon Web Services, and containerization at the
            moment.
          </p>
          <p>
            <strong>When it comes to getting things done</strong>, I self-teach,
            collaborate, and support a human-centered culture of encouragement
            and sharing. I love seeing projects grow over time, and I strive for
            scalable, self-documented, and extensible code.
          </p>

          <p>
            <strong>Outside of work</strong>, I love learning about music,
            leveling up my cooking skills, exploring the beautiful city of
            Austin, TX, and caring for my dog named Ben.
          </p>
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
            build projects to make work easier and smarter, and my role is
            largely focused on helping Austin work towards{' '}
            <OutboundLink href="http://austintexas.gov/department/vision-zero">
              Vision Zero
            </OutboundLink>
            . I'm lucky to work with a team that boldy explores new tech while
            also keeping the tried and true close at hand.
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
              Oculus LIMS >{' '}
              <OutboundLink
                href="https://github.com/mddilley/oculus-lims"
                className="icon brands fa-github"
              >
                <span className="label">GitHub</span>Code //{' '}
              </OutboundLink>
              <OutboundLink
                href="https://github.com/mddilley/oculus-lims-api"
                className="icon brands fa-github"
              >
                <span className="label">GitHub</span>API //{' '}
              </OutboundLink>
              <OutboundLink
                href="https://oculus-lims.herokuapp.com/"
                className="icon brands"
              >
                <span className="label">Demo</span>
                <img
                  className="image heroku"
                  alt="Heroku icon"
                  src={heroku}
                />{' '}
                Demo
              </OutboundLink>
            </h2>
            A laboratory information management tool built with React and Redux
            and served by a Ruby on Rails API{' '}
          </p>
          <div className="content">
            <Gallery
              images={oculus.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                }) => ({
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
              Wagger >{' '}
              <OutboundLink
                href="https://github.com/mddilley/wagger"
                className="icon brands fa-github"
              >
                <span className="label">GitHub</span>Code //{' '}
              </OutboundLink>
              <OutboundLink
                href="https://wagger-rails.herokuapp.com/"
                className="icon brands"
              >
                <span className="label">GitHub</span>
                <img
                  className="image heroku"
                  alt="Heroku icon"
                  src={heroku}
                />{' '}
                Demo
              </OutboundLink>
            </h2>
            A Ruby on Rails and JavaScript application that allows users to
            register, add dogs, and plan dog playdates
          </p>
          <div className="content">
            <Gallery
              images={wagger.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                }) => ({
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
              MTG Deck Builder >{' '}
              <OutboundLink
                href="https://github.com/mddilley/mtg-deck-builder"
                className="icon brands fa-github"
              >
                <span className="label">GitHub</span>Code //{' '}
              </OutboundLink>
              <OutboundLink
                href="https://mtg-deck-builder-sinatra.herokuapp.com/"
                className="icon brands"
              >
                <span className="label">GitHub</span>
                <img
                  className="image heroku"
                  alt="Heroku icon"
                  src={heroku}
                />{' '}
                Demo
              </OutboundLink>
            </h2>
            A RESTful Sinatra app that builds Magic: The Gathering decks
            utilizing Scryfall API for card data
          </p>
          <div className="content">
            <Gallery
              images={mtg.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                }) => ({
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
              Fantasy Football >{' '}
              <OutboundLink
                href="https://github.com/mddilley/fantasy-football"
                className="icon brands fa-github"
              >
                <span className="label">GitHub</span>Code //{' '}
              </OutboundLink>
              <OutboundLink
                href="https://rubygems.org/gems/fantasy-football"
                className="icon fa-gem"
              >
                <span className="label">Ruby gem</span>Gem{' '}
              </OutboundLink>
            </h2>{' '}
            A simple Ruby CLI gem that scrapes fantasy football player ranking
            data from Fantasypros.com
          </p>
          <div className="content">
            <Gallery
              images={ff.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  landscape,
                }) => ({
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
          <h2>Tech</h2>
        </header>
        <div className="content">
          <ul className="content-icons">
            <li>
              <i className="devicon-react-original-wordmark"></i>
            </li>
            <li>
              <i className="devicon-javascript-plain"></i>
            </li>
            <li>
              <i className="devicon-html5-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-css3-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-bootstrap-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-github-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-git-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-python-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-jquery-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-ruby-plain-wordmark"></i>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <header>
          <h2>Get in touch</h2>
        </header>
        <div className="content">
          <ul className="items">
            <li>
              <h3>Email</h3>
              <a href="mailto:mike.dilley@gmail.com">mike.dilley@gmail.com</a>
            </li>
            <li>
              <h3>Address</h3>
              <span>Austin, TX</span>
            </li>
            <li>
              <h3>Elsewhere</h3>
              <ul className="icons">
                <li>
                  <OutboundLink
                    href="https://github.com/mddilley"
                    className="icon brands fa-github"
                  >
                    <span className="label">GitHub</span>
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://www.linkedin.com/in/mike-dilley/"
                    className="icon brands fa-linkedin-in"
                  >
                    <span className="label">LinkedIn</span>
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://www.instagram.com/mdilley/"
                    className="icon brands fa-instagram"
                  >
                    <span className="label">Instagram</span>
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://www.facebook.com/mddilley/"
                    className="icon brands fa-facebook-f"
                  >
                    <span className="label">Facebook</span>
                  </OutboundLink>
                </li>
                <li>
                  <OutboundLink
                    href="https://twitter.com/mddilley"
                    className="icon brands fa-twitter"
                  >
                    <span className="label">Twitter</span>
                  </OutboundLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <div className="copyright">
        &copy; Mike Dilley {moment().format('YYYY')}. All rights reserved. Built
        with Gatsby JS and <a href="https://html5up.net">HTML5 UP</a>.
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "headshot2squared.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    oculus: file(relativePath: { eq: "oculus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wagger: file(relativePath: { eq: "wagger.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mtg: file(relativePath: { eq: "mtg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ff: file(relativePath: { eq: "fantasyfootball.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
