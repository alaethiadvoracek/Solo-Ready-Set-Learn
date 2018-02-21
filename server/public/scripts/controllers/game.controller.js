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
self.selectedImage;

//function to add border, show and hide images in game 
    self.borderShowHide = function (image) {
        console.log(image);
        image.addBorder="imageBorder";
        // check for match
        if(self.selectedImage) {
            if(self.selectedImage.image_path == image.image_path) {
                swal("You found a Match!");
                self.selectedImage = null;

            }else{
                swal("Try again");
                self.selectedImage.addBorder = "border";
                image.addBorder = "border";
                self.selectedImage = null;
            }
        } else {//this is when the image is the first image clicked
            self.selectedImage = image;
            
        }
    }//end function to show and hide border 
    self.resetBorders = function () {
        for(i=0; i<self.gamesData.list.length; i++){
            console.log(self.gamesData.list[i]);
            self.gamesData.list[i].addBorder = "border";
        }//loop to reset line one borders
        for(i=0; i<self.gamesData1.list.length; i++){
            console.log(self.gamesData1.list[i]);
            self.gamesData1.list[i].addBorder = "border";
        }//loop to reset line two borders
    }//end reset borders
}]);//end game controller