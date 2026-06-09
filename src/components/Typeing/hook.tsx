import { useState, useEffect, useRef } from "react";

type Phase = "typing" | "pause" | "deleting" | "pause-before-type";

export function useTypeWriter(text: string, speed: number = 100) {
  const [displayText, setDisplayText] = useState("");
  const [done, setDone] = useState(false);
  const phaseRef = useRef<Phase>("typing");
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    phaseRef.current = "typing";
    setDone(false);
    setDisplayText("");

    const tick = () => {
      const phase = phaseRef.current;

      if (phase === "typing") {
        if (indexRef.current < text.length) {
          setDisplayText(text.slice(0, indexRef.current + 1));
          indexRef.current++;
        } else {
          setDone(true);
          phaseRef.current = "pause";
          setTimeout(() => {
            phaseRef.current = "deleting";
            setDone(false);
            timer = setInterval(tick, speed / 1.5);
          }, 1500);
          return;
        }
      } else if (phase === "deleting") {
        if (indexRef.current > 0) {
          indexRef.current--;
          setDisplayText(text.slice(0, indexRef.current));
        } else {
          phaseRef.current = "pause-before-type";
          clearInterval(timer);
          setTimeout(() => {
            phaseRef.current = "typing";
            timer = setInterval(tick, speed);
          }, 600);
          return;
        }
      }
    };

    let timer = setInterval(tick, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, done };
}
