import { connect } from '@planetscale/database';

export default async (req, res) => {
  const config = {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  };
  // const conn = connect(config)
  // const results = await conn.execute('CREATE TABLE IF NOT EXISTS example_table (id INTEGER PRIMARY KEY AUTO_INCREMENT, data TEXT NOT NULL)')
  res.status(200).json({ name: 'Hello, world2!' });
};
