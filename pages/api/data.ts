import { getDbConnection, initializeDatabase } from '../../utils/sqlite';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body.data;
    const db = await getDbConnection();
    await initializeDatabase(db);

    await db.run('INSERT INTO example_table (data) VALUES (?)', data);
    const result = await db.all('SELECT * FROM example_table');

    res.status(200).json(result);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
