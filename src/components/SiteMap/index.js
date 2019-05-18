import React from 'react'

export default function SiteMap () {
  return (
    <div className='site_map'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 mb-4'>
            <p><strong>About Made Tech</strong></p>

            <p>Our mission is to improve software delivery in every organisation. We work with our customers to deliver modern applications and help them move to a faster, leaner, and more agile software delivery model.</p>
          </div>

          <div className='col-6 col-lg-3 offset-lg-1'>
            <nav>
              <p><strong>Sectors</strong></p>

              <a href="/government">Government</a>
              <a href="/retail">Retail</a>
              <a href="/startups"><span class="translation_missing" title="translation missing: en.footer_navigation.sectors.startups">Startups</span></a>
            </nav>

            <nav>
              <p><strong>Services</strong></p>

              <a href="/agile-transformation">Agile Team Transformation</a>
              <a href="/software-development">Software Development</a>
              <a href="/continuous-delivery">Continuous Delivery</a>
              <a href="/devops">DevOps</a>
              <a href="/support-and-maintainance">Support &amp; Maintenance</a>
            </nav>
          </div>

          <div className='col-6 col-lg-2 offset-lg-1'>
            <nav>
              <p><strong>Resources</strong></p>

              <a href="/blog">Blog</a>
              <a href="/resources/ebook">E-Books</a>
              <a href="https://learn.madetech.com">Learn Tech</a>
            </nav>

            <nav>
              <p><strong>Company</strong></p>

              <a href="/careers/academy">Academy</a>
              <a href="/careers">Careers</a>
              <a href="/contact">Contact Us</a>
              <a href="/ext/handbook">Handbook</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
