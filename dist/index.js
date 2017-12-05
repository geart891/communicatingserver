!function(e){function t(s){if(r[s])return r[s].exports;var n=r[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,s){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=3)}([function(e,t){e.exports=require("express")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(9),n=r(10),u=function(){function e(){}return e.clearDB=function(e,t){return s.__awaiter(this,void 0,void 0,function(){var e;return s.__generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,n.SurveyModel.remove({})];case 1:return r.sent(),t.status(200).send({code:0,message:"success"}),[3,3];case 2:return e=r.sent(),t.status(500).send({code:-4,message:e.data}),[3,3];case 3:return[2]}})})},e.getSurveyFormById=function(e,t){return s.__awaiter(this,void 0,void 0,function(){var r,u,o;return s.__generator(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),r=e.params.formId,[4,n.SurveyModel.findById(r)];case 1:return u=s.sent(),u?t.status(200).send({code:0,message:"success",data:u}):t.status(200).send({code:-1,message:"Survey not found"}),[3,3];case 2:return o=s.sent(),t.status(500).send({code:-4,message:o.data}),[3,3];case 3:return[2]}})})},e.getAllSurveyForms=function(e,t){return s.__awaiter(this,void 0,void 0,function(){var e,r;return s.__generator(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,n.SurveyModel.find({})];case 1:return e=s.sent(),t.status(200).send({code:0,data:e}),[3,3];case 2:return r=s.sent(),t.status(500).send({code:-1,message:r.message}),[3,3];case 3:return[2]}})})},e.getAllRecentForms=function(e,t){return s.__awaiter(this,void 0,void 0,function(){var e,r,u;return s.__generator(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),console.log("get"),[4,n.SurveyModel.find({})];case 1:return e=s.sent(),r=e.map(function(e){return{title:e.title,formId:e._id,completed:e.completed,createdDate:e._id.getTimestamp()}}),t.status(200).send({code:0,data:r}),[3,3];case 2:return u=s.sent(),t.status(500).send({code:-1,message:u.message}),[3,3];case 3:return[2]}})})},e.createSurveyForm=function(e,t){return s.__awaiter(this,void 0,void 0,function(){var r,u,o;return s.__generator(this,function(s){switch(s.label){case 0:r=e.body,s.label=1;case 1:return s.trys.push([1,3,,4]),[4,n.SurveyModel.create(r)];case 2:return u=s.sent(),t.status(200).send({code:0,message:"Success",data:u}),[3,4];case 3:return o=s.sent(),t.status(500).send({code:1,message:o.message}),[3,4];case 4:return[2]}})})},e.getAllSubmittedClientSurveyForms=function(e,t){return s.__awaiter(this,void 0,void 0,function(){var e,r;return s.__generator(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,n.ClientSurveyModel.find({})];case 1:return e=s.sent(),t.status(200).send({code:0,data:e}),[3,3];case 2:return r=s.sent(),t.status(500).send({code:-1,data:r.message}),[3,3];case 3:return[2]}})})},e.clearAllClientForms=function(e,t){return s.__awaiter(this,void 0,void 0,function(){var e;return s.__generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,n.ClientSurveyModel.remove({})];case 1:return r.sent(),t.status(200).send({code:0,message:"Success"}),[3,3];case 2:return e=r.sent(),t.status(500).send({code:-1,message:e.message}),[3,3];case 3:return[2]}})})},e.submitClientSurvey=function(e,t){return s.__awaiter(this,void 0,void 0,function(){var r,u,o,a,i;return s.__generator(this,function(c){switch(c.label){case 0:return c.trys.push([0,5,,6]),r=e.body,u=r.clientSurveyId,o=s.__rest(r,["clientSurveyId"]),console.log(o),u?[4,n.SurveyModel.findByIdAndUpdate(u,o)]:[3,2];case 1:return c.sent(),t.status(200).send({code:0,message:"Update Client Survey Success"}),[3,4];case 2:return[4,n.ClientSurveyModel.create(o)];case 3:a=c.sent(),t.status(200).send({code:0,message:"Create Client Survey Success"}),c.label=4;case 4:return[3,6];case 5:return i=c.sent(),t.status(500).send({code:-1,message:i.message}),[3,6];case 6:return[2]}})})},e.getClientSurveyFormById=function(e,t){return s.__awaiter(this,void 0,void 0,function(){var r,u,o;return s.__generator(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),r=e.params.clientSurveyId,[4,n.ClientSurveyModel.find({_id:r})];case 1:return u=s.sent(),t.status(200).send({code:0,data:u,message:"Found Client Survey"}),[3,3];case 2:return o=s.sent(),t.status(500).send({code:-1,message:o.message}),[3,3];case 3:return[2]}})})},e.updateSurveyForm=function(e,t){return s.__awaiter(this,void 0,void 0,function(){var r,u,o;return s.__generator(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),r=e.params.formId,u=e.body,console.log(u),[4,n.SurveyModel.findByIdAndUpdate(r,u)];case 1:return s.sent(),t.status(200).send({code:0,message:"Update Survey Form Success"}),[3,3];case 2:return o=s.sent(),t.status(200).send({code:-1,message:o.message}),[3,3];case 3:return[2]}})})},e}();t.default=u},function(e,t){e.exports=require("mongoose")},function(e,t,r){e.exports=r(4)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),n=r(5),u=r(7),o=r(8),a=r(11),i=r(12),c=Object({NODE_ENV:"production"}).PORT||3e3,d=Object({NODE_ENV:"production"}).IP,l=function(){return console.log("Server is listening... "+(d||"localhost")+":"+c)},f=s();n.default.mgConnect(),f.use(u.customCORS),f.use("/survey",o.default),f.use("/client-survey",a.default),f.use("/test",i.default),f.listen(c,d,l)},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var s=r(2),n=function(){function t(e,t){void 0===e&&(e="mongodb://surveytest:123123@ds129776.mlab.com:29776/form_database"),void 0===t&&(t={keepAlive:3e5,connectTimeoutMS:3e4,useMongoClient:!0}),this.mongodbURI=e,this.options=t}return t.mgConnect=function(r,n,u){void 0===u&&(u=e.Promise);var o=new t(r,n);s.Promise=u,s.connect(o.mongodbURI,o.options)},t.getTime=function(e){return s.Types.ObjectId(e)},t}();t.default=n}).call(t,r(6))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";function s(e,t,r){t.header("Access-Control-Allow-Origin","*"),t.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),t.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),r()}Object.defineProperty(t,"__esModule",{value:!0}),t.customCORS=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),n=r(0).json(),u=r(0).Router();u.get("/",s.default.getAllSurveyForms),u.get("/recent-forms",s.default.getAllRecentForms),u.get("/:formId",s.default.getSurveyFormById),u.post("/",n,s.default.createSurveyForm),u.put("/:formId",n,s.default.updateSurveyForm),t.default=u},function(e,t){e.exports=require("tslib")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(2),n=new s.Schema({title:String,description:String,author:{id:{type:s.SchemaTypes.ObjectId,ref:"User"},username:String},sectionBreaks:[s.SchemaTypes.Mixed],contents:[s.SchemaTypes.Mixed],isDeleted:Boolean,completed:Boolean}),u=s.model("Survey",n);t.SurveyModel=u;var o=new s.Schema({author:{id:{type:s.SchemaTypes.ObjectId,ref:"User"},username:String},clientInfo:{firstName:String,lastName:String,email:String,phone:Number,address:String,gender:String},surveyId:String,contents:[s.SchemaTypes.Mixed],completed:Boolean}),a=s.model("ClientSurvey",o);t.ClientSurveyModel=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),n=r(0).Router(),u=r(0).json();n.get("/",s.default.getAllSubmittedClientSurveyForms),n.get("/:clientSurveyId",s.default.getClientSurveyFormById),n.post("/",u,s.default.submitClientSurvey),n.put("/:clientSurveyId",u,s.default.submitClientSurvey),t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),n=r(0).Router();n.get("/clearDB",s.default.clearDB),n.get("/remove",s.default.clearAllClientForms),n.get("/",function(e,t){t.json({message:"api is running"})}),t.default=n}]);