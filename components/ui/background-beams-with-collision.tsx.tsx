"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  const beams = [
    { initialX: 10, translateX: 10, duration: 5, repeatDelay: 2, delay: 1 },
    { initialX: 10, translateX: 10, duration: 5, repeatDelay: 2, delay: 2 },
    { initialX: 600, translateX: 600, duration: 1.5, repeatDelay: 2, delay: 2 },
    { initialX: 100, translateX: 100, duration: 3, repeatDelay: 5, className: "h-10" },
    { initialX: 400, translateX: 400, duration: 3.5, repeatDelay: 9, delay: 2 },
    { initialX: 800, translateX: 800, duration: 4, repeatDelay: 1.5, className: "h-24" },
    { initialX: 1000, translateX: 1000, duration: 3, repeatDelay: 1.5, className: "h-14" },
    { initialX: 1200, translateX: 1200, duration: 4, repeatDelay: 3, delay: 1, className: "h-10" },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-screen w-full relative flex items-center justify-center overflow-hidden",
        className
      )}
      style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 20% -20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 60% 80% at 80% 50%, rgba(6, 95, 70, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #134e4a 50%, #065f46 75%, #047857 100%)
        `,
      }}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}

      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      />
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement | null>;
    parentRef: React.RefObject<HTMLDivElement | null>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);
    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 1500);
      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 1500);
    }
  }, [collision]);

  const beamGradient = `radial-gradient(ellipse 80% 50% at 20% -20%, rgba(16, 185, 129, 0.35) 0%, transparent 50%), 
                        radial-gradient(ellipse 60% 80% at 80% 50%, rgba(6, 95, 70, 0.5) 0%, transparent 50%), 
                        linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #134e4a 50%, #065f46 75%, #047857 100%)`;

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-20 rounded-full",
          "w-px", // 1px width for subtle beam
          beamOptions.className
        )}
        style={{
          backgroundImage: beamGradient,
          filter: "drop-shadow(0 0 6px rgba(16, 185, 129, 0.8))",
          opacity: 0.8,
        }}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
      />
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{ x: span.directionX, y: span.directionY, opacity: 0 }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
        />
      ))}
    </div>
  );
};
