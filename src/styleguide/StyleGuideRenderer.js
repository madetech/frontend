import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TopBar from '../components/TopBar'
import Ribbon from 'rsg-components/Ribbon';

export function StyleGuideRenderer({
  title,
  homepageUrl,
  children,
  toc
}) {
  return (
    <div>
      <TopBar>
        <a href='https://www.madetech.com'>Who are Made Tech?</a>
        <a href='https://www.madetech.com/blog'>Blog</a>
        <a href='https://learn.madetech.com'>Learn</a>
        <a href='https://www.madetech.com/careers'>Careers</a>
      </TopBar>

      <Header logoHref='..' logoText='Frontend'>
        <a href='..' className='nav-link mx-1'>
          Home
        </a>

        <a href='../getting-started' className='nav-link mx-1'>
          Documentation
        </a>

        <a href='.' className='nav-link mx-1'>
          Styleguide
        </a>

        <a href='https://github.com/madetech/frontend' className='nav-link mx-1'>
          GitHub
        </a>
      </Header>

      <main className="container">
        <div className="row">
  				<div className="col-lg-3 border-right">
  					{toc}
  				</div>

          <div className="col-md-9">
            {children}
          </div>
        </div>
      </main>

      <Footer />
      <Ribbon />
    </div>
  );
}

export default StyleGuideRenderer;
