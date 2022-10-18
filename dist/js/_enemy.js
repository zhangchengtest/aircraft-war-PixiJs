'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 敌机 */
var Enemy = function () {
    function Enemy() {
        _classCallCheck(this, Enemy);

        this.enemy = null;
    }
    /* 普通敌机 */


    _createClass(Enemy, [{
        key: 'init',
        value: function init(x, y, name) {

            // console.log(name)
            this.enemy = new PIXI.Sprite(PIXI.loader.resources[name].texture);
            // this.enemy =  new PIXI.Text(name);
            this.enemy.position.x = x;
            this.enemy.position.y = y;
            this.enemy.vy = 1;
            this.enemy.vx = 0;
            this.enemy.coin = 2;
            this.enemy.health = 2;
            this.enemy.width = 30 * 2;
            this.enemy.height = 30 * 2;
            // this.enemy.play();
            return this.enemy;
        }
    }, {
        key: 'boss',
        value: function boss(x, y) {
            this.enemy = new PIXI.Sprite(PIXI.loader.resources['images/boss.png'].texture);
            this.enemy.position.x = x;
            this.enemy.position.y = y;
            this.enemy.vy = 1.2;
            this.enemy.width = 112.5 * 2;
            this.enemy.height = 76.94 * 2;
            this.enemy.vx = 0;
            this.enemy.coin = 20;
            this.enemy.health = 38;
            return this.enemy;
        }
    }]);

    return Enemy;
}();