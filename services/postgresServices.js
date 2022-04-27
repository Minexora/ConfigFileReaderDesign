import { pg_client, connect } from "../loaders/postgresql.js";

connect()
  .then(() => {
    try {
      job_list.forEach(async (element) => {
        const data = Object.entries(element)
        const res = await pg_client.query(
          `call assignment_jobs('${data[0][0]}', '${data[0][1]}')`
        );
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  })
  .catch((error) => {
    console.error(`ERROR: ${error}`);
  });
