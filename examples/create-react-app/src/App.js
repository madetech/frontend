import React from 'react'
import { Footer, Header, Jumbotron, SiteMap, TopBar } from '@madetech/frontend'
import '@madetech/frontend/all.scss'

export default function App () {
  return (
    <>
      <TopBar />
      <Header>
        <a href="/agile-transformation" className="nav-link">
          Agile Team<br />Transformation
        </a>

        <a href="/software-development" className="nav-link">
          Software<br />Development
        </a>

        <a href="/continuous-delivery" className="nav-link">
          Continuous<br />Delivery
        </a>

        <a href="/devops" className="nav-link">
          DevOps
        </a>

        <a href="/support-and-maintainance" className="nav-link">
          Reliability<br />Engineering
        </a>
      </Header>

      <Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center my-5">
              <h1>Hello world!</h1>
            </div>
          </div>
        </div>
      </Jumbotron>

      <SiteMap />
      <Footer />
    </>
  )
}
