myApp.service('AppService',['$http', function($http) {
    console.log('inside service'); 
    const self = this;

    /* GET REQUEST */
    self.alphabetData = {};
    self.getAlphabet = function() {
        $http.get('/alphabet')
        .then((result)=>{
            console.log('get result: ', result.data);
            self.alphabetData.list = result.data;
        })
    }//end get alphabet data

    self.NumbersData = {};
    self.getNumbers = function() {
        $http.get('/numbers')
        .then((result)=>{
            console.log('get result: ', result.data);
            self.NumbersData.list = result.data;
        })
    }//end get alphabet data
    self.sayMsg = function(message){
        let msg = new SpeechSynthesisUtterance(message);
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[7]; // Note: voices are unpredictable at the moment, still experimental tech. 7 is the clearest male, 17 the clearest female, 25 is good
        msg.voiceURI = 'native';
        msg.volume = 2; // 0 to 1
        msg.rate = .8; // 0.1 to 10
        msg.pitch = 1; //0 to 2      
        msg.lang = 'en-US';
        window.speechSynthesis.speak(msg);
        }//end message function

}]);//end service