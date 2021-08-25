
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

    generateStar = false;
    starTimer : number = 5;
    starTimerReset : number = 5;

    randX : number;
    randY : number;
    randZ : number;

    @property
    minStarDuration: number = 0;
    @property
    maxStarDuration: number = 0;
    groundY : any;


    starTimerFunc(deltaTime : number){
        if(this.generateStar){
            this.starTimer -= deltaTime;
            this.spawnStar();
            if(this.starTimer <= 0){
                this.generateStar = false;

            }
        }
    }

    test(deltaTime : number){
        if(this.starTimer != 0){
            this.starTimer -= deltaTime;
            if(this.starTimer == 0){
                console.log("timer is 0");
                this.spawnStar();
                this.starTimer = this.starTimerReset;
            }
        }
    }

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
        this.starTimer -= deltaTime
        this.randX = randomRange(-450,450)
        this.randY = randomRange(287,-285);

        if(this.starTimer <= 0){
            this.spawnStar();
            this.starTimer = this.starTimerReset;
        }
    }
}
