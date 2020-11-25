import React from 'react'
import logoSrc from '@madetech/marketing-assets/logos/made-tech-logo-colour-white.png'
import crownSrc from '@madetech/marketing-assets/logos/certifications/logo-crown-commercial-service.png'
import cyberSrc from '@madetech/marketing-assets/logos/certifications/logo-cyber-essentials-plus-white.png'
import iso9001Src from '@madetech/marketing-assets/logos/certifications/iso-badge-9001.png'
import iso27001Src from '@madetech/marketing-assets/logos/certifications/iso-badge-27001.png'

export default function SiteMap({ children }) {
	return (
		<div className='site_map'>
			<div className='container'>
				<div className='row map_header'>
					<div className="col-lg-2 col-sm-2 col-12">
						<img src={logoSrc} height='19' alt='Made Tech' />
					</div>
					<div className="col-lg-7 offset-lg-3 col-sm-6 offset-sm-4 col-12 tagline">
						Made Tech provide Digital, Data and Technology services to the UK public sector
          </div>
				</div>

				<div className='row nav_links'>
					{children}
				</div>

				<div className='row'>
					<div className="col-12 text-center text-sm-left logos">
						<img src={crownSrc} height='100' alt='Crown Commercial Service' />
						<img src={cyberSrc} height='100' alt='Cyber Essentials Plus' />
						<img src={iso9001Src} height='100' alt='ISO 9001' />
						<img src={iso27001Src} height='100' alt='ISO 27001' />
					</div>
				</div>
			</div>
		</div>
	)
}
