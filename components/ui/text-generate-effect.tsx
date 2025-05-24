import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const [hasAnimated, setHasAnimated] = useState(false); // prevent re-animating
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the element is at least partially visible
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            if (!scope.current) return;

            animate(
              "span",
              {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
              },
              {
                duration,
                delay: stagger(0.2),
              }
            );
          }
        });
      },
      { threshold: 0.1 } // trigger when 10% visible, adjust if needed
    );

    observer.observe(ref.current);

    // Cleanup on unmount
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, scope.current, animate, filter, duration, hasAnimated]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className="dark:text-white text-black text-2xl leading-snug tracking-wide"
          ref={ref} // observe this container for visibility
        >
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="dark:text-white text-black"
                style={{
                  opacity: 0,
                  filter: filter ? "blur(10px)" : "none",
                  willChange: "opacity, filter",
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
