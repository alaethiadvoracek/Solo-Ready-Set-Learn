myApp.controller('GameController', ['AppService', function(AppService) {
    const self = this;

    self.gamesData = AppService.gamesData
    self.gamesData1 = AppService.gamesData1
//--------FUNCTIONS--------//

//call to service to get game info from the database
    self.getGamesInfo = function(){
        AppService.getGames();
}//end request 

//call to service to get more game info from the database
    self.getMoreInfo = function() {
        AppService.getMoreGames();
}// emd request 

    self.getGamesInfo();
    self.getMoreInfo();
    self.index = 0;
    self.selectedImage;

    //function to add border in game 
    self.borderShowHide = function (image) { 
        image.addBorder="imageBorder";

        // Function to check for match of images being clicked on 
        if(self.selectedImage) {//when like images are clicked
            if(self.selectedImage.image_path == image.image_path) {
                swal("You found a Match!");
                self.selectedImage = null;

            }//end if like images
            else{//when not like images are clicked 
                swal("Try again");
                self.selectedImage.addBorder = "border";
                image.addBorder = "border";
                self.selectedImage = null;
            }//end else not like 
        }//end if for selected image 
        else {//this is when the image is the first image clicked
            self.selectedImage = image; 
        }//end else 
    }//end function to show and hide border 

    // Function to reset Borders using the Play Again button 
    self.resetBorders = function () {
        for(i=0; i<self.gamesData.list.length; i++){
            console.log(self.gamesData.list[i]);
            self.gamesData.list[i].addBorder = "border";
        }// end loop to reset line one borders
        for(i=0; i<self.gamesData1.list.length; i++){
            console.log(self.gamesData1.list[i]);
            self.gamesData1.list[i].addBorder = "border";
        }//end loop to reset line two borders
    }//end reset borders
}]);//end game controller