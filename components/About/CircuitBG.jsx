function CircuitBG({ children }) {
  return (
    <div className="flex justify-center items-center w-full h-screen pt-36 bg-circuitboard pointer-events-none">
      {children}
    </div>
  );
}

export default CircuitBG;
