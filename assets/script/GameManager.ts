
import { _decorator, Component, Node, Prefab, instantiate, Vec3, randomRange } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    @property(Node)
    player: Node = null;
    @property(Prefab)
    star: Prefab = null;
    @property(Node)
    ground: Node = null;

    randX : number;
    randY : number;
    randZ : number;

    @property
    minStarDuration: number = 0;
    @property
    maxStarDuration: number = 0;
    groundY : any;

    spawnStar() {
        var starIns = instantiate(this.star);
        this.node.addChild(starIns);
        starIns.setPosition(this.spawnPosition())
    }

    spawnPosition(){
        return new Vec3(this.randX,this.randY,0);
    }

    start() {
        // this.groundY = this.ground.position.x * this.ground.position.y/2;
        // console.log(this.ground.position.y);
    }

    update(deltaTime: number) {
        this.randX = randomRange(-450,450)
        this.randY = randomRange(287,-285);
        this.spawnStar();
    }
}
