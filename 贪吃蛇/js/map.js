/// <reference path="tool.js" />
/// <reference path="goods.js" />
/// <reference path="unit.js" />


/**
 * 地图类
 * @class Map
 * @constructor 构造函数
 */
function Map() {
    /**
     * 地图名称
     */
    this.Name = "地图";
    /**
     * 障碍：墙
     * @property {Goods} Bar
     */
    this.Bar = new Wall();
    /**
     * 非障碍：路
     * @property {Goods} Bar
     */
    this.Road = new Road();
}
Map.prototype.constructor = Map;
/**
 * 房间地图
 * @class Room
 * @extends {Map}
 * @constructor 构造函数
 */
function Room() {
    Map.call(this);
    /**
     * 墙（地形）：墙
     * @property {Goods} Bar
     */
    this.Wall = new Wall();
    /**
     * 非障碍（地形）：路
     * @property {Road} Bar
     */
    this.Road = new Road();
    /**
     * 障碍（单位）：石头
     * @property {Wall} Bar
     */
    this.Bar = new Rock();
    /**
     * 创建地图
     * @method CreateMap
     * @return {Goods}
     */
    this.CreateMap = function (width, height, difficulty) {
        var terrainArr = [];
        var unitArr = [];
        for (var i = 0; i < height; i++) {
            terrainArr.push([]);
            unitArr.push([]);
            for (var o = 0; o < width; o++) {
                unitArr[i].push(new Unit());
                if (i == 0 || i == height - 1 || o == 0 || o == width - 1) terrainArr[i].push(this.Wall);
                else terrainArr[i].push(this.Road);
            }
        }
        switch (difficulty) {
            case Enum.Difficulty.Easy:
                break;
            case Enum.Difficulty.Normal:
                for (var i = 0; i < Tool.Random(5, 10) ; i++) {
                    unitArr[Tool.Random(1, width - 2)][Tool.Random(1, height - 2)] = this.Bar;
                }
                break;
            case Enum.Difficulty.Hard:
                for (var i = 0; i < Tool.Random(11, 20) ; i++) {
                    unitArr[Tool.Random(1, width - 2)][Tool.Random(1, height - 2)] = this.Bar;
                }
                break;
            default:

        }
        return { Terrain: terrainArr, Unit: unitArr };
    }
}
Room.prototype = new Map();
Room.prototype.constructor = Room;