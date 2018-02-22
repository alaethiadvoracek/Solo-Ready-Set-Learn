myApp.controller('ColorsController', ['AppService', function(AppService) {
    const self = this;

    self.colorsData = AppService.colorsData
//--------FUNCTIONS--------//
    //function to call service to get data from the database
    self.getColorsInfo = function(){
        AppService.getColors();
    }//end request
    self.getColorsInfo();
    self.index = 0;

    self.nextColor = function() {
        self.index ++;
        if(self.index > 8){
            self.index = 0;
        }//end if
    }//end go to next letter
        
    self.previousColor = function () {
        self.index --;
        if(self.index < 0){
            self.index = 8;
        }//end if
    }//end go to previous letter 

    self.sayMsg = function(msg) {
        AppService.sayMsg(msg)
    }//end call to service for speech utterance
}]);//end controller