
import { _decorator, Component, Vec3, Collider2D, Contact2DType, IPhysics2DContact, PolygonCollider2D, BoxColliderComponent, BoxCollider2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Star')
export class Star extends Component {
    @property
    pickRadius: number = 0;
    destroyTimer: number = 2;
    destroyTimerReset: number = 2;
    pos = new Vec3(0, 0, 0);


    destroyStar() {
        this.node.destroy();
    }

    start() {

    }



    update(deltaTime: number) {
        this.destroyTimer -= deltaTime;
        if (this.destroyTimer <= 0) {
            this.destroyStar();
        }
    }

}
