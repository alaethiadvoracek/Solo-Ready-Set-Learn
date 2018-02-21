myApp.controller('GameController', ['AppService', function(AppService) {
    const self = this;

//--------FUNCTIONS--------//
self.gamesData = AppService.gamesData
self.gamesData1 = AppService.gamesData1

//call to service to get game info from the database
self.getGamesInfo = function(){
    AppService.getGames();
}//request data from the database 
self.getMoreInfo = function() {
    AppService.getMoreGames();
}//request for more info for games from database
self.getGamesInfo();
self.getMoreInfo();
self.index = 0;

//function to add border, show and hide images in game 
    self.borderShowHide = function (image) {
        image.addBorder="imageBorder"
    }//end function to show and hide border 

    self.borderToSecondLine = function (image) {
        image.addBorder1="imageBorder1"
    }//end function to show and hide border
}]);//end game controller