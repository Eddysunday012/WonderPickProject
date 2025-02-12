// import { useState } from 'react'
import PokemonCard from "./components/PokemonCard";
import "./index.css";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col max-h-screen items-center justify-start gap-9">
      <div className="flex min-w-[346px] min-h-[98px] rounded-full shadow-2xl bg-white justify-center items-center">
        <p className="text-base font-sans text-center">
          Will poopy be my poopentine?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-[124px] items-center">
        {numbers.map((number) => (
          <div key={number} className="grow">
            <PokemonCard Card={number} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
