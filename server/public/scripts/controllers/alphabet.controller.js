myApp.controller('AlphabetController', ['AppService', function(AppService) {
    const self = this;

//--------FUNCTIONS--------//

self.getAlphabetInfo= function(){
    AppService.getAlphabet();
}//request data from the database 

}]);//end controller