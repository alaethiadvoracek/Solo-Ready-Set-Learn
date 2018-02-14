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

}]);//end service