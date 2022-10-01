import { ReactNode } from "react";

function CircuitBG({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex justify-center items-center w-full bg-circuitboard pointer-events-none">
      {children}
    </div>
  );
}

export default CircuitBG;
