import { Pool, defaults } from "pg";

import { _USER, _HOST, _DATABASE, _PASSWORD, _PORT } from "./config";
defaults.ssl = true;

export default new Pool({
  user: _USER,
  host: _HOST,
  database: _DATABASE,
  password: _PASSWORD,
  port: _PORT,
});
