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
          <div className='col-lg-2 col-sm-3 col-6'>
            <nav>
              <p><strong>Our Services</strong></p>

              <a href="/our-services/digital-service-delivery">Digital</a>
              <a href="/our-services/data-infrastructure">Data</a>
              <a href="/our-services/technology-skill-enablement">Tech capability</a>
              <a href="/our-services/transform-legacy-applications">Tech Legacy</a>
            </nav>
          </div>

          <div className='col-lg-2 col-sm-3 col-6'>
            <nav>
              <p><strong>Sectors</strong></p>
              
              <a href="/sectors/central-government CHECK">Central Gov.</a>
              <a href="/sectors/local-government">Local Gov.</a>
              <a href="/sectors/housing">Housing</a>
              <a href="/sectors/healthcare">Health</a>
              <a href="/sectors/transport">Transport</a>
              <a href="/sectors/education">Education</a>
              <a href="/sectors/police-justice-emergency">Police, Justice &#38; Emergencey</a>
              <a href="/sectors/space-defence-security">Space, Defence &#38; Security</a>
            </nav>
          </div>

          <div className='col-lg-2 col-sm-3 col-6'>
            <nav>
              <p><strong>Why Made Tech</strong></p>
              
              <a href="/our-purpose">Purpose &#38; Misson</a>
              <a href="/frameworks">Frameworks</a>
              <a href="/partners">Partners</a>
              <a href="/blog">Blog</a>
              <a href="/resources/books">Books</a>
              <a href='https://learn.madetech.com'>Learn</a>
            </nav>
          </div>        

          <div className='col-lg-2 col-sm-3 col-6'>
            <nav>
              <p><strong>Case Studies</strong></p>
              
              <a href="/case-study">MoJ</a>
            </nav>
          </div>


          <div className='col-lg-2 col-sm-3 col-6'>
            <nav>
              <p><strong>Get in touch</strong></p>
              
              <a href="/contact">Contact us</a>
              <a href="/careers">Careers</a>
              <a href="/made-academy">Academy</a>
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
