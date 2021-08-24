
import { _decorator, Component, Node, v2, systemEvent, SystemEventType, SystemEvent, EventKeyboard, macro, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {


    @property
    jumpHeight : number = 0;
    @property
    jumpDuration : number = 0;
    @property
    maximumMovementSpeed : number = 0;
    @property
    accelerationSpeed : number = 0;
    @property
    speed : number = 0;

    private newPos = new Vec3();
    private movingRight = false;
    private movingLeft = false;
    // private speed = 50;




    start () {
        systemEvent.on(SystemEvent.EventType.KEY_UP,this.onKeyReleased,this);
        systemEvent.on(SystemEvent.EventType.KEY_DOWN,this.onKeyPressed,this);
    }

    onKeyPressed(event : EventKeyboard){
        
        switch(event.keyCode){
            case macro.KEY.a:
                this.movingLeft = true;
                console.log("a key pressed");
                break;
            case macro.KEY.d:
                this.movingRight = true;
                console.log("d key pressed");
                break;
        }
    }

    onKeyReleased(event:EventKeyboard){
        switch(event.keyCode){
            case macro.KEY.a:
                this.movingLeft = false;
                break;
            case macro.KEY.d:
                this.movingRight = false;
                break;
        }
    }

    // setJumpAction(){
    //     var jumpUp = moveBy(this.jumpDuration,v2(0,this.jumpHeight))
    //     this.node.
    // }

    update (deltaTime: number) {
        if(this.movingLeft){
            // this.node.setPosition(50,0);
            this.newPos.x -= this.speed;
            this.node.setPosition(this.newPos)
        }
        if(this.movingRight){
            // this.node.setPosition(50,0);
            this.newPos.x += this.speed;
            this.node.setPosition(this.newPos)
        }

        // if(Math.abs(this.speed) > this.maximumMovementSpeed){
        //     this.speed = this.maximumMovementSpeed * this.speed/Math.abs(this.speed);
        // }
        // this.node.position.x += this.speed * deltaTime;
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
