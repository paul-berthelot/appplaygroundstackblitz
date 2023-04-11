import Link from 'next/link';
import { db } from '../db';
import { people } from '../db/schema';
import { Button } from './button';

export default async function Page() {
  const peopleFromDb = await db.select().from(people);

  console.log('people', peopleFromDb);
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Nextjs Application</h1>
      <p className="text-xl">app directory</p>
      <Button />
    </div>
  );
}
