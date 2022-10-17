'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 子弹类 */
var Bullet = function () {
    function Bullet() {
        _classCallCheck(this, Bullet);

        this.bullet = null;
    }

    _createClass(Bullet, [{
        key: 'init',
        value: function init() {
            var texture = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new PIXI.Sprite(PIXI.loader.resources['images/bullet.png'].texture);
            var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 62 / 2;
            var h = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 128 / 2;
            var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -18;
            var x = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
            var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

            this.bullet = texture;
            this.bullet.width = w;
            this.bullet.height = h;
            this.bullet.vy = y;
            this.bullet.vx = x;
            this.bullet.rotation = r;
            this.bullet.isDest = false;
            return this.bullet;
        }
    }]);

    return Bullet;
}();