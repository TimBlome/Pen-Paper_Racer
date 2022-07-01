export enum GameInputs{
    "N", "NO", "O", "SO", "S", "SW","W", "NW"
}

export class GameInputEvent extends Event{
    static EventName = "Game-Input-Event";
    public Name: string;
    public Data: any;
}