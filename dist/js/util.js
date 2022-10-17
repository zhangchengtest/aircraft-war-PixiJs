"use strict";

/* 键盘绑定 */
function keyboard(value) {
  var key = {};
  key.value = value;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = function (event) {
    if (event.key === key.value) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
      event.preventDefault();
    }
  };

  //The `upHandler`
  key.upHandler = function (event) {
    if (event.key === key.value) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
      event.preventDefault();
    }
  };

  //Attach event listeners
  var downListener = key.downHandler.bind(key);
  var upListener = key.upHandler.bind(key);

  window.addEventListener("keydown", downListener, false);
  window.addEventListener("keyup", upListener, false);

  // Detach event listeners
  key.unsubscribe = function () {
    window.removeEventListener("keydown", downListener);
    window.removeEventListener("keyup", upListener);
  };
  return key;
}
/* 碰撞检测 */
//The `hitTestRectangle` function
function hitTestRectangle(r1, r2) {

  //Define the variables we'll need to calculate
  var hit = void 0,
      combinedHalfWidths = void 0,
      combinedHalfHeights = void 0,
      vx = void 0,
      vy = void 0;

  //hit will determine whether there's a collision
  hit = false;

  //Find the center points of each sprite
  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  //Find the half-widths and half-heights of each sprite
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  //Calculate the distance vector between the sprites
  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  //Figure out the combined half-widths and half-heights
  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  //Check for a collision on the x axis
  if (Math.abs(vx) < combinedHalfWidths) {

    //A collision might be occuring. Check for a collision on the y axis
    if (Math.abs(vy) < combinedHalfHeights) {

      //There's definitely a collision happening
      hit = true;
    } else {

      //There's no collision on the y axis
      hit = false;
    }
  } else {

    //There's no collision on the x axis
    hit = false;
  }

  //`hit` will be either `true` or `false`
  return hit;
};

var _toast = document.createElement('div');
$(function () {
  document.body.appendChild(_toast);
});
function toast(content) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgba(255,255,255,1)';
  var fontColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'green';

  _toast.innerHTML = content;
  _toast.style.cssText = "\n    text-align:center;\n    color:" + fontColor + ";\n    position:fixed;\n    top:28%;\n    left:50%;\n    transform: translateX(-50%) skewX(-8deg);\n    background: " + bgColor + ";\n    padding:6px 18px;\n    font-size:14px;\n  ";
  $(_toast).fadeIn();
  // document.body.appendChild(_toast);

  setTimeout(function () {
    $(_toast).fadeOut();
  }, 2000);
}

/* 计算排名进行提示 */
function calcRankingList(coin) {
  if (coin < 5) return;
  if (coin % 15 === 0) {
    var data = JSON.parse(sessionStorage.getItem('rankinglist'));
    data.push({
      user: _Main.userName,
      coin: coin,
      flag: true
    });
    data.sort(function (a, b) {
      return b.coin - a.coin;
    });
    data.forEach(function (item, index) {
      if (item.flag && index !== 0) {
        toast("\u8DDD\u524D\u4E00\u540D[<span style='color:#b00101'>" + data[index - 1].username + "</span>][<span style='color:#b00101'>" + (data[index - 1].coin - coin) + "</span>]\u5206,<br/>\u7EE7\u7EED\u52A0\u6CB9!");
      }
      if (index === 0) {
        toast("\u606D\u559C\u4F60,\u5F53\u524D\u6392\u540D\u7B2C\u4E00\uFF01\u8D85\u8D8A\u7B2C\u4E8C[" + (coin - data[index + 1].coin) + "]\u5206");
      }
    });
  }
}