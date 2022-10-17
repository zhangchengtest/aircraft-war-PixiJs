/* 敌机 */
class Enemy{
    constructor(){
        this.enemy=null;
    }
    /* 普通敌机 */
    init (x,y, name){
        
        // console.log(name)
        this.enemy = new PIXI.Sprite(PIXI.loader.resources[name].texture);
        // this.enemy =  new PIXI.Text(name);
        this.enemy.position.x = x;
        this.enemy.position.y = y;
        this.enemy.vy = 4;
        this.enemy.vx = 0;
        this.enemy.coin = 2;
        this.enemy.health = 2;
        this.enemy.width = 30 * 2;
        this.enemy.height = 30 * 2;
        // this.enemy.play();
        return this.enemy;
    }
    boss (x,y){
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
}
