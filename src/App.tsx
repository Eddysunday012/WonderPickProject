import PokemonCard from "@/components/PokemonCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import "./index.css";

import Poopymon from "@/assets/Poopymon.png";
import Poopymon1 from "@/assets/Poopymon1.png";
import Poopymon2 from "@/assets/Poopymon2.png";
import Poopymon3 from "@/assets/Poopymon3.png";
import Poopymon4 from "@/assets/Poopymon4.png";

function App() {
  const images = [Poopymon, Poopymon1, Poopymon2, Poopymon3, Poopymon4].sort(
    () => Math.random() - 0.5,
  );
  return (
    <div className="flex flex-col max-h-screen items-center justify-start gap-9">
      <div className="flex min-w-[346px] min-h-[98px] rounded-full shadow-2xl bg-white justify-center items-center">
        <p className="text-base font-sans text-center">
          Will poopy be my poopentine?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-[124px] items-center">
        {images.map((image) => (
          <div key={image}>
            <Dialog>
              <DialogTrigger>
                <PokemonCard Card={image} />
              </DialogTrigger>
              <DialogContent>
                <img src={image} className="w-full" />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
