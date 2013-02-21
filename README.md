# Faux Console

Inspired by Chris Heilmann's [original implementation](http://icant.co.uk/sandbox/fauxconsole/), this attempts to ease your developing / debugging pain in IE8 and below. :)

It checks if there is a `console` available in the current environment. If none is found, a simple log-to-div overlay is added to your DOM.