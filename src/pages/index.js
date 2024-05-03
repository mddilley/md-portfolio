import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import moment from 'moment'
import heroku from '../assets/img/heroku-logo-solid-black.svg'
import dealsForYouMainPic from '../assets/img/deals-for-you-main.png'
import dealsForYouSubmit from '../assets/img/deals-for-you-submit.png'
import dealsForYouMobile from '../assets/img/deals-for-you-mobile.png'
import dealsForYouAdmin from '../assets/img/deals-for-you-admin.png'
import dealsForYouProfile from '../assets/img/deals-for-you-profile.png'
import dealsForYouDark from '../assets/img/deals-for-you-dark.png'
import waggerRNPic from '../assets/img/wagger-react-native.png'
import oculusPic from '../assets/img/oculus.jpg'
import waggerPic from '../assets/img/wagger.jpg'
import mtgPic from '../assets/img/mtg.jpg'
import ffPic from '../assets/img/fantasyfootball.jpg'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const dealsForYou = [
    {
      id: 'deals-for-you-main',
      source: dealsForYouMainPic,
      thumbnail: data.dealsForYouMain.childImageSharp.fluid,
      caption: 'Deals for You',
      description: 'Main view of the Deals for You App',
      landscape: false,
    },
    {
      id: 'deals-for-you-submit',
      source: dealsForYouSubmit,
      thumbnail: data.dealsForYouSubmit.childImageSharp.fluid,
      caption: 'Deals for You',
      description: 'Submit a deal view of the Deals for You App',
      landscape: false,
    },
    {
      id: 'deals-for-you-mobile',
      source: dealsForYouMobile,
      thumbnail: data.dealsForYouMobile.childImageSharp.fluid,
      caption: 'Deals for You',
      description: 'Mobile view of the Deals for You App',
      landscape: false,
    },
    {
      id: 'deals-for-you-admin',
      source: dealsForYouAdmin,
      thumbnail: data.dealsForYouAdmin.childImageSharp.fluid,
      caption: 'Deals for You',
      description: 'Admin view of the Deals for You App',
      landscape: false,
    },
    {
      id: 'deals-for-you-profile',
      source: dealsForYouProfile,
      thumbnail: data.dealsForYouProfile.childImageSharp.fluid,
      caption: 'Deals for You',
      description: 'Profile view of the Deals for You App',
      landscape: false,
    },
    {
      id: 'deals-for-you-dark',
      source: dealsForYouDark,
      thumbnail: data.dealsForYouDark.childImageSharp.fluid,
      caption: 'Deals for You',
      description: 'Dark mode of the Deals for You App',
      landscape: false,
    },
  ]

  const waggerRN = [
    {
      id: 'wagger-react-native',
      source: waggerRNPic,
      thumbnail: data.waggerRN.childImageSharp.fluid,
      caption: 'Wagger React Native',
      description:
        'A work in progress React Native rebuild of my Wagger project that was built with Ruby on Rails',
      landscape: false,
    },
  ]

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
            I'm a web developer who's passionate about learning new tech and
            pursuing incremental improvement - especially when it makes other
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
            <strong>Let me tell you a bit about myself.</strong> My primary
            language is Javascript, and I'm loving Next.js and React on the
            front end for keeping code simple, readable, and consistent. I'm a
            huge fan of user-focused product development, and I love seeing the
            unique strengths of each team member come together to push a product
            towards success. On the side, I'm exploring Next.js app router,
            Amazon Web Services, product management, and containerization at the
            moment.
          </p>
          <p>
            <strong>When it comes to getting things done</strong>, I self-teach,
            collaborate, and support a human-centered culture of encouragement
            and sharing. I love seeing projects grow over time, and I strive for
            scalable, self-documented, and extensible code. I also believe we
            learn so much by reading code written by others.
          </p>

          <p>
            <strong>Outside of work</strong>, I love learning about music,
            leveling up my cooking skills, exploring the beautiful city of
            Austin, TX, and caring for my dog named Ben (01/12/2009 - 11/01/2023
            💐).
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>Work</h2>
        </header>
        <div className="content">
          <p>
            I currently work as a software developer for the City of Austin
            Transporation and Public Works Department{' '}
            <strong>
              <OutboundLink href="https://austinmobility.io/about">
                Data & Technology Services Division
              </OutboundLink>
            </strong>
            .
          </p>
          <p>
            I formerly worked as a full stack developer for{' '}
            <strong>
              <OutboundLink href="https://www.dallasnews.com/">
                The Dallas Morning News
              </OutboundLink>
            </strong>{' '}
            as part of The Product Team. Our challenges largely revolved around
            keeping the greater Dallas area informed and engaged using digital
            solutions.
          </p>
          <p>
            I previously served the <strong>City of Austin</strong> as part of
            the Transporation Department's Data & Technology Services team. I
            helped build projects to make work easier and smarter, and my role
            was largely focused on helping Austin work towards{' '}
            <OutboundLink href="http://austintexas.gov/department/vision-zero">
              Vision Zero
            </OutboundLink>
            . I was lucky to work with a team that boldy explores new tech while
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
            <h2>Deals for You</h2>
            Empowers users to post, vote, flag, and view deals and enables
            admins to manage users. MVP planned and managed using{' '}
            <OutboundLink href="https://linear.app/">Linear.app</OutboundLink>.
            Built with Next.js, Drizzle ORM, Neon (Postgres), and Clerk for
            authentication.{' '}
          </p>
          <div className="content">
            <Gallery
              images={dealsForYou.map(
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
              Wagger React Native >{' '}
              <OutboundLink
                href="https://github.com/mddilley/wagger-react-native"
                className="icon brands fa-github"
              >
                <span className="label">GitHub</span>Code{' '}
              </OutboundLink>
            </h2>
            A work in progress React Native rebuild of my previous Wagger
            project that was built with Ruby on Rails{' '}
          </p>
          <div className="content">
            <Gallery
              images={waggerRN.map(
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
              <i class="devicon-nextjs-original-wordmark colored"></i>
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
              <i class="devicon-amazonwebservices-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-bootstrap-plain-wordmark"></i>
            </li>
            <li>
              <i class="devicon-materialui-plain"></i>
            </li>
            <li>
              <i class="devicon-github-original"></i>
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
            <li>
              <i class="devicon-graphql-plain-wordmark"></i>
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
    dealsForYouMain: file(relativePath: { eq: "deals-for-you-main.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dealsForYouSubmit: file(relativePath: { eq: "deals-for-you-submit.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dealsForYouMobile: file(relativePath: { eq: "deals-for-you-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dealsForYouAdmin: file(relativePath: { eq: "deals-for-you-admin.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dealsForYouDark: file(relativePath: { eq: "deals-for-you-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dealsForYouProfile: file(
      relativePath: { eq: "deals-for-you-profile.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    waggerRN: file(relativePath: { eq: "wagger-react-native.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
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
