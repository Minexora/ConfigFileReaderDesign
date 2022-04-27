import _conf from "../config/index.js";
import _pg from "pg";
// import { functions } from "lodash";

const conf = _conf();

const connection_string = `postgres://${conf.db_conf.user_name}:${conf.db_conf.pass}@${conf.db_conf.host}:${conf.db_conf.port}/${conf.db_conf.db_name}`;

export const pg_client = new _pg.Client(connection_string);

export const connect = () => new Promise((resolve, reject)=>{
  try {
    pg_client.connect();
    resolve(true);
  } catch (e) {
    reject(e)
  }
});
