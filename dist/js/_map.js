'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 地图类 */
var Map = function () {
    function Map() {
        _classCallCheck(this, Map);

        this.map = null;
    }

    _createClass(Map, [{
        key: 'init',
        value: function init(name) {
            this.map = new PIXI.extras.TilingSprite(PIXI.loader.resources[name].texture, $('.app').width(), $('.app').height());
            return this.map;
        }
    }]);

    return Map;
}();