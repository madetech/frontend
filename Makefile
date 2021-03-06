all: clean dist dist/madetech-frontend.zip lib

clean:
	rm -rf lib/
	rm -rf dist/

dist:
	mkdir -p dist/{css,fonts,js,images}
	mkdir -p dist/images/icons
	cp node_modules/@madetech/marketing-assets/fonts/*.{eot,ttf,woff} dist/fonts
	cp node_modules/@madetech/marketing-assets/logos/*.png dist/images
	cp node_modules/@madetech/marketing-assets/logos/certifications/*.png dist/images
	cp node_modules/@madetech/marketing-assets/icons/* dist/images/icons
	npm run sass:build

	touch dist/js/madetech-frontend.js
	cat node_modules/bootstrap/js/dist/util.js >> dist/js/madetech-frontend.js
	cat node_modules/bootstrap/js/dist/collapse.js >> dist/js/madetech-frontend.js

	cp -r src/images/ dist/images/

dist/madetech-frontend.zip:
	zip -r dist/madetech-frontend.zip dist/

lib:
	npm run lib:build

clean-docs:
	rm -rf docs/assets
	rm -rf docs/styleguide

docs: docs/assets docs/styleguide

docs/assets:
	cp -r dist/ docs/assets/
	cp src/styleguide/highlighting.css docs/assets/css/

docs/styleguide:
	GH_PAGES=true npm run docs:styleguide
