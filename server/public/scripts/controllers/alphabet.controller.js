myApp.controller('AlphabetController', ['AppService', function(AppService) {
    const self = this;

    self.alphabetData = AppService.alphabetData
//--------FUNCTIONS--------//
    //Request to service to get data from the database
    self.getAlphabetInfo = function(){
        AppService.getAlphabet();
    }//end 

    self.getAlphabetInfo();
    self.index = 0;

    self.nextLetter = function() {
        self.index ++;
        if(self.index > 25){
            self.index = 0;
        }//end if
    }//end go to next letter

    self.previousLetter = function () {
        self.index --;
        if(self.index < 0){
            self.index = 25;
        }//end if
    }// end go to previous letter 

    self.sayMsg = function(msg) {
        AppService.sayMsg(msg)
    }//end call to service for speech utterance 
}]);//end controller

