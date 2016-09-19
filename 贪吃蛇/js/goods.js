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
 * @class Road
 * @extends {Goods}
 * @constructor 构造函数
 */
function Road() {
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
    this.Speed = 1.0;
    /**
     * 样式
     * @property {Number} [CssClass=goods_road]
     */
    this.CssClass = "goods_road";
}
Road.prototype = new Goods();
Road.prototype.constructor = Road;

/**
 * 墙（障碍）
 * @class Wall
 * @extends {Goods}
 * @constructor 构造函数
 */
function Wall() {
    Goods.call(this);
    /**
     * 是否允许通过
     * @property {Bollean} IsBar
     */
    this.IsBar = false;
    /**
     * 样式
     * @property {Number} [CssClass=goods_bar]
     */
    this.CssClass = "goods_bar";
}
Wall.prototype = new Goods();
Wall.prototype.constructor = Wall;