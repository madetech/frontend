import React from 'react'

export default function FooterTest() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center col-sm-6 text-sm-left d-sm-block footer__copyright_notice'>
            © <span itemProp='copyrightHolder' itemScope itemType='http://schema.org/Organization'><span itemProp='name'>Made Tech</span></span> <span itemProp='copyrightYear' data-test='copyrightYear'>{currentYear}</span>
            <span> | </span>
            <a href="https://www.madetech.com/privacy">Privacy Policy</a>
          </div>

          <nav className='col-12 text-center col-sm-6 text-sm-right footer__social_wrapper'>
            {children}
          </nav>
        </div>
      </div>
    </footer>
  )
}
