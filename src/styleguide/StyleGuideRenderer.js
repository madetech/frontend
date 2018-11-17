import React from 'react'
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
      <TopBar
        links={[
          <a href='https://www.madetech.com'>Who are Made Tech?</a>,
          <a href='https://www.madetech.com/blog'>Blog</a>,
          <a href='https://learn.madetech.com'>Learn</a>,
          <a href='https://www.madetech.com/careers'>Careers</a>
        ]}
        />

      <Header
        logoHref='..'
        logoText='Frontend'
        navLinks={[
          <a href='../getting-started' class='nav-link mx-1'>
            Documentation
          </a>,

          <a href='.' class='nav-link mx-1'>
            Styleguide
          </a>,

          <a href='https://github.com/madetech/frontend' class='nav-link mx-1'>
            GitHub
          </a>
        ]}
        />

      <main class="container mt-5">
        <div class="row">
  				<div class="col-md-3">
  					{toc}
  				</div>

          <div class="col-md-9">
          {children}
          </div>
        </div>
      </main>

      <Ribbon />
    </div>
  );
}

export default StyleGuideRenderer;
