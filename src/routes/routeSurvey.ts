import SurveyController from "../controllers/surveyController";
const jsonParser = require("express").json();
const routeSurvey = require("express").Router();

// READ
// route /survey

routeSurvey
  .route("/")
  .get(SurveyController.getAllSurveyForms)
  .post(jsonParser, SurveyController.createSurveyForm);

routeSurvey
  .route("/authenticate")
  .post(jsonParser, SurveyController.authenticateUser);

routeSurvey.route("/recent").get(SurveyController.getAllRecentForms);

routeSurvey
  .route("/client")
  .get(SurveyController.submitClientSurvey)
  .post(jsonParser, SurveyController.submitClientSurvey)
  .put(jsonParser, SurveyController.submitClientSurvey);

routeSurvey.route("/client/:clientId").get(SurveyController.getClientSurveyFormById)

routeSurvey
  .route("/form/:formId")
  .get(SurveyController.getSurveyFormById)
  .put(jsonParser, SurveyController.updateSurveyForm)
  .delete(jsonParser, SurveyController.removeFormById);

export default routeSurvey;
