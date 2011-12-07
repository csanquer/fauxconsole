/* 
 * Orginal Faux Console by Chris Heilmann http://wait-till-i.com 
 * at http://icant.co.uk/sandbox/fauxconsole/
 * 
 * Forked by Charles SANQUER
 * https://github.com/csanquer/fauxconsole
 * 
 */

if (!window.console) {
    var console = {
        init: function () {
            console.d = document.createElement('div');
            document.body.appendChild(console.d);
            var a = document.createElement('a');
            a.href = 'javascript:console.hide()';
            a.innerHTML = 'close';
            console.d.appendChild(a);
            var a = document.createElement('a');
            a.href = 'javascript:console.clear();';
            a.innerHTML = 'clear';
            console.d.appendChild(a);
            var id = 'fauxconsole';
            if (!document.getElementById(id)) {
                console.d.id = id;
            }
            console.hide();
        },
        hide: function () {
            console.d.style.display = 'none';
        },
        show: function () {
            console.d.style.display = 'block';
        },
        log: function () {
            for (var i = 0; i < arguments.length; i++) 
            {
                console.d.innerHTML += '<br/>' + arguments[i];
            }
            console.show();
        },
        clear: function () {
            console.d.parentNode.removeChild(console.d);
            console.init();
            console.show();
        },
        /*Simon Willison rules*/
        addLoadEvent: function (func) {
            var oldonload = window.onload;
            if (typeof window.onload != 'function') {
                window.onload = func;
            } else {
                window.onload = function () {
                    if (oldonload) {
                        oldonload();
                    }
                    func();
                }
            };
        }
    };
    console.addLoadEvent(console.init);
}

if (!window.console.debug) {
    console.debug = function () {
        console.log.apply(this, arguments);
    };
}

if (!window.console.info) {
    console.info = function () {
        console.log.apply(this, arguments);
    };
}

if (!window.console.warn) {
    console.warn = function () {
        console.log.apply(this, arguments);
    };
}

if (!window.console.error) {
    console.error = function () {
        console.log.apply(this, arguments);
    };
}

if (!window.console.assert) {
    console.assert = function () {
        console.log.apply(this, arguments);
    };
}
