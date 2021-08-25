
import { _decorator, Component, Node, v2, systemEvent, SystemEventType, SystemEvent, EventKeyboard, macro, Vec2, Vec3, Contact2DType, Collider2D, IPhysics2DContact, BoxCollider2D } from 'cc';
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
    @property
    gravity : number = 0;
    scoreCount : number = 0;

    private newPos = new Vec3();
    private movingRight = false;
    private movingLeft = false;
    private movingUp = false;
    private movingDown = false;
    // private speed = 50;




    start () {
        systemEvent.on(SystemEvent.EventType.KEY_UP,this.onKeyReleased,this);
        systemEvent.on(SystemEvent.EventType.KEY_DOWN,this.onKeyPressed,this);

        let collider = this.getComponent(BoxCollider2D);
        console.log(collider);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        this.addScore();
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
            case macro.KEY.w:
                this.movingUp = true;
                break;
            case macro.KEY.s:
                this.movingDown = true;
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
            case macro.KEY.w:
                this.movingUp = false;
                break;
            case macro.KEY.s:
                this.movingDown = false;
                break;
        }
    }

    addScore(){
        this.scoreCount = this.scoreCount + 1;
        console.log("your score is "+ this.scoreCount)
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
        if(this.movingUp){
            this.newPos.y += this.speed;
            this.node.setPosition(this.newPos);
        }
        if(this.movingDown){
            this.newPos.y -= this.speed;
            this.node.setPosition(this.newPos);
        }

        // if(Math.abs(this.speed) > this.maximumMovementSpeed){
        //     this.speed = this.maximumMovementSpeed * this.speed/Math.abs(this.speed);
        // }
        // this.node.position.x += this.speed * deltaTime;
    }
}


