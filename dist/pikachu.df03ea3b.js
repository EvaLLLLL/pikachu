// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".skin * {\n    box-sizing: border-box;\npadding: 0;\nmargin: 0;\n}\n\n.skin *::before, .skin *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n.skin {\n    background: #ffe602;\n    position: relative;\n    min-height: 60vh;\n}\n\n.nose {\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    border-bottom: none;\n    position: absolute;\n    left: 50%;\n    top: 135px;\n    margin-left: -10px;\n    z-index: 10;\n}\n\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n}\n    25% {\n        transform: rotate(5deg);\n}\n    50% {\n        transform: rotate(0deg);\n}\n    75% {\n        transform: rotate(-5deg);\n}\n    100% {\n        transform: rotate(0deg);\n}\n}\n\n.nose:hover {\n    transform-origin: center bottom;\n    animation: wave 300ms infinite linear;\n}\n\n.yuan {\n    position: absolute;\n    height: 6px;\n    width: 20px;\n    top: -16px;\n    left: -10px;\n    border-radius: 20px 20px 0 0;\n    background-color: black;\n}\n\n.eye {\n    border: 2px solid #000000;\n    position: absolute;\n    height: 64px;\n    width: 64px;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background-color: #2e2e2e;\n    border-radius: 50%;\n}\n\n.eye::before {\n    content: '';\n    display: block;\n    border: 3px solid black;\n    width: 30px;\n    height: 30px;\n    background-color: white;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top: 1px;\n}\n\n.eye.left {\n    transform: translateX(-100px);\n}\n\n.eye.right {\n    transform: translateX(100px);\n}\n\n.mouth {\n    height: 200px;\n    width: 200px;\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n}\n\n.mouth .up {\n    position: relative;\n    top: -20px;\n    z-index: 1;\n}\n\n.mouth .up .lip {\n    border: 5px solid;\n    height: 30px;\n    width: 100px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    left: 50%;\n    margin-left: -50px;\n    position: relative;\n    position: absolute;\n    background: #ffe602;\n}\n\n.mouth .up .lip::before {\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background: #ffe602;\n}\n\n.mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    transform: rotate(-20deg) translateX(-53px);\n}\n\n.mouth .up .lip.left::before {\n    right: -6px;\n}\n\n.mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n    transform: rotate(20deg) translateX(53px);\n}\n\n.mouth .up .lip.right::before {\n    left: -6px;\n}\n\n.mouth .down {\n    height: 180px;\n    width: 100%;\n    position: absolute;\n    top: 5px;\n    overflow: hidden;\n}\n\n.mouth .down .yuan1 {\n    border: 3px solid black;\n    width: 150px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    height: 1000px;\n    border-radius: 75px/300px;\n    background: #9b000a;\n    overflow: hidden;\n}\n\n.mouth .down .yuan1 .yuan2 {\n    height: 300px;\n    width: 300px;\n    position: absolute;\n    bottom: -160px;\n    left: 50%;\n    margin-left: -150px;\n    background-color: #ff485f;\n    border-radius: 50%;\n}\n\n.face {\n    border: 3px solid black;\n    height: 82px;\n    width: 82px;\n    position: absolute;\n    left: 50%;\n    margin-left: -42px;\n    border-radius: 50%;\n    background-color: #ff0101;\n    top: 200px;\n    z-index: 3;\n}\n\n.face > img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n\n.face.left {\n    transform: translateX(-165px);\n}\n\n.face.left > img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n}\n\n.face.right {\n    transform: translateX(165px);\n}";
var _default = string;
exports.default = _default;
},{}],"THhI":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  n: 1,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
    btnPlay: document.querySelector("#btnPlay"),
    btnPause: document.querySelector("#btnPause"),
    btnReplay: document.querySelector("#btnReplay"),
    btnSlow: document.querySelector("#btnSlow"),
    btnNormal: document.querySelector("#btnNormal"),
    btnFast: document.querySelector("#btnFast")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnReplay": "replay",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      player.ui.btnReplay.style = "display: block";
      player.ui.btnPause.style = "display: none";
      player.ui.btnSlow.style = "display: none";
      player.ui.btnNormal.style = "display: none";
      player.ui.btnFast.style = "display: none";
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.ui.btnPlay.style = "display: none";
    player.ui.btnPause.style = "display: block";
    player.ui.btnReplay.style = "display: none";
    player.id = setInterval(player.run, player.time);
  },
  replay: function replay() {
    player.ui.btnPlay.style = "display: none";
    player.ui.btnPause.style = "display: block";
    player.ui.btnReplay.style = "display: none";
    player.ui.btnSlow.style = "display: block";
    player.ui.btnNormal.style = "display: block";
    player.ui.btnFast.style = "display: block";
    player.n = 1;
    player.play();
  },
  pause: function pause() {
    player.ui.btnPlay.style = "display: block";
    player.ui.btnPause.style = "display: none";
    player.ui.btnReplay.style = "display: none";
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["THhI"], null)
//# sourceMappingURL=pikachu.df03ea3b.js.map