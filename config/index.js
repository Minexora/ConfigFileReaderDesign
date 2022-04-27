import { createRequire } from "module";
import _ from "lodash";

import path from "path";
import minimist from "minimist";
import _dotenv from "dotenv";

// * for base_dirrections
const require = createRequire(import.meta.url);
const currentFilePath = import.meta.url.replace(/^file:\/\//g, "");
let __dirname = path.resolve(currentFilePath);
__dirname = "/" + _.initial(__dirname.split("/")).join("/");

// * args read
const args = minimist(process.argv.slice(2), { string: ["phone-number"] })

// * .env file read
const dotenv = _dotenv.config({path: path.join(__dirname, "../.env")});
const _env = dotenv.parsed;

const config = require("./config.json");
export default () => ({
  ...config,
  ..._env,
  args
});
