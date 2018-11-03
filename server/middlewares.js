import bodyParser from "body-parser";
// import cors from "cors";
import morgan from "morgan";

export default app => {
  // app.use(cors());
  app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(morgan("dev"));
};
