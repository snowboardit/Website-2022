
function LeftPanel() {
  return (
    <div className="relative flex-col max-w-[400px] xl:max-w-[500px] xl:mx-16 xl:-rotate-6 border-b-8 border-orange">
      <div className="h-full -mb-[450px]">
        <img
          alt="max portrait"
          className="translate-y-1 pointer-events-none"
          src="/images/me.png"
          layout="fill"
        />
      </div>
      <div className="rounded-t-3xl border-2 border-orange bg-darkBlue shadow-md pt-[450px]"></div>
    </div>
  );
}

export default LeftPanel;
