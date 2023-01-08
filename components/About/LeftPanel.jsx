function LeftPanel() {
	return (
		<div className="relative lg:-translate-y-8 flex flex-col max-w-[320px] sm:max-w-[400px] lg:max-w-[400px] mx-4 xl:mx-16 xl:-rotate-6 lg:border-b-2 border-orange">
			<div className="h-full -mb-[400px]">
				<img
					alt="max portrait"
					className="translate-y-1 pointer-events-none"
					src="/images/me.png"
					layout="fill"
				/>
			</div>
			<div className="rounded-t-3xl border-2 border-orange bg-orangeTrans shadow-md pt-[400px]"></div>
		</div>
	);
}

export default LeftPanel;
