/// <reference path="enum.js" />

/**
 * 玩家
 * @class Player
 * @constructor 构造函数
 */
function Player(_name, group) {
    if (_name === undefined) _name = "玩家";
    if (_color === undefined) _color = UserGroup.Blank;

    /**
     * 状态
     * @property {Enum.PlayerState} [State=Enum.PlayerState.Wait]
     */
    this.State = PlayerState.Wait;
    /**
     * 方向
     * @property {Enum.Direction} [Direction=Enum.Direction.None]
     */
    this.Direction = Direction.None;
    /**
     * 玩家名称
     * @property {String} Name
     */
    this.Name = _name;
    /**
     * 颜色
     * @property {Enum.UserGroup} [Color=Enum.UserGroup.Blank]
     */
    this.Color = _color;
    /**
     * 分数
     * @property {Number} Score
     */
    this.Score = 0;
    /**
     * 等级（就是蛇身的长度）
     * @property {Number} Level
     */
    this.Level = 5;
}