#!/bin/sh

lessc fauxconsole.less fauxconsole.css
java -jar yuicompressor-2.4.2.jar fauxconsole.js -o fauxconsole.min.js
java -jar yuicompressor-2.4.2.jar fauxconsole.css -o fauxconsole.min.css
