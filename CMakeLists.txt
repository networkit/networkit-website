cmake_minimum_required(VERSION 3.5)
project(networkit-website NONE)

add_custom_target(website ALL
		COMMAND rm -rf www
		COMMAND sphinx-build ${CMAKE_SOURCE_DIR}/src www
		COMMAND rm -rf www/_static/js/jquery-*
		COMMAND rm -rf www/_static/bootstrap-sphinx.js)

# The last two commands remove any jquery-versions and files incompatible with newer jquery from sphinx-bootstrap-theme
# For "jquery-*" the internal sphinx-version is used (_static/jquery.js). "bootstrap-sphinx.js" is replaced by a custom version
# based on code from https://github.com/ryan-roemer/sphinx-bootstrap-theme/blob/master/sphinx_bootstrap_theme/bootstrap/static/bootstrap-sphinx.js_t