all: clean dist

dist:
	mkdir -p dist/{css,fonts,js,images}
	cp node_modules/@madetech/marketing-assets/fonts/neuzeit* dist/fonts
	cp node_modules/@madetech/marketing-assets/logos/* dist/images
	node_modules/.bin/node-sass --output-style expanded --source-map true --source-map-contents true --precision 6 src/madetech-frontend.scss dist/css/madetech-frontend.css
	node_modules/.bin/cleancss --level 1 --format breaksWith=lf --source-map --source-map-inline-sources --output dist/css/madetech-frontend.min.css dist/css/madetech-frontend.css

	touch dist/js/madetech-frontend.js
	cat node_modules/bootstrap/js/dist/util.js >> dist/js/madetech-frontend.js
	cat node_modules/bootstrap/js/dist/collapse.js >> dist/js/madetech-frontend.js

clean:
	rm -rf dist/
