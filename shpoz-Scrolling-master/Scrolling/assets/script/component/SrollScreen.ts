
const { ccclass, property } = cc._decorator;

const Paths = require("Paths");
const PI = 3.14159;

@ccclass
export default class ScrollScreen extends cc.Component {

    @property({
        tooltip: "滚动临界值，百分比，大于临界值滚动到下一屏",
    })
    scrollingThreshold: number = 0.2;

    @property({
        tooltip: "滚动持续时间",
    })
    scrollingDuration: number = 0.2;

    @property({
        tooltip: "取消滚动持续时间",
    })
    cancelDuration: number = 0.1;

    @property({
        type: cc.Node,
        tooltip: "渲染地图的摄像机",
    })
    camera: cc.Node = null;

    /**
     * 滚动方向
     */
    private scrollingDirection: cc.Vec2 = null;

    /**
     * 滚动中标识
     */
    private scrolling: boolean = false;

    /**
     * 摄像机当前位置
     */
    private currentPosition: cc.Vec2 = cc.Vec2.ZERO;

    start() {
        this.registerListenr();
    }

    /**
     * 注册事件
     */
    private registerListenr() {
        let canvas = cc.find('Canvas');
        canvas.on(
            cc.Node.EventType.TOUCH_MOVE,
            this.onTouchMove,
            this
        );

        canvas.on(
            cc.Node.EventType.TOUCH_END,
            this.onTouchEnd,
            this
        );
    }

    private onTouchMove(event: cc.Event.EventTouch) {
        if (this.scrolling) {
            return;
        }

        // 确定滚动方向
        if (!this.scrollingDirection) {
            cc.find('Canvas').emit('show');

            let side = event.getLocation().sub(event.getStartLocation());
            let angle = cc.v2(100, 0).signAngle(side);

            if ((angle >= PI * 0.75 || angle <= -PI * 0.75) || (angle <= PI * 0.25 && angle >= -PI * 0.25)) {
                this.scrollingDirection = cc.v2(1, 0);
            }
            else {
                this.scrollingDirection = cc.v2(0, 1);
            }
        }

        let delta = event.getDelta();
        let move = delta.neg();

        let winSize = cc.winSize;
        let next = this.camera.position.add(move);

        // Portrait
        if (this.scrollingDirection.x === 0) {
            if (next.y < 1 * winSize.height && next.y > -1 * winSize.height) {
                let y = next.y / winSize.height;
                y = y > 0 ? Math.ceil(y) : Math.floor(y);

                let mapNext = cc.v2(this.currentPosition.x, y);
                if (this.checkNext(mapNext)) {
                    this.camera.y += move.y;
                }
            }
        }
        // Landscape
        else if (this.scrollingDirection.y === 0) {
            if (next.x < 1 * winSize.width && next.x > -2 * winSize.width) {
                let x = next.y / winSize.height;
                x = x > 0 ? Math.ceil(x) : Math.floor(x);

                let mapNext = cc.v2(x, this.currentPosition.y);
                if (this.checkNext(mapNext)) {
                    this.camera.x += move.x;
                }
            }
        }
    }

    private onTouchEnd(event: cc.Event.EventTouch) {
        if (this.scrolling) {
            return;
        }

        this.scrolling = true;

        let winSize = cc.winSize;

        let delta = event.getLocation().sub(event.getStartLocation());
        let degree = 0;
        let next = this.currentPosition.clone();
        if (this.scrollingDirection.x > 0) {
            next.x = delta.x > 0 ? next.x - 1 : next.x + 1;
            degree = delta.x / winSize.width;
        }
        else {
            next.y = delta.y > 0 ? next.y - 1 : next.y + 1;
            degree = delta.y / winSize.height;
        }

        if (this.checkNext(next)) {
            let duration = 0;
            if (Math.abs(degree) > this.scrollingThreshold) {
                this.currentPosition = next;
                duration = this.scrollingDuration;
            }
            else {
                duration = this.cancelDuration;
            }

            this.camera.stopAllActions();

            let tween = new cc.Tween();
            tween.target(this.camera)
                .to(
                    duration,
                    { position: cc.v2(winSize.width * this.currentPosition.x, winSize.height * this.currentPosition.y) },
                    null
                )
                .call(this.scrollingComplete.bind(this))
                .start();
        }
        else {
            this.scrollingComplete();
        }
    }

    private scrollingComplete() {
        cc.find('Canvas').emit('update', { current: this.currentPosition });

        this.scrolling = false;
        this.scrollingDirection = null;
    }

    /**
     * 检查下个路径点是否合法
     * @param next 
     */
    private checkNext(next: cc.Vec2): boolean {
        let verify = false;

        for (let v2 of Paths) {
            if (v2.equals(next)) {
                verify = true;
                break;
            }
        }

        return verify;
    }

    // update (dt) {}
}
