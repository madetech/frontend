import React from 'react'
import logoSrc from '@madetech/marketing-assets/logos/made-tech-logo-wht.png'
import linkedinSrc from '@madetech/marketing-assets/icons/linkedin.svg'
import twitterSrc from '@madetech/marketing-assets/icons/twitter.svg'
import githubSrc from '@madetech/marketing-assets/icons/github.svg'

export default function Footer () {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 d-none d-lg-block'>
            © <span itemprop='copyrightYear'>2018</span> <span itemprop='copyrightHolder' itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Made Tech Limited.</span></span>
          </div>

          <div className='col-lg-4 text-center'>
            <a className='footer__logo' href='https://www.madetech.com' rel='home'>
              <img src={logoSrc} height='25' alt='Made Tech' />
            </a>
          </div>

          <nav className='col-lg-4 text-right d-none d-lg-block'>
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
    </div>
  )
}
