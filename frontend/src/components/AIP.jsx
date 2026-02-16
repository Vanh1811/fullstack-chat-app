const AIP = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200/60 p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      </div>
      <div className="max-w-md text-center relative">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4 section-title">{title}</h2>
        <p className="text-base-content/70">{subtitle}</p>
      </div>
    </div>
  );
};

export default AIP;
