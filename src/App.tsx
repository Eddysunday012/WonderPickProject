// import { useState } from 'react'
import PokemonCard from "./components/PokemonCard";
import "./index.css";
// import { motion } from "motion/react";

function App() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex min-w-[346px] min-h-[98px] rounded-full shadow-2xl bg-white justify-center items-center">
        <p className="text-base font-sans text-center">
          Will poopy be my poopentine?
        </p>
      </div>
      <div className="grid grid-cols-3">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
      <div>Test if this goes through</div>
    </div>
  );
}

export default App;
