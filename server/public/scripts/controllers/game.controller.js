myApp.controller('GameController', ['AppService', function(AppService) {
    const self = this;

//--------FUNCTIONS--------//
self.gamesData = AppService.gamesData
self.getGamesInfo = function(){
    AppService.getGames();
}//request data from the database 
self.getGamesInfo();


self.index = 0;

self.nextGame = function() {
    self.index ++;
    if(self.index > 3){
        self.index = 0;
    }//end if
}//go to next letter
    
self.previousGame = function () {
    self.index --;
    if(self.index < 0){
        self.index = 3;
    }//end if
}//go to previous letter 


}]);//end controller