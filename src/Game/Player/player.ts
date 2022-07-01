import { Momentum } from "../Util/momentum";
import { Position } from "../Util/position";
import { PlayerState } from "./player-state";

export class Player {

    private oldMomentum: Momentum = new Momentum(0,0);
    private movementInput: Momentum = new Momentum(0,0);
    constructor(){
        this.PlayerState = {
            Position: {X: 200, Y: 150},
            Momentum: new Momentum(0,0)
        }
    }

    public set MomentumChange(momentumChange: Momentum){
        if(momentumChange.X > 1 || momentumChange.X < -1 || momentumChange.Y > 1 || momentumChange.Y < -1)
            throw new Error("Invalid userInput");
        this.movementInput = momentumChange;
        this.PlayerState.Momentum = this.oldMomentum.Add(momentumChange);
    }

    public get MomentumChange() {
        return this.movementInput;
    }

    public PerformTurn() {
        const position = this.PlayerState.Position;
        const momentum = this.PlayerState.Momentum;
        this.History.push(position);
        console.log(this.PlayerState);
        const newState: PlayerState = {
            Position: {
                X: position.X + momentum.X * 10,
                Y: position.Y + momentum.Y * 10
            },
            Momentum: momentum
        }
        this.oldMomentum = new Momentum(momentum.X, momentum.Y);

        this.PlayerState = newState;
    }

    public Draw(ctx: CanvasRenderingContext2D){
        const position = this.PlayerState.Position;
        const momentum = this.PlayerState.Momentum;
        const ankerPoint = new Position(position.X + (this.oldMomentum.X * 10), position.Y + (this.oldMomentum.Y * 10))
        const history = this.History;
        ctx.save();
        drawPlayer();
        drawAnkerPoint();
        drawHistory();
        ctx.restore();

        function drawPlayer() {
            ctx.beginPath();
            ctx.fillStyle = "green";
            ctx.fillRect(position.X - 4, position.Y - 4, 8, 8);
            ctx.strokeStyle = "green";
            ctx.moveTo(position.X, position.Y);
            ctx.lineTo(position.X + (momentum.X * 10), position.Y + (momentum.Y * 10));
            ctx.closePath();
            ctx.stroke();
        }

        function drawAnkerPoint(){
            ctx.save();
            ctx.strokeStyle = "light-gray";
            ctx.moveTo(ankerPoint.X - 1, ankerPoint.Y -1);
            ctx.rect(ankerPoint.X - 1, ankerPoint.Y -1, 2,2);
            ctx.stroke();
            ctx.restore();
        }

        function drawHistory() {
            ctx.beginPath();
            ctx.moveTo(history[0]?.X, history[0]?.Y);
            history?.forEach(pos => {
                ctx.lineTo(pos.X, pos.Y);
                ctx.arc(pos.X, pos.Y, 2, 0, 2 * Math.PI);
                ctx.moveTo(pos.X, pos.Y);
            });
            ctx.lineTo(position.X, position.Y);
            ctx.stroke();
        }
    }

    PlayerState: PlayerState;
    History: Position[] = [];
}