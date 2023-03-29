import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: `postgres://dltzfbpm:SHIsJohSVNiIrfRjiIAQ0AJaESQpgMn9@snuffleupagus.db.elephantsql.com/dltzfbpm`,
});

export default pool;
