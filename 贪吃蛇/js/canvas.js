
/**
 * 画布
 * @class Canvas
 * @constructor 构造函数
 * @param {String} element_id 画布所属元素Id.
 */
function Canvas(element_id, _width, _height) {
    if (_width === undefined) this.Width = 10;
    if (_height === undefined) this.Height = 10;

    this.Cells = [];
    /**
     * 宽度（横向格数）
     * @property {Number} Width
     * @private
     */
    this.Width = _width;
    /**
     * 高度（纵向格数）
     * @property {Number} Height
     * @private
     */
    this.Height = _height;
    /**
     * 速度
     * @property {Number} [Speed=1.0]
     */
    this.Speed = 1.0;

    /**
     * 初始化
     * @method Init
     */
    this.Init = function () {
        this.Cells = [];
        for (var i = 0; i < this.Height; i++) {
            this.Cells.push([]);
            for (var o = 0; o < this.Width; o++) {
                this.Cells[i].push();
            }
        }
    }
}