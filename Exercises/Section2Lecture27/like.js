"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(_numOfLikes, _selectedSstate) {
        if (_numOfLikes === void 0) { _numOfLikes = 0; }
        if (_selectedSstate === void 0) { _selectedSstate = false; }
        var _this = this;
        this._numOfLikes = _numOfLikes;
        this._selectedSstate = _selectedSstate;
        this.Clicked = function () {
            if (_this._selectedSstate) {
                _this._selectedSstate = false;
                _this._numOfLikes -= 1;
                console.log("\nState: Unselected");
                console.log("Likes count:" + _this._numOfLikes);
            }
            else {
                _this._numOfLikes += 1;
                _this._selectedSstate = true;
                console.log("\nState: Selected");
                console.log("Likes count:" + _this._numOfLikes);
            }
        };
    }
    return Like;
}());
exports.Like = Like;
