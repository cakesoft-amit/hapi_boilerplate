const sugar = require('node-sugarcrm-client');





export const initDB = () => {
    const sessionId = null;
    try{
        console.log('inside try');
        sugar.init(
           {
               apiURL:  "http://localhost:8080/service/v4_1/rest.php"
              ,login:   "admin"
              ,passwd:  "4dmin"
           }
        );

        return new Promise((resolve, reject) => {
            sugar.login(function(sessionID){
                this.sessionId = sessionId;
                if (sessionID != 'undefined') {
                    // If you are here, you got a session ID
                    // and you can add all your query here
                    console.log('Your session ID is', sessionID);
                    resolve(sessionID);
                } else {
                    console.log("can't login, check your credentials");
                    reject(new Error("Error Logging In"));
                }
            });
        });
    }
    catch(err){
        console.log(err);
    }
    
};
  