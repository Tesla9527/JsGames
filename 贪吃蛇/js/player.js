/// <reference path="enum.js" />

/**
 * 玩家
 * @class Player
 * @constructor 构造函数
 */
function Player(_name, _group) {
    if (_name === undefined) _name = "玩家";
    if (_group === undefined) _group = UserGroup.Blank;

    /**
     * 状态
     * @property {Enum.PlayerState} [State=Enum.PlayerState.Wait]
     */
    this.State = Enum.PlayerState.Wait;
    /**
     * 方向
     * @property {Enum.Direction} [Direction=Enum.Direction.None]
     */
    this.Direction = Enum.Direction.None;
    /**
     * 玩家名称
     * @property {String} Name
     */
    this.Name = _name;
    /**
     * 样式/队伍
     * @property {Enum.UserGroup} [Color=Enum.UserGroup.Blank]
     */
    this.Group = _group;
    /**
     * 分数
     * @property {Number} Score
     */
    this.Score = 0;
    /**
     * 等级（就是蛇身的长度）
     * @property {Number} [Level=3]
     */
    this.Level = 3;
    /**
     * 血量（初始血量为1）
     * @property {Number} [Level=1]
     */
    this.HP = 1;
    /**
     * 身体[[x,y],...]
     * @property {Number} [Level=1]
     */
    this.Body = [];
    /**
     * 速度
     * @property {Number} [Speed=100]
     */
    this.Speed = 100;
    /**
     * 移动玩家（修改坐标
     */
    this.Move = function () {
        for (var i = this.Body.length - 1; i >= 1; i--) {
            this.Body[i] = [this.Body[i - 1][0], this.Body[i - 1][1]];
        }
        switch (this.Direction) {
            case Enum.Direction.Up:
                this.Body[0][1]--;
                break;
            case Enum.Direction.Down:
                this.Body[0][1]++;
                break;
            case Enum.Direction.Left:
                this.Body[0][0]--;
                break;
            case Enum.Direction.Right:
                this.Body[0][0]++;
                break;
            default:
        }
        console.log(this.Body);
        return 
    }
}
Player.prototype.constructor = Player;