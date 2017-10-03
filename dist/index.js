!function(e){function t(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(e,t){e.exports=require("express")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(10),s=r(11),o=function(){function e(){}return e.clearDB=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var e;return n.__generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,s.SurveyModel.remove({})];case 1:return r.sent(),t.status(200).send({code:0,message:"success"}),[3,3];case 2:return e=r.sent(),t.status(500).send({code:-4,message:e.data}),[3,3];case 3:return[2]}})})},e.getSurveyFormById=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var r,o,u;return n.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),r=e.params.id,[4,s.SurveyModel.findById(r)];case 1:return o=n.sent(),o||t.status(200).send({code:-1,message:"Survey not found"}),t.status(200).send({code:0,message:"success",data:o}),[3,3];case 2:return u=n.sent(),t.status(500).send({code:-4,message:u.data}),[3,3];case 3:return[2]}})})},e.getAllSurveyForms=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var e,r;return n.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,s.SurveyModel.find({})];case 1:return e=n.sent(),t.status(200).send({code:0,data:e}),[3,3];case 2:return r=n.sent(),t.status(500).send({code:-1,message:r.message}),[3,3];case 3:return[2]}})})},e.createSurveyForm=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var r,o,u,a,i,c,d;return n.__generator(this,function(n){switch(n.label){case 0:return r=e.body.info,o=r.title,u=r.description,a=r.action,i=e.body.content,c={title:o,description:u,content:JSON.stringify(i),author:"son",status:a},e.body.id?[3,2]:[4,s.SurveyModel.create(c)];case 1:return d=n.sent(),[3,4];case 2:return[4,s.SurveyModel.update({_id:e.body.id},c)];case 3:d=n.sent(),n.label=4;case 4:return d?t.status(200).send({code:0,message:"Success",data:d}):t.status(200).send({code:1,message:"Error"}),[2]}})})},e.createClientSurveyForm=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var r,o,u,a,i,c;return n.__generator(this,function(n){switch(n.label){case 0:return r=e.body.info,o=r.title,u=r.description,a=e.body.content,i={title:o,description:u,content:JSON.stringify(a),author:"son"},[4,s.SurveyModel.create(i)];case 1:return c=n.sent(),c?t.status(200).send({code:0,message:"SUCCESS",data:c}):t.status(200).send({code:1,message:"Error"}),[2]}})})},e.getAllSubmittedClientSurveyForms=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var e,r;return n.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,s.ClientSurveyModel.find({})];case 1:return e=n.sent(),t.status(200).send({code:0,data:e}),[3,3];case 2:return r=n.sent(),t.status(500).send({code:-1,data:r.message}),[3,3];case 3:return[2]}})})},e.clearAllClientForms=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var e;return n.__generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,s.ClientSurveyModel.remove({})];case 1:return r.sent(),t.status(200).send({code:0,message:"Success"}),[3,3];case 2:return e=r.sent(),t.status(500).send({code:-1,message:e.message}),[3,3];case 3:return[2]}})})},e.submitSurvey=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var r,o,u,a,i,c;return n.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),r=e.body.question,o=e.body.survey_id,u=void 0,[4,s.SurveyModel.findById(o)];case 1:return u=n.sent(),a=new s.ClientSurveyModel({content:JSON.stringify(r),status:"active",survey_id:u._id}),[4,s.ClientSurveyModel.create(a)];case 2:return i=n.sent(),i?t.status(200).send({code:0,message:"Success"}):t.status(200).send({code:1,message:"Error"}),[3,4];case 3:return c=n.sent(),t.status(500).send({code:-1,message:c.message}),[3,4];case 4:return[2]}})})},e.getClientSurveyFormById=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var r,o,u;return n.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),r=e.params.id,[4,s.ClientSurveyModel.find({survey_id:r})];case 1:return o=n.sent(),t.status(200).send({code:0,data:o}),[3,3];case 2:return u=n.sent(),t.status(500).send({code:-1,message:u.message}),[3,3];case 3:return[2]}})})},e}();t.default=o},function(e,t){e.exports=require("mongoose")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(12);t.jsonParser=n.json(),t.urlEncodedParser=n.urlencoded({extended:!1})},function(e,t,r){e.exports=r(5)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),s=r(6),o=r(8),u=r(9),a=r(13),i=r(14),c=n();s.default.mgConnect();var d=Object({NODE_ENV:"production"}).PORT||3e3,l=Object({NODE_ENV:"production"}).IP,f=function(){return console.log("Server is listening... "+(l||"localhost")+":"+d)};c.use(o.customCORS),c.use("/survey",u.default),c.use("/client-survey",a.default),c.use("/test",i.default),c.listen(d,l,f)},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),s=function(){function t(e,t){void 0===e&&(e="mongodb://localhost/form_database"),void 0===t&&(t={keepAlive:3e5,connectTimeoutMS:3e4,useMongoClient:!0}),this.mongodbURI=e,this.options=t}return t.mgConnect=function(r,s,o){void 0===o&&(o=e.Promise);var u=new t(r,s);n.Promise=o,n.connect(u.mongodbURI,u.options)},t}();t.default=s}).call(t,r(7))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";function n(e,t,r){t.header("Access-Control-Allow-Origin","*"),t.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),r()}Object.defineProperty(t,"__esModule",{value:!0}),t.customCORS=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),s=r(3),o=r(0).Router();o.get("/",n.default.getAllSurveyForms),o.get("/:id",n.default.getSurveyFormById),o.post("/",s.jsonParser,n.default.createSurveyForm),t.default=o},function(e,t){e.exports=require("tslib")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),s=new n.Schema({title:String,description:String,author:{id:{type:n.SchemaTypes.ObjectId,ref:"User"},username:String},content:n.SchemaTypes.Mixed,completed:Boolean}),o=n.model("Survey",s);t.SurveyModel=o;var u=new n.Schema({author:{id:{type:n.SchemaTypes.ObjectId,ref:"User"},username:String},content:n.SchemaTypes.Mixed,completed:Boolean}),a=n.model("ClientSurvey",u);t.ClientSurveyModel=a},function(e,t){e.exports=require("body-parser")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),s=r(3),o=r(0).Router();o.get("/",n.default.getAllSubmittedClientSurveyForms),o.get("/:id",n.default.getClientSurveyFormById),o.post("/",s.jsonParser,n.default.createClientSurveyForm),t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),s=r(0).Router();s.get("/clearDB",n.default.clearDB),s.get("/remove",n.default.clearAllClientForms),s.get("/",function(e,t){t.json({message:"api is running"})}),t.default=s}]);