/**
 * 工具类
 * @class Tool
 */
var Tool = {
    /**
     * 生成随机数
     * @method Random
     * @param {Number} min 生成数的最小值
     * @param {Number} max 生成数的最大值
     */
    Random: function (min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }
}