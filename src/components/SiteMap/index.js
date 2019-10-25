import React from 'react'
import logoSrc from '@madetech/marketing-assets/logos/made-tech-logo-colour-white.png'
import crownSrc from '@madetech/marketing-assets/logos/certifications/logo-crown-commercial-service.png'
import cyberSrc from '@madetech/marketing-assets/logos/certifications/logo-cyber-essentials-plus.png'
import isoSrc from '@madetech/marketing-assets/logos/certifications/logo-ISO-cert.png'

export default function SiteMap () {
  return (
    <div className='site_map'>
      <div className='container'>
        <div className='row map_header'>
          <div className="col-lg-2 col-sm-2 col-12">
            <img src={logoSrc} height='19' alt='Made Tech' />
          </div>
          <div className="col-lg-7 offset-lg-3 col-sm-6 offset-sm-4 col-12 tagline">
            Made Tech is a high-growth provider of Digital, Data and Technology services for the UK Public Sector
          </div>
        </div>
        
        <div className='row nav_links'>
          <div className='col-lg-4 col-sm-4 col-6'>
            <nav>
              <p><strong>Our Services</strong></p>

              <a href="/our-services/digital-service-delivery">Digital Service Delivery</a>
              <a href="/our-services/technology-skill-enablement">Technology Skills Enablement</a>
              <a href="/our-services/transform-legacy-applications">Transforming Legacy Applications</a>
              <a href="/our-services/data-infrastructure">Data Infrastructure &amp; Insights</a>
            </nav>
          </div>

          <div className='col-lg-2 offset-lg-1 col-sm-3 offset-sm-1 col-6'>
            <nav>
              <p><strong>Resources</strong></p>

              <a href="/blog">Blog</a>
              <a href="/resources/books">Books</a>
              <a href="https://learn.madetech.com">Learn Tech</a>
            </nav>
          </div>

          <div className='col-lg-2 offset-lg-3 col-sm-3 offset-sm-1 col-6 sitemap__company'>
            <nav>
              <p><strong>Company</strong></p>

              <a href="/careers/academy">Academy</a>
              <a href="/careers">Careers</a>
              <a href="/contact">Contact Us</a>
              <a href="/ext/handbook">Handbook</a>
            </nav>
          </div>
        </div>

        <div className='row'>
            <div className="col-12 logos">
              <img src={crownSrc} height='60' alt='Crown Commercial Service' />
              <img src={cyberSrc} height='60' alt='Cyber Essentials Plus' />
              <img src={isoSrc} height='60' alt='ISO 27001' />
            </div>
          </div>
      </div>
    </div>
  )
}
