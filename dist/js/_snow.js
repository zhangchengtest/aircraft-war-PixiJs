'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 雪花类 */
var Snow = function () {
    function Snow() {
        _classCallCheck(this, Snow);

        this.snow = null;
    }

    _createClass(Snow, [{
        key: 'renderer',
        value: function renderer(x, y, r, alpha) {
            this.snow = new PIXI.Graphics();
            this.snow.beginFill(0xFFFFFF, alpha);
            this.snow.drawCircle(10, 10, r);
            this.snow.endFill();
            this.snow.x = x;
            this.snow.y = y;
            app.stage.addChild(this.snow);
            this.snow.ResetPosition = this.ResetPosition;
            return this.snow;
        }
    }, {
        key: 'rendererSnow',
        value: function rendererSnow(x, y, r, alpha) {
            this.snow = new PIXI.Sprite(PIXI.loader.resources['images/snow.png'].texture);
            this.snow.x = x;
            this.snow.y = y;
            this.snow.width = r;
            this.snow.height = r;
            this.snow.alpha = alpha;
            this.snow.anchor.x = 0.5;
            this.snow.anchor.y = 0.5;
            this.snow.ResetPosition = this.ResetPosition;
            return this.snow;
        }
    }, {
        key: 'ResetPosition',
        value: function ResetPosition(item) {
            if (item.x < -10) {
                item.x = Math.random() * $('.app').width();
                item.y = -50;
            }
            if (item.y > $('.app').height()) {
                item.x = Math.random() * $('.app').width();
                item.y = -50;
            }
        }
    }]);

    return Snow;
}();