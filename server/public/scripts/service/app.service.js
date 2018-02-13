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

    /* POST REQUESTS */
    self.postData = function() {
        $http.post('/alphabet')
        .then((result) => {
            console.log('post result: ', result.data);
            self.alphabetData.list = result.data;
        })
    }//end post alphabet data

    /* PUT REQUESTS */
}]);//end service