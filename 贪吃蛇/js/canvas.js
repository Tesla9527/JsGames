/// <reference path="enum.js" />
/// <reference path="map.js" />
/// <reference path="goods.js" />
/// <reference path="player.js" />

/**
 * 画布
 * @class Canvas
 * @constructor 构造函数
 * @param {String} selectors 画布DIV的元素表达式.
 * @param {Number} _width 画布宽度
 * @param {Number} _height 画布高度
 */
function Canvas(selectors, _width, _height) {
    if (_width === undefined) this.Width = 10;
    if (_height === undefined) this.Height = 10;

    /**
     * 画布DIV
     * @type {Element} _element
     * @private
     */
    var _element = document.querySelector(selectors);
    /**
     * 地形DIV
     * @type {Element} _terrains_Element
     * @private
     */
    var _terrains_Element = _element.querySelector(".game_terrain");
    /**
     * 单位DIV
     * @type {Element} _units_Element
     * @private
     */
    var _units_Element = _element.querySelector(".game_unit");
    /**
     * 宽度（横向格数）
     * @property {Number} Width
     */
    this.Width = _width + 2;
    /**
     * 高度（纵向格数）
     * @property {Number} Height
     */
    this.Height = _height + 2;
    //设置画布的宽高
    _element.style.width = this.Width * 25 + "px";
    _element.style.height = this.Height * 25 + "px";

    /**
     * 设置地形（初始化）
     * @method SetTerrains
     * @param {Goods} goods 地形数组
     */
    this.SetAllTerrainsHTML = function (goods) {
        var _result = "";
        for (var i = 0; i < this.Width; i++) {
            for (var o = 0; o < this.Height; o++) {
                _result += '<div class="' + goods[i][o].CssClass + '"></div>';
            }
            _result += "<br />";
        }
        _terrains_Element.innerHTML = _result;
        var elements = _terrains_Element.querySelectorAll("div");
        for (var i = 0; i < this.Width; i++) {
            for (var o = 0; o < this.Height; o++) {
                goods[i][o].Element = elements[i + o * this.Width];
            }
        }
    }
    /**
     * 清空地形（初始化时才会用到）
     * @method ClearTerrains
     */
    this.ClearTerrainsHTML = function () {
        _terrains_Element.innerHTML = "";
    }
    /**
     * 设置所有单位（初始化）
     * @method SetUnits
     * @param {Unit} units 单位数组
     */
    this.SetAllUnitsHTML = function (units) {
        var _result = "";
        for (var i = 0; i < this.Width; i++) {
            for (var o = 0; o < this.Height; o++) {
                _result += '<div class="' + units[i][o].CssClass + '"></div>';
            }
            _result += "<br />";
        }
        _units_Element.innerHTML = _result;
        var elements = _units_Element.querySelectorAll("div");
        for (var i = 0; i < this.Width; i++) {
            for (var o = 0; o < this.Height; o++) {
                units[i][o].Element = elements[i + o * this.Width];
            }
        }
    }
    /**
     * 清空单位
     * @method ClearUnits
     */
    this.ClearUnitsHTML = function () {
        _units_Element.innerHTML = "";
    }
}
Canvas.prototype.constructor = Canvas;

/**
 * 游戏类
 * @class Game
 * @constructor 构造函数
 * @param {Canvas} _canvas 画布
 */
function Game(_canvas) {
    /**
     * 画布
     * @cfg {Canvas} Canvas
     */
    this.Canvas = _canvas;
    /**
     * 地形
     * @type {Goods[]}
     */
    this.Terrain = [];
    /**
     * 单位
     * @type {Player[]}
     */
    this.Unit = [];
    /**
     * 速度
     * @property {Number} [Speed=25]
     */
    this.Speed = 25;
    /**
     * 用户
     * @property {Player[]}
     */
    this.Players = [];
    /**
     * 地图
     * @property {Map} Map
     */
    this.Map = new Room();
    /**
     * 难度（默认为简单）
     * @property {Enum.Difficulty} Difficulty
     */
    this.Difficulty = Enum.Difficulty.Easy;
    /**
     * 设置单个单位
     * @method SetUnits
     * @param {Unit} units 单位数组
     */
    this.SetUnit = function (unit, x, y) {
        unit.Element = this.Unit[x][y].Element;
        this.Unit[x][y] = unit;
        this.Unit[x][y].Element.className = unit.CssClass;
    }
    /**
     * 地图初始化
     * @method Init
     */
    this.Init = function () {
        //同时初始化地形和单位（清空）
        this.Canvas.ClearTerrainsHTML();
        this.Canvas.ClearUnitsHTML();
        //使用地图类初始化地图
        var init = this.Map.CreateMap(this.Canvas.Width, this.Canvas.Height, this.Difficulty);
        this.Terrain = init.Terrain;
        this.Unit = init.Unit;
        //获取初始化数据后添加至画布
        this.Canvas.SetAllTerrainsHTML(this.Terrain);
        this.Canvas.SetAllUnitsHTML(this.Unit);
    }
    /**
     * 开始游戏
     * @method Play
     */
    this.Play = function () {
        //添加玩家
        this.Players.push(new Player("刘林", Enum.UserGroup.Blue));
        for (var i = 0; i < this.Players.length; i++) {
            this.Players[i].Direction = Enum.Direction.Right;
            this.Players[i].Body = [
                [5, i * 3 + 3], [4, i * 3 + 3], [3, i * 3 + 3], [2, i * 3 + 3]
            ];
            for (var o = 0; o < this.Players[i].Body.length; o++) {
                if (o == 0) this.SetUnit(new UserHead("player_head"), this.Players[i].Body[o][0], this.Players[i].Body[o][1]);
                else this.SetUnit(new User(), this.Players[i].Body[o][0], this.Players[i].Body[o][1]);
            }
            this.Players[i].State = Enum.PlayerState.Move;
        }
        //var time = setInterval(function () {
        this.Players[0].Move();
        this.Players[0].Body[0]
        //}, this.Speed * this.Players[0].Speed);
    }
}