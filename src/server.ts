import * as express from "express";
import MgConfig from "./controllers/MgConfig";
import { customCORS } from "./controllers/headerController";
import routeSurvey from "./routes/routeSurvey";
// import routeClientSurvey from "./routes/routeClientSurvey";
import routeTest from "./routes/routeTest";
// import routePeakvn from "./routes/routePeakvn";

const app: express.Application = express();
// Connect to Database
MgConfig.mgConnect();
// ADD HEADER
app.use(customCORS);

// USE ROUTES
app.use("/survey", routeSurvey);
// app.use("/client-survey", routeClientSurvey);
app.use("/test", routeTest);
// app.use("/peak-vn/ecsite", routePeakvn);

app.get("/", (rq, rs) =>
  rs.send(
    "This is a node JS server for api fetching. Nothing too interesting here. If you are interest go to fb.com/DanielDNgo. PS: Im coool!",
  ),
);

export default app;
