"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 飞机类 */
var Aricraft = function () {
    function Aricraft() {
        _classCallCheck(this, Aricraft);

        this.Aricraft = null;
    }

    _createClass(Aricraft, [{
        key: "init",
        value: function init() {
            this.Aricraft = new PIXI.Sprite(PIXI.loader.resources['images/ace.png'].texture);
            this.Aricraft.vx = 0;
            this.Aricraft.vy = 0;

            this.Aricraft.isInvincible = false; //无敌
            this.bindKeyboard();
            return this.Aricraft;
        }
    }, {
        key: "bindKeyboard",
        value: function bindKeyboard() {
            var _this = this;

            var left = keyboard("ArrowLeft"),
                up = keyboard("ArrowUp"),
                right = keyboard("ArrowRight"),
                down = keyboard("ArrowDown"),
                space = keyboard(" ");
            left.press = function () {
                _this.Aricraft.vx = -8;
                _this.Aricraft.vy = 0;
            };
            left.release = function () {
                if (!right.isDown && _this.Aricraft.vy === 0) {
                    _this.Aricraft.vx = 0;
                }
            };
            //Up
            up.press = function () {
                _this.Aricraft.vy = -8;
                _this.Aricraft.vx = 0;
            };
            up.release = function () {
                if (!down.isDown && _this.Aricraft.vx === 0) {
                    _this.Aricraft.vy = 0;
                }
            };

            //Right
            right.press = function () {
                _this.Aricraft.vx = 8;
                _this.Aricraft.vy = 0;
            };
            right.release = function () {
                if (!left.isDown && _this.Aricraft.vy === 0) {
                    _this.Aricraft.vx = 0;
                }
            };

            //Down
            down.press = function () {
                _this.Aricraft.vy = 8;
                _this.Aricraft.vx = 0;
            };
            down.release = function () {
                if (!up.isDown && _this.Aricraft.vx === 0) {
                    _this.Aricraft.vy = 0;
                }
            };

            // space 
            space.press = function () {
                _Main.createBullet();
            };
        }
        /* 开启无敌模式 */

    }, {
        key: "setInvincible",
        value: function setInvincible() {
            var _this2 = this;

            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16278562.9266627;

            this.Aricraft.isInvincible = true;
            var params = {
                alpha: 1
            };
            TweenMax.to(params, 0.18, {
                alpha: 0.3,
                repeat: 11,
                // ease:Bounce.easeOut,
                onUpdate: function onUpdate() {
                    _this2.Aricraft.alpha = params.alpha;
                },
                yoyo: true,
                yoyoEase: true
            });
            this.Aricraft.tint = color;
            // TODO:注释后飞机无敌
            setTimeout(function () {
                _this2.Aricraft.isInvincible = false;
                _this2.Aricraft.tint = 0xFFFFFF;
            }, 2000);
        }
    }]);

    return Aricraft;
}();