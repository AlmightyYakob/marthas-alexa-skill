BUILD_PATH=./build
BABELRC=./.babelrc
WEBPACK_CONFIG=./webpack.config.js
ZIP_FILE=index.zip
LAMBDA_FUNCTION_NAME=marthas-flavor-skill

main:
	rm -rf $(BUILD_PATH); \
	babel --config-file $(BABELRC) -d $(BUILD_PATH) --ignore $(WEBPACK_CONFIG) *.js; \
	cp -r ./node_modules $(BUILD_PATH)/node_modules; \
	cd $(BUILD_PATH); \
	zip -r $(ZIP_FILE) package* *.js node_modules

push:
	aws lambda update-function-code \
		--function-name $(LAMBDA_FUNCTION_NAME) \
		--zip-file fileb://$(BUILD_PATH)/$(ZIP_FILE)

clean:
	rm -rf $(BUILD_PATH)
