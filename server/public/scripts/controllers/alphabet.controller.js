myApp.controller('AlphabetController', ['AppService', function(AppService) {
    const self = this;

//--------FUNCTIONS--------//

self.getAlphabetInfo = function(){
    AppService.getAlphabet();
}//request data from the database 
self.getAlphabetInfo();

self.postAlphabetData = function() {
    AppService.postData();
}
}]);//end controller