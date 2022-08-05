import { useState } from 'react';
import { PencilAltIcon, TrashIcon, SaveIcon } from '@heroicons/react/solid';

import { useInput } from '../hooks/useInput';

type DeckInputProps = {
  id: string;
  name: string;
  updateDeck: any; // how to type this?
  isLoading: boolean;
};

const Deck = ({ id, name, updateDeck, isLoading }: DeckInputProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { value, bind, reset } = useInput(name || '');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateDeck.mutate({ id, name: value });
    setIsEditing(false);
  };

  return (
    <li className="p-4 border border-red-500">
      <div className="p-2 flex justify-between">
        {!isEditing ? (
          <div className="p-1.5">
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 " viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            ) : (
              name
            )}
          </div>
        ) : (
          <input
            {...bind}
            disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSave();
              }
            }}
            type="text"
            className="focus:ring-indigo-500 focus:border-indigo-500 block  p-2 pr-12 sm:text-sm text-gray-700 border-gray-300 rounded-md disabled:opacity-75"
          />
        )}
        <div className="flex gap-x-6 md:gap-x-12">
          <button
            type="button"
            disabled={isLoading}
            onClick={isEditing ? handleSave : handleEdit}
          >
            <span className="sr-only">
              {isEditing ? 'Save deck name' : 'Edit deck name'}
            </span>
            {isEditing ? (
              <SaveIcon className="h-5 w-5 text-sky-500 hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300" />
            ) : (
              <PencilAltIcon className="h-5 w-5 text-sky-500 hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300" />
            )}
          </button>
          <button type="button" disabled={isLoading}>
            <span className="sr-only">Delete deck</span>
            <TrashIcon className="h-5 w-5 text-sky-500 hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Deck;
