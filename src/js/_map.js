/* 地图类 */
class Map{
    constructor() {
        this.map = null;
    }
    init (name){
        this.map = new PIXI.extras.TilingSprite(
            PIXI.loader.resources[name].texture,
            $('.app').width(),
            $('.app').height()
        );
        return this.map;
    }
}