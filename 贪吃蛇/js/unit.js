/// <reference path="enum.js" />

/**
 * 单位
 * @class Unit
 * @constructor 构造函数
 */
function Unit() {
    /**
     * 单位名称
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
Unit.prototype.constructor = Unit;

/**
 * 玩家（障碍）
 * @class User
 * @extends {Unit}
 * @constructor 构造函数
 */
function User() {
    Unit.call(this);
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
     * 样式
     * @property {Number} [CssClass=player_red]
     */
    this.CssClass = "player_red";
}
User.prototype = new Unit();
User.prototype.constructor = User;

/**
 * 玩家头部（障碍）
 * @class User
 * @extends {Unit}
 * @constructor 构造函数
 * @param {String} headClass 头部样式
 */
function UserHead(headClass) {
    User.call(this);
    /**
     * 样式
     * @property {Number} [CssClass=player_red]
     */
    this.CssClass = headClass;
}
UserHead.prototype = new User();
UserHead.prototype.constructor = UserHead;

/**
 * 石头（障碍）
 * @class User
 * @extends {Unit}
 * @constructor 构造函数
 */
function Rock() {
    Unit.call(this);
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
     * 样式
     * @property {Number} [CssClass=unit_rock]
     */
    this.CssClass = "unit_rock";
}
Rock.prototype = new Unit();
Rock.prototype.constructor = Rock;