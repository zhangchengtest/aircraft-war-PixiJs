"use strict";var _createClass=function(){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}}();function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var Enemy=function(){function e(){_classCallCheck(this,e),this.enemy=null}return _createClass(e,[{key:"init",value:function(e,n){var t=su.filmstrip("images/enemy1.png",87,123);return this.enemy=new PIXI.extras.AnimatedSprite(t),this.enemy.position.x=e,this.enemy.position.y=n,this.enemy.vy=1,this.enemy.vx=0,this.enemy.coin=2,this.enemy.health=2,this.enemy.animationSpeed=.6,this.enemy.play(),this.enemy}},{key:"boss",value:function(e,n){return this.enemy=new PIXI.Sprite(PIXI.loader.resources["images/boss.png"].texture),this.enemy.position.x=e,this.enemy.position.y=n,this.enemy.vy=1.2,this.enemy.width=225,this.enemy.height=153.88,this.enemy.vx=0,this.enemy.coin=20,this.enemy.health=38,this.enemy}}]),e}();