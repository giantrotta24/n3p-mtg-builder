import { useState } from 'react';
import { PencilAltIcon, TrashIcon, SaveIcon } from '@heroicons/react/solid';

import { useInput } from '../hooks/useInput';

import { trpc } from '../utils/trpc';

type DeckInputProps = {
  id: string;
  name: string;
  refetchDecks: () => void;
};

const Deck: React.FC<DeckInputProps> = ({ id, name, refetchDecks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { value, bind } = useInput(name || '');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const updateDeck = trpc.useMutation(['deck.updateDeck'], {
    onSuccess: () => {
      refetchDecks();
    },
    // handle error
  });

  const handleSave = () => {
    updateDeck.mutate({ id, name: value });
    setIsEditing(false);
  };

  const deleteDeck = trpc.useMutation(['deck.deleteDeck'], {
    onSuccess: () => {
      refetchDecks();
    },
    // handle error
  });

  const handleDelete = () => {
    deleteDeck.mutate({ id });
  };

  const isLoading = updateDeck.isLoading || deleteDeck.isLoading;

  return (
    <li className="p-4 border border-blue-200 bg-slate-800 shadow rounded-md">
      <div className="p-2 flex justify-between">
        {!isEditing ? (
          <div className="p-1.5">
            {isLoading ? (
              <svg
                className="animate-spin h-6 w-5 text-sky-300"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-75"
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="#23b6f5"
                  strokeWidth="2"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
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
          <button type="button" disabled={isLoading} onClick={handleDelete}>
            <span className="sr-only">Delete deck</span>
            <TrashIcon className="h-5 w-5 text-sky-500 hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Deck;
