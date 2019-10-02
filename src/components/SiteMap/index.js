import React from 'react'
import logoSrc from '@madetech/marketing-assets/logos/made-tech-logo-wht.png'
import crownSrc from '../../../dist/images/certifications/logo-crown-commercial-service.png'
import cyberSrc from '../../../dist/images/certifications/logo-cyber-essentials-plus.png'
import isoSrc from '../../../dist/images/certifications/logo-ISO-cert.png'

export default function SiteMap () {
  return (
    <div className='site_map'>
      <div className='container'>
        <div className='row map_header'>
          {/* <div className='col-7 col-lg-4 text-left text-lg-center'> */}
          <div className="col-lg-2 col-md-2">
            <img src={logoSrc} height='19' alt='Made Tech' />
          </div>
          <div className="col-lg-7 offset-lg-3 col-md-6 offset-md-4 tagline">
            Made Tech is a high-growth provider of Digital, Data and Technology services for the UK Public Sector
          </div>
        </div>
        
        <div className='row nav_links'>
          <div className='col-lg-4 col-md-4'>
            <nav>
              <p><strong>Our Services</strong></p>

              <a href="/our-services/digital-service-delivery">Digital Service Delivery</a>
              <a href="/our-services/technology-skill-enablement">Technology Skills Enablement</a>
              <a href="/our-services/transform-legacy-applications">Transforming Legacy Applications</a>
              <a href="/our-services/data-infrastructure">Data Infrastructure &amp; Insights</a>
            </nav>
          </div>

          <div className='col-lg-2 offset-lg-1 col-md-3 offset-md-1'>
            <nav>
              <p><strong>Resources</strong></p>

              <a href="/blog">Blog</a>
              <a href="/resources/ebook">E-Books</a>
              <a href="https://learn.madetech.com">Learn Tech</a>
            </nav>
          </div>

          <div className='col-lg-2 offset-lg-3 col-md-3 offset-md-1'>
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
            <div className="col-lg-12 logos">
              <img src={crownSrc} height='60' alt='Crown Commercial Service' />
              <img src={cyberSrc} height='60' alt='Cyber Essentials Plus' />
              <img src={isoSrc} height='60' alt='ISO 27001' />
            </div>
          </div>
      </div>
    </div>
  )
}
