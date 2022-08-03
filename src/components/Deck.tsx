import { Deck } from '../pages/index';

import { useInput } from '../hooks/useInput';

type DeckProps = Deck;

const Deck = ({ id, name, description }: Deck) => {
  const { value, bind, reset } = useInput(name || '');

  return (
    <li className="p-4 border border-red-500">
      {name ? (
        <div>{name}</div>
      ) : (
        <input
          {...bind}
          placeholder="Deck Name"
          className="p-2 bg-transparent border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
        />
      )}
    </li>
  );
};

export default Deck;
