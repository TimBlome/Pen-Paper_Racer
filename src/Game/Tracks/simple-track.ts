import { ITrack } from "./itrack";

export class SimpleTrack implements ITrack{
    draw(context: CanvasRenderingContext2D) {
        console.log("Drawing Track");
        context.arc(100, 150, 50, Math.PI,  1.5 * Math.PI);
        context.arc(400, 150, 50, 1.5 * Math.PI,  2 * Math.PI);
        context.arc(400, 350, 50, 0, .5 * Math.PI);
        context.arc(100, 350, 50, .5 * Math.PI,  Math.PI);
        // context.lineTo(50,100);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(300, 200);
        context.arc(300, 250, 50, 1.5 * Math.PI, .5 * Math.PI, false);
        context.arc(200, 250, 50, .5 * Math.PI, 1.5 * Math.PI, false);
        context.closePath();
        context.stroke();
    }

}