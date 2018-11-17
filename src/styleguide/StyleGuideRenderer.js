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
      <TopBar />

      <Header logoText='Frontend' />

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
