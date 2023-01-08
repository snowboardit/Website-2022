function CircuitBG({ children }) {
	return (
		<div className="relative flex justify-center items-center w-full bg-circuitboard pointer-events-none">
			{children}
		</div>
	);
}

export default CircuitBG;
