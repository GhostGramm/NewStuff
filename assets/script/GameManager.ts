
import { _decorator, Component, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    @property(Node)
    player : Node = null;
    @property(Prefab)
    star : Prefab = null;
    @property(Node)
    ground : Node = null;

    @property
    minStarDuration : number;
    @property
    maxStarDuration : number;
    

    start () {
        
    }

    update (deltaTime: number) {
        
    }
}
