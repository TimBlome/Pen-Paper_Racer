export class Grid{
    public static draw(ctx: CanvasRenderingContext2D){
        ctx.save();
        ctx.strokeStyle = "#AAAAAA" 
        for(let x = 10; x < 500; x += 10){
            ctx.beginPath(); 
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 500);
            ctx.stroke();
        }
        for(let y = 10; y < 500; y += 10){
            ctx.beginPath(); 
            ctx.moveTo(0, y);
            ctx.lineTo(500, y);
            ctx.stroke();
        }
        ctx.restore()
    }
}