myApp.controller('NumbersController', ['AppService', function(AppService) {
    const self = this;

    self.NumbersData = AppService.NumbersData
//--------FUNCTIONS--------//
    //function to call service to get data from the database 
    self.getNumbersInfo = function(){
        AppService.getNumbers();
    }//end request
    self.getNumbersInfo();
    self.index = 0;

    self.nextNumber = function() {
        self.index ++;
        if(self.index > 9){
            self.index = 0;
        }//end if
    }//end go to next Number
        
    self.previousNumber = function () {
        self.index --;
        if(self.index < 0){
            self.index = 9;
        }//end if
    }//end go to previous Number

    self.sayMsg = function(msg) {
        AppService.sayMsg(msg)
    }//end call to service for speech utterance 
}]);//end controller