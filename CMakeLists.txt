cmake_minimum_required(VERSION 3.5)
project(networkit-website NONE)

add_custom_target(website ALL
		COMMAND rm -rf www
		COMMAND sphinx-build ${CMAKE_SOURCE_DIR}/src www)

