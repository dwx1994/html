const { ccclass, property } = cc._decorator;

@ccclass
export default class SmallMap extends cc.Component {

    @property({
        type: cc.Node,
        tooltip: "当前所在标识（小剑）"
    })
    at: cc.Node = null;

    @property({
        tooltip: "网格尺寸"
    })
    gridSize: cc.Size = cc.Size.ZERO;

    @property({
        tooltip: "网格 X 轴间距"
    })
    spacingX = 0;

    @property({
        tooltip: "网格 Y 轴间距"
    })
    spacingY = 0;

    /**
     * 小剑原始位置
     */
    private atOriginPosition: cc.Vec2 = cc.Vec2.ZERO;

    start() {
        this.registerListenr();

        this.atOriginPosition = this.at.position;
    }

    /**
     * 注册事件
     */
    private registerListenr() {
        let canvas = cc.find('Canvas');
        canvas.on(
            'update',
            this.onUpdateMap,
            this
        );

        canvas.on(
            'show',
            this.onShowMap,
            this
        );
    }

    private onUpdateMap(message) {
        this.node.stopAllActions();

        let tween = new cc.Tween();
        tween.target(this.node)
            .call(() => {
                let current: cc.Vec2 = message.current;
                let x = this.atOriginPosition.x + current.x * (this.gridSize.width + this.spacingX);
                let y = this.atOriginPosition.y + current.y * (this.gridSize.height + this.spacingY);
                let position = cc.v2(x, y);
                this.at.position = position;
            })
            .delay(3)
            .to(
                1,
                { opacity: 0 },
                null
            )
            .start();
    }

    private onShowMap() {
        this.node.opacity = 255;
    }

    // update (dt) {}
}
