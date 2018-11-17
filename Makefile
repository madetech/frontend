all: clean dist lib

dist:
	mkdir -p dist/{css,fonts,js,images}
	cp node_modules/@madetech/marketing-assets/fonts/neuzeit* dist/fonts
	cp node_modules/@madetech/marketing-assets/logos/* dist/images
	npm run sass:build

	touch dist/js/madetech-frontend.js
	cat node_modules/bootstrap/js/dist/util.js >> dist/js/madetech-frontend.js
	cat node_modules/bootstrap/js/dist/collapse.js >> dist/js/madetech-frontend.js

	cp -r src/images/ dist/images/

lib:
	npm run lib:build

publish:
	npm install
	npm publish --access public
	npm run release

clean:
	rm -rf lib/
	rm -rf dist/

clean-docs:
	rm -rf docs/assets
	rm -rf docs/styleguide

docs: docs/assets docs/styleguide

docs/assets:
	cp -r dist/ docs/assets/

docs/styleguide:
	GH_PAGES=true npm run docs:styleguide
