/// <reference path="enum.js" />

/**
 * 物品
 * @class Goods
 * @constructor 构造函数
 */
function Goods(_name, _type) {
    if (_name === undefined) this.Name = null;
    if (_type === undefined) this.Type = GoodsType.Road;

    /**
     * 物品名称
     * @property {String} Name
     */
    this.Name = _name;
    /**
     * 物品类别
     * @property {Enum.GoodsType} Type
     */
    this.Type = _type;
}