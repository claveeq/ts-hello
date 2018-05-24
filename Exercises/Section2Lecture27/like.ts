export class Like{
    constructor(private _numOfLikes:number = 0, private _selectedSstate : boolean = false){}
    
    onClick=()=>{
        if (this._selectedSstate) {  
            this._selectedSstate = false;  
            this._numOfLikes -= 1;
            console.log("\nState: Unselected");
            console.log("Likes count:"+this._numOfLikes);
        }
        else{
            this._numOfLikes += 1;
            this._selectedSstate = true;  
            console.log("\nState: Selected")
            console.log("Likes count:"+this._numOfLikes);
        }
    }
}