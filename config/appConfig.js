let appConfig = {};
let nodeMailer = {};

appConfig.port = 4200;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    
     uri: 'mongodb://127.0.0.1:27017/todoapplist'

}
  
appConfig.apiVersion = '/api/v1';

nodeMailer.email="vikkiraj1995@gmail.com";
nodeMailer.password = "Ravids@123456";

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db :appConfig.db,
    apiVersion : appConfig.apiVersion,
    email: nodeMailer.email,
    password: nodeMailer.password
};