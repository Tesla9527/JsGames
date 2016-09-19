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
 * @class Unit_User
 * @extends {Unit}
 * @constructor 构造函数
 */
function Unit_User() {
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
Unit_User.prototype = new Unit();
Unit_User.prototype.constructor = Unit_User;

/**
 * 玩家头部（障碍）
 * @class Unit_UserHead
 * @extends {Unit}
 * @constructor 构造函数
 * @param {String} headClass 头部样式
 */
function Unit_UserHead(headClass) {
    Unit_User.call(this);
    /**
     * 样式
     * @property {Number} [CssClass=player_red]
     */
    this.CssClass = headClass;
}
Unit_UserHead.prototype = new Unit_User();
Unit_UserHead.prototype.constructor = Unit_UserHead;

/**
 * 石头（障碍）
 * @class Unit_Rock
 * @extends {Unit}
 * @constructor 构造函数
 */
function Unit_Rock() {
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
Unit_Rock.prototype = new Unit();
Unit_Rock.prototype.constructor = Unit_Rock;

/**
 * 树（障碍）
 * @class Unit_Tree
 * @extends {Unit}
 * @constructor 构造函数
 */
function Unit_Tree() {
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
     * @property {Number} [CssClass=unit_tree]
     */
    this.CssClass = "unit_tree";
}
Unit_Tree.prototype = new Unit();
Unit_Tree.prototype.constructor = Unit_Tree;