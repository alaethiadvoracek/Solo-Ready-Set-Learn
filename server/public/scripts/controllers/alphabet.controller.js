myApp.controller('AlphabetController', ['AppService', function(AppService) {
    const self = this;

//--------FUNCTIONS--------//
self.alphabetData = AppService.alphabetData
self.getAlphabetInfo = function(){
    AppService.getAlphabet();
}//request data from the database 
self.getAlphabetInfo();


self.index = 0;

self.nextLetter = function() {
    self.index ++;
    if(self.index > 25){
        self.index = 0;
    }//end if
}//go to next letter
    
self.previousLetter = function () {
    self.index --;
    if(self.index < 0){
        self.index = 25;
    }//end if
}//go to previous letter 
}]);//end controller

