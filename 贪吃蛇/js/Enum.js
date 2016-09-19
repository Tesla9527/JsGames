var Enum = {
    /**
     * 方块类别
     * @enum {Number} Enum.GoodsType
     */
    GoodsType: {
        /**
         * 未指定
         */
        None: 0,
        /**
         * 普通地形（可通过）
         */
        Road: 1,
        /**
         * 障碍物（不可通过）
         */
        Bar: 2
    },
    /**
     * 单位类别
     * @enum {Number} Enum.UnitType
     */
    UnitType: {
        /**
         * 未指定
         */
        None: 0,
        /**
         * 玩家
         */
        Player: 1,
        /**
         * 障碍物
         */
        Bar: 2,
        /**
         * 奖励
         */
        Reward: 3,
        /**
         * 陷阱
         */
        Trap: 4
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
     * @enum {Number} Enum.PlayerState
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
     * @enum {Number} Enum.Direction
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
    },
    /**
     * 难度
     * @enum {Number} Enum.Difficulty
     */
    Difficulty: {
        /**
         * 未指定
         */
        None: 0,
        /**
         * 简单
         */
        Easy: 1,
        /**
         * 普通
         */
        Normal: 2,
        /**
         * 困难
         */
        Hard: 3
    }
}