all: clean dist lib docs/styleguide

src/assets:
	mkdir -p src/assets/images/
	cp node_modules/@madetech/marketing-assets/logos/* src/assets/images/

dist:
	mkdir -p dist/{css,fonts,js,images}
	cp node_modules/@madetech/marketing-assets/fonts/neuzeit* dist/fonts
	cp node_modules/@madetech/marketing-assets/logos/* dist/images
	npm run sass:build

	touch dist/js/madetech-frontend.js
	cat node_modules/bootstrap/js/dist/util.js >> dist/js/madetech-frontend.js
	cat node_modules/bootstrap/js/dist/collapse.js >> dist/js/madetech-frontend.js

	cp public/favicon.ico dist/images/

lib:
	npm run lib:build

docs/styleguide:
	npm run styleguide:build
	cp public/favicon.ico docs/styleguide/

publish:
	npm publish --access public
	npm run release

clean:
	rm -rf lib/
	rm -rf docs/styleguide/
	rm -rf dist/
