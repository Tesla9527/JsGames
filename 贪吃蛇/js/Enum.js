/**
 * 物品类别
 * @enum {Object} Enum.GoodsType
 */
var GoodsType = {
    /**
    * 未指定
    */
    Blank: { Name: "blank", CssClass: "goods_blank", Value: 0 },
    /**
     * 玩家
     */
    Player: { Name: "player", CssClass: "goods_player", Value: 1 },
    /**
     * 路
     */
    Road: { Name: "road", CssClass: "goods_road", Value: 2 },
    /**
     * 障碍物
     */
    Bar: { Name: "bar", CssClass: "goods_bar", Value: 3 }
}