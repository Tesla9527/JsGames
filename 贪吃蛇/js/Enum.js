var Enum = {
    /**
     * 物品类别
     * @enum {Object} Enum.GoodsType
     */
    GoodsType: {
        /**
        * 未指定
        */
        None: { Name: "blank", CssClass: "goods_blank", Value: 0 },
        /**
         * 路
         */
        Road: { Name: "road", CssClass: "goods_road", Value: 1 },
        /**
         * 障碍物
         */
        Bar: { Name: "bar", CssClass: "goods_bar", Value: 2 }
    },
    /**
     * 玩家类型
     * @enum {Object} Enum.UserGroup
     */
    UserGroup: {
        /**
        * 未指定
        */
        None: { Name: "blank", CssClass: "player_blank", Value: 0 },
        /**
        * 红
        */
        Red: { Name: "red", CssClass: "player_red", Value: 1 },
        /**
         * 蓝
         */
        Blue: { Name: "blue", CssClass: "player_blue", Value: 2 },
        /**
         * 黑
         */
        Black: { Name: "black", CssClass: "player_black", Value: 3 },
        /**
         * 黄
         */
        Yellow: { Name: "yellow", CssClass: "player_yellow", Value: 4 }
    },
    /**
     * 玩家状态
     * @enum {Object} Enum.PlayerState
     */
    PlayerState: {
        /**
         * 未指定
         */
        None: 0,
        /**
         * 等待
         */
        Wait: 1,
        /**
         * 移动
         */
        Move: 2,
        /**
         * 死亡
         */
        Die: 3
    },
    /**
     * 玩家方向
     * @enum {Object} Enum.Direction
     */
    Direction: {
        /**
         * 未指定
         */
        None: 0,
        /**
         * 上
         */
        Up: 1,
        /**
         * 下
         */
        Down: 2,
        /**
         * 左
         */
        Left: 3,
        /**
         * 右
         */
        Right: 4
    }
}