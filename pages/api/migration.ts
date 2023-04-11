import { connect } from '@planetscale/database';

// npx drizzle-kit generate:mysql
const sqlString = `

`;

function readSqlString(sqlString: string): string[] {
  return sqlString.split(';');
}

export default async (req, res) => {
  const config = {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  };
  const conn = connect(config);
  const queries = readSqlString(sqlString);
  // Execute the queries using conn.query()
  for (const query of queries) {
    if (query.trim()) {
      await conn.execute(query.trim());
    }
  }
  res.status(200).json({ success: true });
};
