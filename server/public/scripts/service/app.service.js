myApp.service('AppService', ['$http', function ($http) {
    console.log('inside service');
    const self = this;
//----------------------------------------//
            // GET REQUEST //
//----------------------------------------//
//function to get alphabet info from the database
    self.alphabetData = {};
    self.getAlphabet = function () {
        $http.get('/alphabet')
            .then((result) => {
                console.log('get result: ', result.data);
                self.alphabetData.list = result.data;
            })
            .catch(err => {
                console.log('hit error on getting alphabet data', err);
                res.sendStatus(500);
            });
    }//end get alphabet data

//function to get numbers info from the database
    self.NumbersData = {};
    self.getNumbers = function () {
        $http.get('/numbers')
            .then((result) => {
                console.log('get result: ', result.data);
                self.NumbersData.list = result.data;
            })
            .catch(err => {
                console.log('hit error on getting numbers', err);
                res.sendStatus(500);
            });
    }//end get numbers data

//function to get colors info from the database
    self.colorsData = {};
    self.getColors = function () {
        $http.get('/colors')
            .then((result) => {
                console.log('get result: ', result.data);
                self.colorsData.list = result.data;
            })
            .catch(err => {
                console.log('hit error on getting colors', err);
                res.sendStatus(500);
            });
    }//end get colors data

//function to get shapes info from the database
    self.ShapesData = {};
    self.getShapes = function () {
        $http.get('/shapes')
            .then((result) => {
                console.log('get result: ', result.data);
                self.ShapesData.list = result.data;
            })
            .catch(err => {
                console.log('hit error on getting shapes', err);
                res.sendStatus(500);
            });
    }//end get shapes data

//functions to get games info from the database
    self.gamesData = {};
    self.gamesData1 = {};
    self.getGames = function () {
        $http.get('/games')
            .then((result) => {
                console.log('getting game results: ', result.data);
                self.gamesData.list = result.data;
                
            })
    }//end get games data for first line of game
    self.getMoreGames = function () {
        $http.get('/games/more')
            .then((result) => {
                console.log('getting more game results: ', result.data);
                self.gamesData1.list = result.data;
                
            })
    }//end get games data for second line of game

//function for chrome speech synthesizer  
    self.sayMsg = function (message) {
        let msg = new SpeechSynthesisUtterance(message);
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[7]; // Note: voices are unpredictable at the moment, still experimental tech. 7 is the clearest male, 17 the clearest female, 25 is good
        msg.voiceURI = 'native';
        msg.volume = 1; // 0 to 1
        msg.rate = .8; // 0.1 to 10
        msg.pitch = 1; //0 to 2      
        msg.lang = 'en-US';
        window.speechSynthesis.speak(msg);
    }//end say message function

}]);//end service