function CircuitBG({ children }) {
  return (
    <div className="relative flex justify-center items-center w-full h-screen bg-circuitboard pointer-events-none">
      {children}
    </div>
  );
}

export default CircuitBG;
