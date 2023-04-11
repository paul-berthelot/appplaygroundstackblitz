'use client';

import addUser from './mutationuser';
import { useZact } from 'zact/client';

export const Button = (props: {}) => {
  const { mutate } = useZact(addUser);

  return (
    <div>
      <button
        onClick={() => {
          mutate({ name: 'test' });
        }}
      >
        Add
      </button>
    </div>
  );
};
