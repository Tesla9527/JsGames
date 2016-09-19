/// <reference path="enum.js" />
/// <reference path="goods.js" />
/// <reference path="player.js" />

/**
 * 画布:
 * @class Canvas
 * @constructor 构造函数
 * @param {String} element_id 画布所属元素Id.
 */
function Canvas(element_id, _width, _height) {
    if (_width === undefined) this.Width = 10;
    if (_height === undefined) this.Height = 10;

    /**
     * 画布本身的DIV
     * @type {Element}
     * @private
     */
    var element = document.getElementById(element_id);
    /**
     * 单元格内容
     * @type {Goods[]}
     * @private
     */
    this.Cells = [];
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
    /**
     * 速度
     * @property {Number} [Speed=1000]
     */
    this.Speed = 1000;
    /**
     * 用户
     * @property {Player[]} Players
     */
    this.Players = [];

    /**
     * 初始化
     * @method Init
     */
    this.Init = function () {
        element.innerHTML = "";
        var arr = [];
        for (var i = 0; i < this.Height; i++) {
            arr.push([]);
            for (var o = 0; o < this.Width; o++) {
                if (i == 0 || i == this.Height - 1 || o == 0 || o == this.Width - 1) arr[i].push(new Goods("墙", Enum.GoodsType.Bar));
                else arr[i].push(new Goods("空地", Enum.GoodsType.Road));
            }
        }
        this.Cells = arr;
        var resultHTML = "";
        for (var i = 0; i < this.Cells.length; i++) {
            for (var o = 0; o < this.Cells[0].length; o++) {
                resultHTML += '<div class="block ' + this.Cells[i][o].Type.CssClass + '"></div>';
            }
            resultHTML += "<br />";
        }
        element.innerHTML = resultHTML;
    }

    /**
     * 开始游戏
     * @method Play
     */
    this.Play = function () {
        this.Players.push(new Player("刘林", UserGroup.Blue));

        var time = setInterval(function () {

        }, this.Speed);
    }
}