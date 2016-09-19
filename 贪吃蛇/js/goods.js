/// <reference path="enum.js" />

/**
 * 方块
 * @class Goods
 * @constructor 构造函数
 */
function Goods() {
    /**
     * 方块名称
     * @property {String} Name
     */
    this.Name = "";
    /**
     * 样式
     * @property {String} CssClass
     */
    this.CssClass = "";
    /**
     * 关联DIV元素
     * @property {Element} Element
     */
    this.Element = undefined;
}
Goods.prototype.constructor = Goods;

/**
 * 路（非障碍）
 * @class Goods_Road
 * @extends {Goods}
 * @constructor 构造函数
 */
function Goods_Road() {
    Goods.call(this);
    /**
     * 是否允许通过
     * @property {Bollean} IsBar
     */
    this.IsBar = false;
    /**
     * 损害点数
     * @property {Number} HurtPoint
     */
    this.HurtPoint = 0;
    /**
     * 通过速度
     * @property {Number} Speed
     */
    this.Speed = 1.0;
    /**
     * 样式
     * @property {Number} [CssClass=goods_road]
     */
    this.CssClass = "goods_road";
}
Goods_Road.prototype = new Goods();
Goods_Road.prototype.constructor = Goods_Road;

/**
 * 墙（障碍）
 * @class Goods_Wall
 * @extends {Goods}
 * @constructor 构造函数
 */
function Goods_Wall() {
    Goods.call(this);
    /**
     * 是否允许通过
     * @property {Bollean} IsBar
     */
    this.IsBar = true;
    /**
     * 样式
     * @property {Number} [CssClass=goods_bar]
     */
    this.CssClass = "goods_bar";
}
Goods_Wall.prototype = new Goods();
Goods_Wall.prototype.constructor = Goods_Wall;

/**
 * 森林（障碍）
 * @class Goods_ForestWall
 * @extends {Goods}
 * @constructor 构造函数
 */
function Goods_ForestWall() {
    Goods.call(this);
    /**
      * 是否允许通过
      * @property {Bollean} IsBar
      */
    this.IsBar = true;
    /**
     * 损害点数
     * @property {Number} HurtPoint
     */
    this.HurtPoint = 0;
    /**
     * 通过速度
     * @property {Number} Speed
     */
    this.Speed = 0.5;
    /**
     * 样式
     * @property {Number} [CssClass=goods_forestwall]
     */
    this.CssClass = "goods_forestwall";
}
Goods_ForestWall.prototype = new Goods();
Goods_ForestWall.prototype.constructor = Goods_ForestWall;

/**
 * 草地（非障碍）
 * @class Goods_Grassland
 * @extends {Goods}
 * @constructor 构造函数
 */
function Goods_Grassland() {
    Goods.call(this);
    /**
     * 是否允许通过
     * @property {Bollean} IsBar
     */
    this.IsBar = false;
    /**
     * 损害点数
     * @property {Number} HurtPoint
     */
    this.HurtPoint = 0;
    /**
     * 通过速度
     * @property {Number} Speed
     */
    this.Speed = 1.0;
    /**
     * 样式
     * @property {Number} [CssClass=goods_grassland]
     */
    this.CssClass = "goods_grassland";
}
Goods_Grassland.prototype = new Goods();
Goods_Grassland.prototype.constructor = Goods_Grassland;