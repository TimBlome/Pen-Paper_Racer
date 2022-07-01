import { GameController } from "./src";
import { Player } from "./src/Game/Player/player";
import { SimpleTrack } from "./src/Game/Tracks/simple-track";
import { GameInputEvent } from "./src/Game/Util/game-input";
import { Grid } from "./src/Game/Util/grid";
import { Momentum } from "./src/Game/Util/momentum";

const controller = new GameController();
controller.StartNewGame();
var canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;

document.getElementById('canvas_area').appendChild(canvas);
const ctx= canvas.getContext("2d");
ctx.strokeRect(0,0,500,500);

const track = new SimpleTrack;
const player = new Player();
drawState();

document.addEventListener("Game-Event", (event) => {

    const inputEvent = event as GameInputEvent;
    if(inputEvent.Name === "movement")
        setMomentumChange(inputEvent.Data.X, inputEvent.Data.Y);

    if(inputEvent.Name === "end-turn"){
        player.PerformTurn();
    }

    drawState();

});

function drawState(){
    ctx.clearRect(0,0,500,500);
    Grid.draw(ctx);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    track.draw(ctx);
    ctx.stroke();

    player.Draw(ctx);
}

function setMomentumChange(x:number, y:number) {
    console.log("Changing momentum", x,y)
    player.MomentumChange = new Momentum(x,y);
}

