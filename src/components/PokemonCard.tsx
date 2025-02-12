import { useState } from "react";
import { motion } from "framer-motion";

import backOfCard from "@/assets/backOfCard.png";
import Poopymon from "@/assets/Poopymon.png";
import Poopymon1 from "@/assets/Poopymon1.png";
import Poopymon2 from "@/assets/Poopymon2.png";
import Poopymon3 from "@/assets/Poopymon3.png";
import Poopymon4 from "@/assets/Poopymon4.png";

interface Props {
  Card: number;
}

export default function PokemonCard({ Card }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const cardMap = {
    1: Poopymon,
    2: Poopymon1,
    3: Poopymon2,
    4: Poopymon3,
    5: Poopymon4,
  } as Record<
    number,
    | typeof Poopymon
    | typeof Poopymon1
    | typeof Poopymon2
    | typeof Poopymon3
    | typeof Poopymon4
  >;

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div className="flex items-center justify-center cursor-pointer">
      <div className="flip-card w-[114px] rounded-md" onClick={handleFlip}>
        <motion.div
          className="flip-card-inner w-[114px]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[114px] bg-cover rounded-lg p-4"
            style={{ backgroundImage: "../assets/backOfCard.png" }}
          >
            <img src={backOfCard} alt="backOfCard" />
          </div>

          <div
            className="flip-card-back w-[114px] bg-cover  rounded-lg p-4"
            style={{ backgroundImage: "../assets/Poopymon.png" }}
          >
            <img src={cardMap[Card]} alt="Poopymon" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
