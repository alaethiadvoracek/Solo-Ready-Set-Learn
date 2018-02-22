myApp.controller('ShapesController', ['AppService', function(AppService) {
    const self = this;

    self.ShapesData = AppService.ShapesData
//--------FUNCTIONS--------//
    //function to call service to get data from the database
    self.getShapesInfo = function(){
        AppService.getShapes();
    }//request data from the database 
    self.getShapesInfo();
    self.index = 0;

    self.nextShape = function() {
        self.index ++;
        if(self.index > 7){
            self.index = 0;
        }//end if
    }//end go to next Shape
        
    self.previousShape = function () {
        self.index --;
        if(self.index < 0){
            self.index = 7;
        }//end if
    }//end go to previous Shape

    self.sayMsg = function(msg) {
        AppService.sayMsg(msg)
    }//end call to service for speech utterance 
}]);//end controller