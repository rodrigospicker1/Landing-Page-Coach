// app/components/TypingAnimation.tsx (ou .jsx)

"use client"; // Marca este como um Client Component

import { TypeAnimation } from 'react-type-animation';

interface TypingAnimationProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  repeat?: number;
}

const TypingAnimation = ({ 
  text, 
  className = "", 
  style = {}, 
  repeat = Infinity 
}: TypingAnimationProps) => {
  return (
    <TypeAnimation
      sequence={[
        text,
        2000, // Pausa por 2s
        '', // Apaga o texto
        500, // Pausa antes de reescrever
      ]}
      wrapper="span"
      speed={50}
      className={className}
      style={style}
      repeat={repeat}
    />
  );
};

export default TypingAnimation;