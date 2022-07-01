export class Momentum{

    /**
     *
     */
    constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }

    X: number;
    Y: number;

    public Add(momentum: Momentum) : Momentum {
        return new Momentum(this.X + momentum.X, this.Y + momentum.Y);
    }
}