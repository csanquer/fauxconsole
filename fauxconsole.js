/*! fauxconsole originally by by Chris Heilmann (http://wait-till-i.com);
 * forked by Charles Sanquer (https://github.com/csanquer/fauxconsole);
 * re-written by Roland Hummel (https://github.com/defaude/fauxconsole).
 */
(function (window) {
    "use strict"; // mostly for me and my IDE :)

    // --- some tools ---
    function createElement(tagName, attributes, innerHTML) {
        var element = document.createElement(tagName);
        for (var attr in attributes) {
            if (attributes.hasOwnProperty(attr)) {
                element[attr] = attributes[attr];
            }
        }
        if (innerHTML) {
            element.innerHTML = innerHTML;
        }
        return element;
    }

    var consoleDiv, consoleContent;
    
    //check existence of console
    if (typeof window.console === 'undefined' || typeof window.console.log === 'undefined') {
        consoleDiv = createElement('div', { className: 'fauxconsole' });

        consoleDiv.appendChild(createElement('a', { href: 'javascript:console.hide()' }, 'hide'));
        consoleDiv.appendChild(createElement('a', { href: 'javascript:console.show()' }, 'show'));
        consoleDiv.appendChild(createElement('a', { href: 'javascript:console.clear()' }, 'clear'));

        consoleContent = createElement('pre');
        consoleDiv.appendChild(consoleContent);

        (document.body || document.documentElement).appendChild(consoleDiv);
        hide();

        window.console = {
            show: function show() { 
                consoleDiv.style.display = 'block'; 
            },
            hide: function hide() { 
                consoleDiv.style.display = 'none'; 
            },
            clear: function clear () {
                consoleContent.innerHTML = '';
            },
            log: function log() {
                for (var i = 0, l = arguments.length; i < l; ++i) {
                    consoleContent.innerHTML += '<br/><br/>' + arguments[i];
                }
                show();
            }
            
        };
    }
    
    if (typeof window.console.debug === 'undefined') {
        window.console.debug = window.console.log;
    }
    
    if (typeof window.console.info === 'undefined') {
        window.console.info = window.console.log;
    }
    
    if (typeof window.console.warn === 'undefined') {
        window.console.warn = window.console.log;
    }
    
    if (typeof window.console.error === 'undefined') {
        window.console.error = window.console.log;
    }
    
    if (typeof window.console.assert === 'undefined') {
        window.console.assert = function assert() {
            if (!arguments[0]) {
                if (arguments[1]) {
                    window.console.log(arguments[1]);
                } else {
                    window.console.log('Assertion failed');
                }
            }
        };
    }
    
    if (typeof window.console.show === 'undefined') {
        window.console.show = function () {};
    }
    
    if (typeof window.console.hide === 'undefined') {
        window.console.hide = function () {};
    }
    
    if (typeof window.console.clear === 'undefined') {
        window.console.clear = function () {};
    }
}(window, window.console, 'fauxconsole'));
