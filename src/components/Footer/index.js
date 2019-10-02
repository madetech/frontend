import React from 'react'
import linkedinSrc from '@madetech/marketing-assets/icons/linkedin.svg'
import twitterSrc from '@madetech/marketing-assets/icons/twitter.svg'
import githubSrc from '@madetech/marketing-assets/icons/github.svg'

export default function Footer () {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center col-lg-4 text-lg-left d-lg-block footer__copyright_notice'>
            © <span itemProp='copyrightHolder' itemScope itemType='http://schema.org/Organization'><span itemProp='name'>Made Tech</span></span> <span itemProp='copyrightYear'>2019</span>
            <span> | </span>
            <a href="https://www.madetech.com/privacy">Privacy Policy</a>
          </div>

          <nav className='col-12 text-center col-lg-8 text-lg-right footer__social_wrapper'>
            <a className='footer__social_link' href='https://www.madetech.com/ext/linkedin'>
              <img src={linkedinSrc} alt='LinkedIn' height='25' />
            </a>

            <a className='footer__social_link' href='https://www.madetech.com/ext/twitter'>
              <img src={twitterSrc} alt='Twitter' height='25' />
            </a>

            <a className='footer__social_link' href='https://www.madetech.com/ext/github'>
              <img src={githubSrc} alt='GitHub' height='25' />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
