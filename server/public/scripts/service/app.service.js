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
            console.log(self.alphabetData);
        })
    }

    /* POST REQUESTS */


    /* PUT REQUESTS */
}]);//end service