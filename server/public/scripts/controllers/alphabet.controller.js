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
    if(self.index > 26){
        self.index == 0;
    }//end if
}//go to next letter
    
self.previousLetter = function () {
    self.index --;
    if(self.index < 0){
        self.index == 26;
    }//end if
}//go to previous letter 
self.sayMsg = function(message){
    let msg = new SpeechSynthesisUtterance(message);
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[17]; // Note: voices are unpredictable at the moment, still experimental tech. 7 is the clearest male, 17 the clearest female, 25 is good
    msg.voiceURI = 'native';
    msg.volume = 2; // 0 to 1
    msg.rate = .8; // 0.1 to 10
    msg.pitch = 1; //0 to 2      
    msg.lang = 'en-US';
         window.speechSynthesis.speak(msg);
 }//end message function
}]);//end controller

