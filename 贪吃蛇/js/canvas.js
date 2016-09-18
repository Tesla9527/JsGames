
/**
 * 画布
 * @class Canvas
 * @constructor 构造函数
 * @param {String} element_id 画布所属元素Id.
 */
function Canvas(element_id) {
    /**
     * 宽度（横向格数）
     * @property {Number} Width
     * @private
     */
    this.Width = 0;
    /**
     * 高度（纵向格数）
     * @property {Number} Height
     * @private
     */
    this.Height = 0;
    /**
     * 物品宽度
     * @property {Number} GoodsWidth
     */
    this.GoodsWidth = 0;
    /**
     * 物品宽度
     * @property {Number} GoodsHeight
     */
    this.GoodsHeight = 0;
}