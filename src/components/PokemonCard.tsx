import { useState } from "react";
import { motion } from "framer-motion";
import backOfCard from "@/assets/backOfCard.png";
import Poopymon from "@/assets/Poopymon.png";

export default function PokemonCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div className="flex items-center justify-center cursor-pointer">
      <div className="flip-card w-[94px] rounded-md" onClick={handleFlip}>
        <motion.div
          className="flip-card-inner w-[94px]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[94px] bg-cover  rounded-lg p-4"
            style={{ backgroundImage: "../assets/backOfCard.png" }}
          >
            <img src={backOfCard} alt="backOfCard" />
          </div>

          <div
            className="flip-card-back w-[94px] bg-cover  rounded-lg p-4"
            style={{ backgroundImage: "../assets/Poopymon.png" }}
          >
            <img src={Poopymon} alt="Poopymon" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
