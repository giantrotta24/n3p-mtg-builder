import { DeckType } from '../pages/index';

import { useInput } from '../hooks/useInput';
import React from 'react';

type DeckInputProps = { id: string; name: string; description: string | null };

const Deck = ({ id, name, description }: DeckInputProps) => {
  const { value, bind, reset } = useInput(name || '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    reset();
  };

  return (
    <li className="p-4 border border-red-500">
      <div className="p-2">
        {name ? (
          <div className="p-1.5">{name}</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              {...bind}
              placeholder="Deck Name"
              className="p-2 bg-transparent border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            />
          </form>
        )}
      </div>
    </li>
  );
};

export default Deck;
