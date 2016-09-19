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
    this.Bar = new Goods_Wall();
    /**
     * 非障碍：路
     * @property {Goods} Bar
     */
    this.Road = new Goods_Road();
}
Map.prototype.constructor = Map;
/**
 * 房间地图
 * @class Map_Room
 * @extends {Map}
 * @constructor 构造函数
 */
function Map_Room() {
    Map.call(this);
    /**
     * 墙（地形）：墙
     * @property {Goods} Bar
     */
    this.Map_Wall = new Goods_Wall();
    /**
     * 非障碍（地形）：路
     * @property {Road} Bar
     */
    this.Map_Road = new Goods_Road();
    /**
     * 障碍（单位）：石头
     * @property {Wall} Bar
     */
    this.Map_Bar = new Unit_Rock();
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
                if (i == 0 || i == height - 1 || o == 0 || o == width - 1) terrainArr[i].push(this.Map_Wall);
                else terrainArr[i].push(this.Map_Road);
            }
        }
        switch (difficulty) {
            case Enum.Difficulty.Easy:
                break;
            case Enum.Difficulty.Normal:
                for (var i = 0; i < Tool.Random(5, 10) ; i++) {
                    unitArr[Tool.Random(1, width - 2)][Tool.Random(1, height - 2)] = this.Map_Bar;
                }
                break;
            case Enum.Difficulty.Hard:
                for (var i = 0; i < Tool.Random(11, 20) ; i++) {
                    unitArr[Tool.Random(1, width - 2)][Tool.Random(1, height - 2)] = this.Map_Bar;
                }
                break;
            default:

        }
        return { Terrain: terrainArr, Unit: unitArr };
    }
}
Map_Room.prototype = new Map();
Map_Room.prototype.constructor = Map_Room;

/// <reference path="tool.js" />
/// <reference path="goods.js" />
/// <reference path="unit.js" />


/**
 * 森林地图
 * @class Map_Forest
 * @extends {Map}
 * @constructor 构造函数
 */
function Map_Forest() {
    Map.call(this);
    /**
     * 森林（地形）：森林
     * @property {Goods} Goods_ForestWall
     */
    this.Map_ForestWall = new Goods_ForestWall();
    /**
     * 非障碍（地形）：草地
     * @property {Road} Goods_Grassland
     */
    this.Map_Grassland = new Goods_Grassland();
    /**
     * 障碍（单位）：Goods_Tree
     * @property {Wall} Bar
     */
    this.Map_Tree = new Unit_Tree();
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
                if (i == 0 || i == height - 1 || o == 0 || o == width - 1) terrainArr[i].push(this.Map_ForestWall);
                else terrainArr[i].push(this.Map_Grassland);
            }
        }
        switch (difficulty) {
            case Enum.Difficulty.Easy:
                break;
            case Enum.Difficulty.Normal:
                for (var i = 0; i < Tool.Random(5, 10) ; i++) {
                    unitArr[Tool.Random(1, width - 2)][Tool.Random(1, height - 2)] = this.Map_Tree;
                }
                break;
            case Enum.Difficulty.Hard:
                for (var i = 0; i < Tool.Random(11, 20) ; i++) {
                    unitArr[Tool.Random(1, width - 2)][Tool.Random(1, height - 2)] = this.Map_Tree;
                }
                break;
            default:

        }
        return { Terrain: terrainArr, Unit: unitArr };
    }
}
Map_Forest.prototype = new Map();
Map_Forest.prototype.constructor = Map_Forest;