'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Boom = function () {
    function Boom() {
        _classCallCheck(this, Boom);

        this.boom = null;
    }

    _createClass(Boom, [{
        key: 'play',
        value: function play(x, y) {
            var _frames = su.filmstrip('images/boom.png', 64, 64);
            this.boom = new PIXI.extras.AnimatedSprite(_frames);
            this.boom.position.x = x;
            this.boom.position.y = y;
            this.boom.width = 87;
            this.boom.height = 87;
            this.boom.animationSpeed = 0.26;
            this.boom.anchor.x = 0.5;
            this.boom.anchor.y = 0.5;
            this.boom.play();
            return this.boom;
        }
    }]);

    return Boom;
}();