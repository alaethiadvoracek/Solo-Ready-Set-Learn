myApp.controller('NumbersController', ['AppService', function(AppService) {
    const self = this;

//--------FUNCTIONS--------//
self.NumbersData = AppService.NumbersData
self.getNumbersInfo = function(){
    AppService.getNumbers();
}//request data from the database 
self.getNumbersInfo();


self.index = 26;

self.nextNumber = function() {
    self.index ++;
    if(self.index > 36){
        self.index = 26;
    }//end if
}//go to next letter
    
self.previousNumber = function () {
    self.index --;
    if(self.index < 26){
        self.index = 36;
    }//end if
}//go to previous letter

}]);//end controller